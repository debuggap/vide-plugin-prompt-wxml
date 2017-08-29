import path from 'path'
import fs from 'fs'
import jsPrompt from 'vide-plugin-context-js'
import cssPrompt from 'vide-plugin-context-css'
import htmlPrompt from 'vide-plugin-context-html'

//当前支持的frameworks
const frameworks = ['zhifubao', 'weixin']

/*
* 内部集成的context
*/
let integratedContexts = {}
let integratedWords = []
let integratedMatch = {} // if valued has been matched, ignore it

/*
* 当前项目框架的context
*/
let frameworkContexts = {}

/*
* 当前js文件打开的context，一旦文件改变了，就要重新分析
*/
let currentWords = []
let currentMatch = {}
let currentContext = {}

let prevPromptStr = ''
let prevPromptLists = []
// mapResult is returned after analysing js file
let mapResult = null
// process instance
let process = null

function loadIntegratedWords () {
  let allWords = []
  let context
  let i
  // add context
  allWords = htmlPrompt.variables
  context = cssPrompt.context
  for (i in context) {
    integratedContexts[i] = context[i]
    allWords.push(i)
    allWords = allWords.concat(context[i])
  }
  context = jsPrompt.context
  for (i in context) {
    integratedContexts[i] = context[i]
    allWords.push(i)
    allWords = allWords.concat(context[i])
  }
  allWords = allWords.concat(jsPrompt.variables)
  
  // add variables
  let key
  for (i = 0; i < allWords.length; i++) {
    key = allWords[i].value || allWords[i]
    if (!integratedMatch[key]) {
      integratedWords.push(allWords[i])
      integratedMatch[key] = 1
    }
  }
}

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
    if (!currentMatch[item] && !integratedMatch[item]) {
      currentWords.push(item)
      currentMatch[item] = 1
    }
  })
}

function getTypedCharacters (action, store, editor) {
  if (action.action == 'remove' && !store.state.editor.promptLists.length) {
    return ''
  }
  if (action && action.lines.length === 1 && /^\S+$/.test(action.lines[0]) && action.start.row != undefined && action.start.row == action.end.row) {
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
    
    let value = str.match(/[a-zA-Z_\$][a-zA-Z0-9_$\.\-\:]*$/)
    if (value && value[0]) {
      value = value[0]
      let splitChar = value.includes(':') ? ':' : '.'
      let arr = value.split(splitChar)
      if (arr.length === 2) {
        if (integratedContexts[arr[0]] || currentContext[arr[0]] || frameworkContexts[arr[0]]) {
          value = {
            context: arr[0],
            value: arr[1]
          }
        } else {
          value = arr[1]
        }
      } else {
        value = arr.pop()
      }
    }
    return value ? value : '';
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
  let lists = integratedContexts[item.context] ? integratedContexts[item.context] : (frameworkContexts[item.context] ? frameworkContexts[item.context] : currentContext[item.context])
  if (item.value && lists) {
    let str = item.value
    lists = lists.filter((item) => {
      let v = item.name || item.value || item
      return v.includes(str)
    })
  }
  return lists
}

function _receive (data) {
  if (data) {
    mapResult = data
    let value
    let name
    for (let i in data.funcs) {
      name = i + '(' + data.funcs[i].params.join(',') + ')'
      value = i + '()'
      if (!currentMatch[name]) {
        currentWords.push({value, name, params: data.funcs[i].params})
        currentMatch[name] = 1
      }
    }
    // deal with context
    currentContext = {}
    for (let i in data.context) {
      let realPath = data.context[i]
      let obj
      try {
        obj = require(realPath)
      } catch (e) {
        continue
      }
      let properties = []
      if (Object.keys(obj).join('') === 'default') {
        obj = obj.default
      }
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          properties.push(key)
        }
      }
      currentContext[i] = properties.sort()
    }
  } else {
    mapResult = null
    currentContext = {}
  }
  if (process) {
    process.kill()
    process = null
  }
}

/*
* 分析当前文件
*/
function analyseFile (filepath, pkg, projectPath) {
  let extension = pkg.vide && pkg.vide.promptExtension || []
  if (process) {
    process.kill()
  }
  process = require('child_process').fork(path.join(__dirname, 'traverse.js'))
  process.send({filepath, extension, projectPath})
  process.on('message', _receive)
}

