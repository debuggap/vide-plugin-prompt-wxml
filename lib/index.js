'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _properties = require('./properties');

var _properties2 = _interopRequireDefault(_properties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
* 内部集成的context
*/
var integratedWords = Object.keys(_properties2.default.context);
var integratedContext = _properties2.default.context;
var integratedDesc = _properties2.default.desc;

/*
* 当前页面的
*/
var currentWords = [];
var currentMatch = {};

var prevPromptStr = '';
var prevPromptLists = [];

/*
* analyse current file
* @param {String} con：filecontent
*/
function analyseContent(con) {
  var reg = /([a-zA-Z_\$][a-zA-Z0-9_\$]{3,})/g;
  var arr = con.match(reg);
  if (!arr) {
    return;
  }
  arr.forEach(function (item) {
    if (!currentMatch[item]) {
      currentWords.push(item);
      currentMatch[item] = 1;
    }
  });
}

function getTypedCharacters(action, store, editor) {
  if (action.action == 'remove' && !store.state.editor.promptLists.length) {
    return '';
  }
  if (action && action.lines.length === 1 && action.start.row != undefined && action.start.row == action.end.row) {
    var session = editor.session;
    var line = session.getLine(action.start.row);
    var str = void 0;
    var after_adding_letter = "";

    if (action.action == 'insert' && action.lines[0].length == 1) {
      str = line.slice(0, action.end.column);
      after_adding_letter = line.slice(action.end.column, action.end.column + 1);
    } else if (action.action == 'remove' && action.lines[0].length == 1) {
      str = line.slice(0, action.start.column);
      after_adding_letter = line.slice(action.start.column, action.start.column + 1);
    } else {
      return '';
    }

    // if after adding letter,there is a legal letter,it means we are editing in a word,
    if (after_adding_letter && /[a-zA-Z0-9_$]+$/.test(after_adding_letter)) {
      return '';
    }

    var value = str.match(/<([\w\-]+)$/);
    if (value) {
      // 如果是元素
      value = {
        context: '<',
        value: value[1]
      };
    } else {
      // 查看是否在编辑元素属性
      var propertyMatch = str.match(/\s+[a-zA-Z_\$\-]+$|\s$/);
      var eleMatch = str.match(/<([\w\-]+).*$/);
      if (eleMatch && propertyMatch && integratedContext[eleMatch[1]] && integratedContext[eleMatch[1]].length) {
        propertyMatch = propertyMatch[0].trim();
        value = {
          value: propertyMatch,
          context: eleMatch[1]
        };
      } else {
        value = str.match(/[a-zA-Z_\$\-]+$/);
        if (value) {
          value = value[0];
        }
      }
    }
    return value ? value : '';
  } else {
    return '';
  }
}

function matchWords(str) {
  str = str.replace('$', '\\$');
  var reg = new RegExp('^' + str, 'i');
  // 把集成的words跟当前文件的words进行合并
  var lists = integratedWords.concat(currentWords);
  if (prevPromptStr && str.slice(0, prevPromptStr.length) === prevPromptStr) {
    lists = prevPromptLists;
  }
  var results = [];
  results = lists.filter(function (item) {
    if (item.value) {
      return reg.test(item.value);
    } else {
      return reg.test(item);
    }
  });
  if (!results.length) {
    reg = new RegExp(str, 'i');
    results = lists.filter(function (item) {
      if (item.value) {
        return reg.test(item.value);
      } else {
        return reg.test(item);
      }
    });
  }
  results.sort(function (a, b) {
    a = a.value || a;
    b = b.value || b;
    return a > b ? 1 : -1;
  });
  return results;
}

function matchContext(item) {
  var lists = null;
  if (item.context === '<') {
    // 元素选择
    lists = integratedWords;
  } else if (integratedContext[item.context]) {
    lists = integratedContext[item.context];
  }
  if (item.value && lists) {
    var str = item.value;
    lists = lists.filter(function (item) {
      var v = item.name || item.value || item;
      return v.includes(str);
    });
  }
  return lists;
}

exports.default = function (_ref) {
  var editor = _ref.editor,
      store = _ref.store,
      view = _ref.view,
      packageInfo = _ref.packageInfo,
      baseClass = _ref.baseClass,
      signal = _ref.signal,
      console = _ref.console;

  global.console = console;
  // subscribe change file
  store.subscribe(function (mutation, state) {
    if (store.state.editor.promptName === 'videPluginPromptWXML') {
      if (['EDITOR_SET_FILE_TYPE', 'FILE_CREATE'].includes(mutation.type)) {
        analyseContent(store.state.editor.content);
      }
    }
  });

  // return execute class
  return function () {
    function videPluginPromptWXML() {
      _classCallCheck(this, videPluginPromptWXML);
    }

    _createClass(videPluginPromptWXML, [{
      key: 'index',
      value: function index(_ref2) {
        var action = _ref2.action;

        var promptLists = [];
        var promptStr = '';
        try {
          promptStr = getTypedCharacters(action, store, editor);
          if (promptStr && (typeof promptStr === 'undefined' ? 'undefined' : _typeof(promptStr)) === 'object') {
            promptLists = matchContext(promptStr);
            promptStr = promptStr.value;
          } else if (promptStr) {
            promptLists = matchWords(promptStr);
          }
        } catch (e) {}
        if (promptLists.length) {
          prevPromptStr = promptStr;
          prevPromptLists = promptLists;
          store.dispatch('editor/setPromptLists', { promptStr: promptStr, promptLists: promptLists });
        } else {
          prevPromptStr = '';
          prevPromptLists = [];
          store.dispatch('editor/cleanPromptLists');
        }
      }

      /*
      * mapping word according to position
      */

    }, {
      key: '_mappingWord',
      value: function _mappingWord(line, position, endReg, startReg, callback) {
        var prevFlagment = line.slice(0, position.column);
        var matches = prevFlagment.match(endReg);
        var result = null;
        if (matches) {
          result = line.slice(matches.index).match(startReg);
          if (result && callback) {
            result = callback(result);
          }
        }
        return result;
      }

      /*
      * 根据位置，查找函数说明
      */

    }, {
      key: 'mappingFunctionDesc',
      value: function mappingFunctionDesc(_ref3) {
        var position = _ref3.position;

        var line = editor.session.getLine(position.row);
        // map result
        var matchResult = void 0;
        var result = null;
        matchResult = this._mappingWord(line, position, /^\s*<[\w\-]+$/, /^\s*<([\w\-]+)/, function (result) {
          return result[1];
        });
        // 元素类型
        if (matchResult && integratedDesc[matchResult]) {
          result = { desc: integratedDesc[matchResult] };
        } else {
          // 属性类型
          var property = this._mappingWord(line, position, /[\w\-]+$/, /^[\w\-]+/, function (result) {
            return result[0];
          });
          if (property) {
            var context = line.match(/^\s*<([\w\-]+)/);
            if (context) {
              context = context[1];
              if (integratedContext[context]) {
                var arr = integratedContext[context];
                for (var i = 0; i < arr.length; i++) {
                  if (arr[i].name === property) {
                    result = { desc: '<h3>' + context + ' : ' + property + '</h3><p>' + arr[i].info + '</p>' };
                    break;
                  }
                }
              }
            }
          }
        }
        return result;
      }
    }]);

    return videPluginPromptWXML;
  }();
};