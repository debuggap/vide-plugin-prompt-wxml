import path from 'path'
import fs from 'fs'
import Properties from './properties'

/*
* 内部集成的context
*/
let integratedWords = Object.keys(Properties.context)
let integratedContext = Properties.context
let integratedDesc = Properties.desc

/*
* 当前页面的
*/
let currentWords = []
let currentMatch = {}

let prevPromptStr = ''
let prevPromptLists = []

/*
* analyse current file
* @param {String} con：filecontent
*/
function analyseContent (con) {
  let reg = /([a-zA-Z_\$][a-zA-Z0-9_\$]{3,})/g
  let arr = con.match(reg)
  if (!arr) {
    return
  }
  arr.forEach((item) => {
    if (!currentMatch[item]) {
      currentWords.push(item)
      currentMatch[item] = 1
    }
  })
}

function getTypedCharacters (action, store, editor) {
  if (action.action == 'remove' && !store.state.editor.promptLists.length) {
    return ''
  }
  if (action && action.lines.length === 1 && action.start.row != undefined && action.start.row == action.end.row) {
    let session = editor.session
    let line = session.getLine(action.start.row)
    let str
    let after_adding_letter = ""
    
    if (action.action == 'insert' && action.lines[0].length == 1) {
      str = line.slice(0, action.end.column)
      after_adding_letter = line.slice(action.end.column, action.end.column + 1)
    } else if (action.action == 'remove' && action.lines[0].length == 1) {
      str = line.slice(0, action.start.column)
      after_adding_letter = line.slice(action.start.column, action.start.column + 1)
    } else {
      return ''
    }
    
    // if after adding letter,there is a legal letter,it means we are editing in a word,
    if (after_adding_letter && /[a-zA-Z0-9_$]+$/.test(after_adding_letter)) {
      return ''
    }
    
    let value = str.match(/<([\w\-]+)$/)
    if (value) {
      // 如果是元素
      value = {
        context: '<',
        value: value[1]
      }
    } else {
      // 查看是否在编辑元素属性
      let propertyMatch = str.match(/\s+[a-zA-Z_\$\-]+$|\s$/)
      let eleMatch = str.match(/<([\w\-]+).*$/)
      if (eleMatch && propertyMatch && integratedContext[eleMatch[1]] && integratedContext[eleMatch[1]].length) {
        propertyMatch = propertyMatch[0].trim()
        value = {
          value: propertyMatch,
          context: eleMatch[1]
        }
      } else {
        value = str.match(/[a-zA-Z_\$\-]+$/)
        if (value) {
          value = value[0]
        }
      }
    }
    return value ? value : ''
  } else {
    return ''
  }
}

function matchWords (str) {
  str = str.replace('$','\\$')
  let reg = new RegExp('^' + str, 'i')
  // 把集成的words跟当前文件的words进行合并
  let lists = integratedWords.concat(currentWords)
  if (prevPromptStr && str.slice(0, prevPromptStr.length) === prevPromptStr) {
      lists = prevPromptLists
  }
  let results = []
  results = lists.filter((item) => {
    if (item.value) {
      return reg.test(item.value) 
    } else {
      return reg.test(item)
    }
  })
  if (!results.length) {
    reg = new RegExp(str, 'i')
    results = lists.filter((item) => {
      if (item.value) {
        return reg.test(item.value) 
      } else {
        return reg.test(item)
      }
    })
  }
  results.sort(function (a,b){
    a = a.value || a
    b = b.value || b
    return a > b? 1 : -1;
  })
  return results
}

function matchContext (item) {
  let lists = null
  if (item.context === '<') {
    // 元素选择
    lists = integratedWords
  } else if (integratedContext[item.context]) {
    lists = integratedContext[item.context]
  }
  if (item.value && lists) {
    let str = item.value
    lists = lists.filter((item) => {
      let v = item.name || item.value || item
      return v.includes(str)
    })
  }
  return lists
}


export default ({editor, store, view, packageInfo, baseClass, signal, console}) => {
  global.console = console
  // subscribe change file
  store.subscribe((mutation, state) => {
    if (store.state.editor.promptName === 'videPluginPromptWXML') {
      if (['EDITOR_SET_FILE_TYPE','FILE_CREATE'].includes(mutation.type)) {
        analyseContent(store.state.editor.content)
      }
    }
  })

  // return execute class
  return class videPluginPromptWXML {
    index ({action}) {
      let promptLists = []
      let promptStr = ''
      try {
        promptStr = getTypedCharacters(action, store, editor)
        if (promptStr && typeof promptStr === 'object') {
          promptLists = matchContext(promptStr)
          promptStr = promptStr.value
        } else if (promptStr) {
          promptLists = matchWords(promptStr)
        }
      } catch (e) {}
      if (promptLists.length) {
        prevPromptStr = promptStr
        prevPromptLists = promptLists
        store.dispatch('editor/setPromptLists', {promptStr, promptLists})
      } else {
        prevPromptStr = ''
        prevPromptLists = []
        store.dispatch('editor/cleanPromptLists')
      }
    }
    
    /*
    * mapping word according to position
    */
    _mappingWord (line, position, endReg, startReg, callback) {
      let prevFlagment = line.slice(0, position.column)
      let matches = prevFlagment.match(endReg)
      let result = null
      if (matches) {
        result = line.slice(matches.index).match(startReg)
        if (result && callback) {
          result = callback(result)
        }
      }
      return result
    }
    
    /*
    * 根据位置，查找函数说明
    */
    mappingFunctionDesc ({position}) {
      let line = editor.session.getLine(position.row)
      // map result
      let matchResult
      let result = null
      matchResult = this._mappingWord(line, position, /^\s*<[\w\-]+$/, /^\s*<([\w\-]+)/, (result) => result[1])
      // 元素类型
      if (matchResult && integratedDesc[matchResult]) {
        result = {desc: integratedDesc[matchResult]}
      } else {
        // 属性类型
        let property = this._mappingWord(line, position, /[\w\-]+$/, /^[\w\-]+/, (result) => result[0])
        if (property) {
          let context = line.match(/^\s*<([\w\-]+)/)
          if (context) {
            context = context[1]
            if (integratedContext[context]) {
              let arr = integratedContext[context]
              for (let i = 0; i < arr.length; i++) {
                if (arr[i].name === property) {
                  result = {desc: `<h3>${context} : ${property}</h3><p>${arr[i].info}</p>`}
                  break
                }
              }
            }
          }
        }
      }
      return result
    }
  }
}