/*
* 根据当前的配置信息，导入相关的framework设置
*/
function analyseFramework (configFile) {
  fs.readFile(configFile, function (error, content) {
    if (!error) {
      content = content.toString()
      try {
        content = JSON.parse(content)
        if (frameworks.includes(content.frameType)) {
          let frameworkObject = require('./framework/' + content.frameType).default
          frameworkContexts = frameworkObject && frameworkObject.context || {}
          return
        }
      } catch (e) {}
    }
    frameworkContexts = {}
  })
}

export default ({editor, store, view, packageInfo, baseClass, signal, console}) => {
  global.console = console
  // load integrated words
  loadIntegratedWords()
  // subscribe change file
  store.subscribe((mutation, state) => {
    if (store.state.editor.promptName === 'videPluginPromptJS') {
      if (['EDITOR_SET_FILE_TYPE','FILE_CREATE'].includes(mutation.type)) {
        analyseFile(store.state.editor.currentFile, packageInfo.package, store.state.projectPath)
        analyseContent(store.state.editor.content)
        // 设置framework context
        analyseFramework(path.join(store.state.projectPath, '.videconfig'))
      }
    }
  })

  editor.session.on('change', function (action) {
    if (store.state.editor.promptName === 'videPluginPromptJS' && ["insert", "remove"].includes(action.action) && action.lines.join('') === '') {
      analyseFile(store.state.editor.currentFile, packageInfo.package, store.state.projectPath)
      analyseContent(editor.getValue())
    }
  })
  
  signal.receive('saveFile', () => {
    if (store.state.editor.promptName === 'videPluginPromptJS') {
      currentWords = []
      currentMatch = {}
      analyseFile(store.state.editor.currentFile, packageInfo.package, store.state.projectPath)
      analyseContent(store.state.editor.content)
    }
  })
  // return execute class
  return class videPluginPromptJS {
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
    
    // mapping vue component
    _mappingComponent (component) {
      let result = null
      if (mapResult.defaultSpecifier && mapResult.defaultSpecifier[component]) {
        result = mapResult.defaultSpecifier[component]
        result['value'] = component
      } else {
        let _component = component.replace(/-/g, '').toLowerCase()
        for (let key in mapResult.defaultSpecifier) {
          if (key.toLowerCase() === _component) {
            result = mapResult.defaultSpecifier[key]
            result['value'] = component
            break
          }
        }
      }
      return result
    }
    
    // mapping script tag
    mappingScript (position) {
      let line = editor.session.getLine(position.row)
      // map result
      let result = null
      let matchValue
      matchValue = this._mappingWord(line, position, /[\w\-\$]+$/, /^([\w\-\$]+)\(/, (result) => result[1])
      // mapping of call function
      if (matchValue) {
        result = mapResult.funcs[matchValue] || null
        if (result) {
          result['value'] = matchValue
        }
      } else if (/^\s*import/.test(line)) {
        // import mapping
        matchValue = this._mappingWord(line, position, /[\w\-\$]+$/, /^[\w\-\$]+/, (result) => result[0])
        if (matchValue) {
          result = this._mappingComponent(matchValue)
          if (!result) {
            // if this is not a default component
            result = mapResult.funcs[matchValue] || null
          }
        }
      }
      return result
    }
    
    /*
    * 根据位置，查找函数定义
    */
    mapping ({position}) {
      return this.mappingScript(position)
    }
    
    /*
    * 根据位置，查找函数说明
    */
    mappingFunctionDesc ({position}) {
      let line = editor.session.getLine(position.row)
      // map result
      let matchResult
      let result = null
      matchResult = this._mappingWord(line, position, /[\w\-\$\.]+$/, /^([\w\-\$]+)\.([\w\-\$]+)\(/, (result) => {return {context: result[1], value: result[2]}})
      if (matchResult.context && matchResult.value) {
        let context = matchResult.context
        let value = matchResult.value
        let arr = frameworkContexts[context]
        if (arr) {
          arr.some((item) => {
            if (item.name === value && item.desc) {
              result = item
              return true
            } else {
              return false
            }
          })
        }
      }
      return result
    }
  }
}
