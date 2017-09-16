var context = {
  "view": [
      {
          "name": "hover-class",
          "value": "hover-class=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "none",
          "info": "指定按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
      },
      {
          "name": "hover-stop-propagation",
          "value": "hover-stop-propagation=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "指定是否阻止本节点的祖先节点出现点击态"
      },
      {
          "name": "hover-start-time",
          "value": "hover-start-time=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "50",
          "info": "按住后多久出现点击态，单位毫秒"
      },
      {
          "name": "hover-stay-time",
          "value": "hover-stay-time=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "400",
          "info": "手指松开后点击态保留时间，单位毫秒"
      }
  ],
  "scroll-view": [
      {
          "name": "scroll-x",
          "value": "scroll-x=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "允许横向滚动"
      },
      {
          "name": "scroll-y",
          "value": "scroll-y=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "允许纵向滚动"
      },
      {
          "name": "upper-threshold",
          "value": "upper-threshold=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "50",
          "info": "距顶部/左边多远时（单位px），触发 scrolltoupper 事件"
      },
      {
          "name": "lower-threshold",
          "value": "lower-threshold=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "50",
          "info": "距底部/右边多远时（单位px），触发 scrolltolower 事件"
      },
      {
          "name": "scroll-top",
          "value": "scroll-top=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "设置竖向滚动条位置"
      },
      {
          "name": "scroll-left",
          "value": "scroll-left=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "设置横向滚动条位置"
      },
      {
          "name": "scroll-into-view",
          "value": "scroll-into-view=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素"
      },
      {
          "name": "scroll-with-animation",
          "value": "scroll-with-animation=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "在设置滚动条位置时使用动画过渡"
      },
      {
          "name": "enable-back-to-top",
          "value": "enable-back-to-top=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向"
      },
      {
          "name": "bindscrolltoupper",
          "value": "bindscrolltoupper=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "滚动到顶部/左边，会触发 scrolltoupper 事件"
      },
      {
          "name": "bindscrolltolower",
          "value": "bindscrolltolower=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "滚动到底部/右边，会触发 scrolltolower 事件"
      },
      {
          "name": "bindscroll",
          "value": "bindscroll=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}"
      }
  ],
  "swiper": [
      {
          "name": "indicator-dots",
          "value": "indicator-dots=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否显示面板指示点"
      },
      {
          "name": "indicator-color",
          "value": "indicator-color=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "rgba(0, 0, 0, .3)",
          "info": "指示点颜色"
      },
      {
          "name": "indicator-active-color",
          "value": "indicator-active-color=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "#000000",
          "info": "当前选中的指示点颜色"
      },
      {
          "name": "autoplay",
          "value": "autoplay=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否自动切换"
      },
      {
          "name": "current",
          "value": "current=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "0",
          "info": "当前所在页面的 index"
      },
      {
          "name": "interval",
          "value": "interval=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "5000",
          "info": "自动切换时间间隔"
      },
      {
          "name": "duration",
          "value": "duration=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "500",
          "info": "滑动动画时长"
      },
      {
          "name": "circular",
          "value": "circular=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否采用衔接滑动"
      },
      {
          "name": "vertical",
          "value": "vertical=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "滑动方向是否为纵向"
      },
      {
          "name": "bindchange",
          "value": "bindchange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "current 改变时会触发 change 事件，event.detail = {current: current, source: source}"
      }
  ],
  "swiper-item": [  ],
  "movable-area": [  ],
  "movable-view": [
      {
          "name": "direction",
          "value": "direction=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "none",
          "info": "movable-view的移动方向，属性值有all、vertical、horizontal、none"
      },
      {
          "name": "inertia",
          "value": "inertia=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "movable-view是否带有惯性"
      },
      {
          "name": "out-of-bounds",
          "value": "out-of-bounds=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "超过可移动区域后，movable-view是否还可以移动"
      },
      {
          "name": "x",
          "value": "x=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画"
      },
      {
          "name": "y",
          "value": "y=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画"
      },
      {
          "name": "damping",
          "value": "damping=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "20",
          "info": "阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快"
      },
      {
          "name": "friction",
          "value": "friction=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "2",
          "info": "摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值"
      }
  ],
  "cover-view": [  ],
  "cover-image": [
      {
          "name": "src",
          "value": "src=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "图标路径，支持临时路径。暂不支持base64与网络地址。"
      }
  ],
  "icon": [
      {
          "name": "type",
          "value": "type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear"
      },
      {
          "name": "size",
          "value": "size=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "23",
          "info": "icon的大小，单位px"
      },
      {
          "name": "color",
          "value": "color=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "icon的颜色，同css的color"
      }
  ],
  "text": [
      {
          "name": "selectable",
          "value": "selectable=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "文本是否可选"
      },
      {
          "name": "space",
          "value": "space=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "显示连续空格"
      },
      {
          "name": "decode",
          "value": "decode=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否解码"
      }
  ],
  "rich-text": [
      {
          "name": "nodes",
          "value": "nodes=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "[]",
          "info": "节点列表 / HTML String"
      }
  ],
  "progress": [
      {
          "name": "percent",
          "value": "percent=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "无",
          "info": "百分比0~100"
      },
      {
          "name": "show-info",
          "value": "show-info=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "在进度条右侧显示百分比"
      },
      {
          "name": "stroke-width",
          "value": "stroke-width=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "6",
          "info": "进度条线的宽度，单位px"
      },
      {
          "name": "color",
          "value": "color=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "#09BB07",
          "info": "进度条颜色 （请使用 activeColor）"
      },
      {
          "name": "activeColor",
          "value": "activeColor=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "已选择的进度条的颜色"
      },
      {
          "name": "backgroundColor",
          "value": "backgroundColor=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "未选择的进度条的颜色"
      },
      {
          "name": "active",
          "value": "active=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "进度条从左往右的动画"
      }
  ],
  "button": [
      {
          "name": "size",
          "value": "size=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "default",
          "info": "按钮的大小"
      },
      {
          "name": "type",
          "value": "type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "default",
          "info": "按钮的样式类型"
      },
      {
          "name": "plain",
          "value": "plain=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "按钮是否镂空，背景色透明"
      },
      {
          "name": "disabled",
          "value": "disabled=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否禁用"
      },
      {
          "name": "loading",
          "value": "loading=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "名称前是否带 loading 图标"
      },
      {
          "name": "form-type",
          "value": "form-type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "用于 <form/> 组件，点击分别会触发 <form/> 组件的 submit/reset 事件"
      },
      {
          "name": "open-type",
          "value": "open-type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "微信开放能力"
      },
      {
          "name": "hover-class",
          "value": "hover-class=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "button-hover",
          "info": "指定按钮按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果"
      },
      {
          "name": "hover-stop-propagation",
          "value": "hover-stop-propagation=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "指定是否阻止本节点的祖先节点出现点击态"
      },
      {
          "name": "hover-start-time",
          "value": "hover-start-time=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "20",
          "info": "按住后多久出现点击态，单位毫秒"
      },
      {
          "name": "hover-stay-time",
          "value": "hover-stay-time=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "70",
          "info": "手指松开后点击态保留时间，单位毫秒"
      },
      {
          "name": "bindgetuserinfo",
          "value": "bindgetuserinfo=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同wx.getUserInfo"
      },
      {
          "name": "session-from",
          "value": "session-from=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "会话来源"
      },
      {
          "name": "send-message-title",
          "value": "send-message-title=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "当前标题",
          "info": "会话内消息卡片标题"
      },
      {
          "name": "send-message-path",
          "value": "send-message-path=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "当前分享路径",
          "info": "会话内消息卡片点击跳转小程序路径"
      },
      {
          "name": "send-message-img",
          "value": "send-message-img=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "截图",
          "info": "会话内消息卡片图片"
      },
      {
          "name": "show-message-card",
          "value": "show-message-card=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "显示会话内消息卡片"
      },
      {
          "name": "bindcontact",
          "value": "bindcontact=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "客服消息回调"
      },
      {
          "name": "bindgetphonenumber",
          "value": "bindgetphonenumber=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "获取用户手机号回调"
      }
  ],
  "checkbox-group": [
      {
          "name": "bindchange",
          "value": "bindchange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "<checkbox-group/>中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]}"
      }
  ],
  "checkbox": [
      {
          "name": "value",
          "value": "value=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "<checkbox/>标识，选中时触发<checkbox-group/>的 change 事件，并携带 <checkbox/> 的 value"
      },
      {
          "name": "disabled",
          "value": "disabled=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否禁用"
      },
      {
          "name": "checked",
          "value": "checked=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "当前是否选中，可用来设置默认选中"
      },
      {
          "name": "color",
          "value": "color=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "checkbox的颜色，同css的color"
      }
  ],
  "form": [
      {
          "name": "report-submit",
          "value": "report-submit=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "是否返回 formId 用于发送模板消息",
          "info": ""
      },
      {
          "name": "bindsubmit",
          "value": "bindsubmit=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}",
          "info": ""
      },
      {
          "name": "bindreset",
          "value": "bindreset=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "表单重置时会触发 reset 事件",
          "info": ""
      }
  ],
  "input": [
      {
          "name": "value",
          "value": "value=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "输入框的初始内容"
      },
      {
          "name": "type",
          "value": "type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "\"text\"",
          "info": "input 的类型"
      },
      {
          "name": "password",
          "value": "password=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否是密码类型"
      },
      {
          "name": "placeholder",
          "value": "placeholder=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "输入框为空时占位符"
      },
      {
          "name": "placeholder-style",
          "value": "placeholder-style=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "指定 placeholder 的样式"
      },
      {
          "name": "placeholder-class",
          "value": "placeholder-class=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "\"input-placeholder\"",
          "info": "指定 placeholder 的样式类"
      },
      {
          "name": "disabled",
          "value": "disabled=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否禁用"
      },
      {
          "name": "maxlength",
          "value": "maxlength=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "140",
          "info": "最大输入长度，设置为 -1 的时候不限制最大长度"
      },
      {
          "name": "cursor-spacing",
          "value": "cursor-spacing=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "0",
          "info": "指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
      },
      {
          "name": "auto-focus",
          "value": "auto-focus=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "(即将废弃，请直接使用 focus )自动聚焦，拉起键盘"
      },
      {
          "name": "focus",
          "value": "focus=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "获取焦点"
      },
      {
          "name": "confirm-type",
          "value": "confirm-type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "\"done\"",
          "info": "设置键盘右下角按钮的文字"
      },
      {
          "name": "confirm-hold",
          "value": "confirm-hold=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "点击键盘右下角按钮时是否保持键盘不收起"
      },
      {
          "name": "cursor",
          "value": "cursor=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "指定focus时的光标位置"
      },
      {
          "name": "bindinput",
          "value": "bindinput=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当键盘输入时，触发input事件，event.detail = {value, cursor}，处理函数可以直接 return 一个字符串，将替换输入框的内容。"
      },
      {
          "name": "bindfocus",
          "value": "bindfocus=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "输入框聚焦时触发，event.detail = {value: value}"
      },
      {
          "name": "bindblur",
          "value": "bindblur=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "输入框失去焦点时触发，event.detail = {value: value}"
      },
      {
          "name": "bindconfirm",
          "value": "bindconfirm=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "点击完成按钮时触发，event.detail = {value: value}"
      }
  ],
  "label": [  ],
  "picker": [
      {
          "name": "range",
          "value": "range=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "[]",
          "info": "mode为 selector 或 multiSelector 时，range 有效"
      },
      {
          "name": "range-key",
          "value": "range-key=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容"
      },
      {
          "name": "value",
          "value": "value=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "0",
          "info": "value 的值表示选择了 range 中的第几个（下标从 0 开始）"
      },
      {
          "name": "bindchange",
          "value": "bindchange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "value 改变时触发 change 事件，event.detail = {value: value}"
      },
      {
          "name": "disabled",
          "value": "disabled=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否禁用"
      }
  ],
  "picker-view": [
      {
          "name": "value",
          "value": "value=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。",
          "info": ""
      },
      {
          "name": "indicator-style",
          "value": "indicator-style=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "设置选择器中间选中框的样式",
          "info": ""
      },
      {
          "name": "indicator-class",
          "value": "indicator-class=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "设置选择器中间选中框的类名",
          "info": "1.1.0"
      },
      {
          "name": "mask-style",
          "value": "mask-style=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "设置蒙层的样式",
          "info": "1.5.0"
      },
      {
          "name": "mask-class",
          "value": "mask-class=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "设置蒙层的类名",
          "info": "1.5.0"
      },
      {
          "name": "bindchange",
          "value": "bindchange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）",
          "info": ""
      }
  ],
  "picker-view-column": [  ],
  "radio-group": [
      {
          "name": "bindchange",
          "value": "bindchange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "<radio-group/> 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value}"
      }
  ],
  "radio": [
      {
          "name": "value",
          "value": "value=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "<radio/> 标识。当该<radio/> 选中时，<radio-group/> 的 change 事件会携带<radio/>的value"
      },
      {
          "name": "checked",
          "value": "checked=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "当前是否选中"
      },
      {
          "name": "disabled",
          "value": "disabled=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否禁用"
      },
      {
          "name": "color",
          "value": "color=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "radio的颜色，同css的color"
      }
  ],
  "slider": [
      {
          "name": "min",
          "value": "min=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "0",
          "info": "最小值"
      },
      {
          "name": "max",
          "value": "max=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "100",
          "info": "最大值"
      },
      {
          "name": "step",
          "value": "step=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "1",
          "info": "步长，取值必须大于 0，并且可被(max - min)整除"
      },
      {
          "name": "disabled",
          "value": "disabled=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否禁用"
      },
      {
          "name": "value",
          "value": "value=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "0",
          "info": "当前取值"
      },
      {
          "name": "color",
          "value": "color=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "#e9e9e9",
          "info": "背景条的颜色（请使用 backgroundColor）"
      },
      {
          "name": "selected-color",
          "value": "selected-color=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "#1aad19",
          "info": "已选择的颜色（请使用 activeColor）"
      },
      {
          "name": "activeColor",
          "value": "activeColor=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "#1aad19",
          "info": "已选择的颜色"
      },
      {
          "name": "backgroundColor",
          "value": "backgroundColor=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "#e9e9e9",
          "info": "背景条的颜色"
      },
      {
          "name": "show-value",
          "value": "show-value=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否显示当前 value"
      },
      {
          "name": "bindchange",
          "value": "bindchange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "完成一次拖动后触发的事件，event.detail = {value: value}"
      }
  ],
  "switch": [
      {
          "name": "checked",
          "value": "checked=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否选中"
      },
      {
          "name": "type",
          "value": "type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "switch",
          "info": "样式，有效值：switch, checkbox"
      },
      {
          "name": "bindchange",
          "value": "bindchange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "checked 改变时触发 change 事件，event.detail={ value:checked}"
      },
      {
          "name": "color",
          "value": "color=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "switch 的颜色，同 css 的 color"
      }
  ],
  "textarea": [
      {
          "name": "value",
          "value": "value=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "输入框的内容"
      },
      {
          "name": "placeholder",
          "value": "placeholder=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "输入框为空时占位符"
      },
      {
          "name": "placeholder-style",
          "value": "placeholder-style=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "指定 placeholder 的样式"
      },
      {
          "name": "placeholder-class",
          "value": "placeholder-class=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "textarea-placeholder",
          "info": "指定 placeholder 的样式类"
      },
      {
          "name": "disabled",
          "value": "disabled=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否禁用"
      },
      {
          "name": "maxlength",
          "value": "maxlength=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "140",
          "info": "最大输入长度，设置为 -1 的时候不限制最大长度"
      },
      {
          "name": "auto-focus",
          "value": "auto-focus=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "自动聚焦，拉起键盘。"
      },
      {
          "name": "focus",
          "value": "focus=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "获取焦点"
      },
      {
          "name": "auto-height",
          "value": "auto-height=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否自动增高，设置auto-height时，style.height不生效"
      },
      {
          "name": "fixed",
          "value": "fixed=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true"
      },
      {
          "name": "cursor-spacing",
          "value": "cursor-spacing=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "0",
          "info": "指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
      },
      {
          "name": "cursor",
          "value": "cursor=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "指定focus时的光标位置"
      },
      {
          "name": "bindfocus",
          "value": "bindfocus=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "输入框聚焦时触发，event.detail = {value: value}"
      },
      {
          "name": "bindblur",
          "value": "bindblur=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "输入框失去焦点时触发，event.detail = {value: value}"
      },
      {
          "name": "bindlinechange",
          "value": "bindlinechange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}"
      },
      {
          "name": "bindinput",
          "value": "bindinput=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当键盘输入时，触发 input 事件，event.detail = {value, cursor}， bindinput 处理函数的返回值并不会反映到 textarea 上"
      },
      {
          "name": "bindconfirm",
          "value": "bindconfirm=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "点击完成时， 触发 confirm 事件，event.detail = {value: value}"
      }
  ],
  "navigator": [
      {
          "name": "url",
          "value": "url=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "应用内的跳转链接"
      },
      {
          "name": "open-type",
          "value": "open-type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "navigate",
          "info": "跳转方式"
      },
      {
          "name": "delta",
          "value": "delta=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当 open-type 为 'navigateBack' 时有效，表示回退的层数"
      },
      {
          "name": "hover-class",
          "value": "hover-class=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "navigator-hover",
          "info": "指定点击时的样式类，当hover-class=\"none\"时，没有点击态效果"
      },
      {
          "name": "hover-stop-propagation",
          "value": "hover-stop-propagation=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "指定是否阻止本节点的祖先节点出现点击态"
      },
      {
          "name": "hover-start-time",
          "value": "hover-start-time=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "50",
          "info": "按住后多久出现点击态，单位毫秒"
      },
      {
          "name": "hover-stay-time",
          "value": "hover-stay-time=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "600",
          "info": "手指松开后点击态保留时间，单位毫秒"
      }
  ],
  "audio": [
      {
          "name": "id",
          "value": "id=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "audio 组件的唯一标识符"
      },
      {
          "name": "src",
          "value": "src=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "要播放音频的资源地址"
      },
      {
          "name": "loop",
          "value": "loop=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否循环播放"
      },
      {
          "name": "controls",
          "value": "controls=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否显示默认控件"
      },
      {
          "name": "poster",
          "value": "poster=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效"
      },
      {
          "name": "name",
          "value": "name=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "未知音频",
          "info": "默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效"
      },
      {
          "name": "author",
          "value": "author=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "未知作者",
          "info": "默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效"
      },
      {
          "name": "binderror",
          "value": "binderror=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}"
      },
      {
          "name": "bindplay",
          "value": "bindplay=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当开始/继续播放时触发play事件"
      },
      {
          "name": "bindpause",
          "value": "bindpause=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当暂停播放时触发 pause 事件"
      },
      {
          "name": "bindtimeupdate",
          "value": "bindtimeupdate=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}"
      },
      {
          "name": "bindended",
          "value": "bindended=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当播放到末尾时触发 ended 事件"
      }
  ],
  "image": [
      {
          "name": "src",
          "value": "src=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "图片资源地址"
      },
      {
          "name": "mode",
          "value": "mode=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "'scaleToFill'",
          "info": "图片裁剪、缩放的模式"
      },
      {
          "name": "lazy-load",
          "value": "lazy-load=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "图片懒加载。只针对page与scroll-view下的image有效"
      },
      {
          "name": "binderror",
          "value": "binderror=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}"
      },
      {
          "name": "bindload",
          "value": "bindload=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}"
      }
  ],
  "video": [
      {
          "name": "src",
          "value": "src=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "要播放视频的资源地址"
      },
      {
          "name": "duration",
          "value": "duration=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "指定视频时长"
      },
      {
          "name": "controls",
          "value": "controls=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "true",
          "info": "是否显示默认播放控件（播放/暂停按钮、播放进度、时间）"
      },
      {
          "name": "danmu-list",
          "value": "danmu-list=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "弹幕列表"
      },
      {
          "name": "danmu-btn",
          "value": "danmu-btn=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否显示弹幕按钮，只在初始化时有效，不能动态变更"
      },
      {
          "name": "enable-danmu",
          "value": "enable-danmu=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否展示弹幕，只在初始化时有效，不能动态变更"
      },
      {
          "name": "autoplay",
          "value": "autoplay=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否自动播放"
      },
      {
          "name": "loop",
          "value": "loop=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否循环播放"
      },
      {
          "name": "muted",
          "value": "muted=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "是否静音播放"
      },
      {
          "name": "bindplay",
          "value": "bindplay=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当开始/继续播放时触发play事件"
      },
      {
          "name": "bindpause",
          "value": "bindpause=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当暂停播放时触发 pause 事件"
      },
      {
          "name": "bindended",
          "value": "bindended=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当播放到末尾时触发 ended 事件"
      },
      {
          "name": "bindtimeupdate",
          "value": "bindtimeupdate=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "播放进度变化时触发，event.detail = {currentTime: '当前播放时间'} 。触发频率应该在 250ms 一次"
      },
      {
          "name": "bindfullscreenchange",
          "value": "bindfullscreenchange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当视频进入和退出全屏是触发，event.detail = {fullScreen: '当前全屏状态'}"
      },
      {
          "name": "objectFit",
          "value": "objectFit=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "contain",
          "info": "当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖"
      },
      {
          "name": "poster",
          "value": "poster=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效"
      }
  ],
  "map": [
      {
          "name": "longitude",
          "value": "longitude=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "中心经度"
      },
      {
          "name": "latitude",
          "value": "latitude=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "中心纬度"
      },
      {
          "name": "scale",
          "value": "scale=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "16",
          "info": "缩放级别，取值范围为5-18"
      },
      {
          "name": "markers",
          "value": "markers=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "标记点"
      },
      {
          "name": "covers",
          "value": "covers=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "即将移除，请使用 markers"
      },
      {
          "name": "polyline",
          "value": "polyline=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "路线"
      },
      {
          "name": "circles",
          "value": "circles=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "圆"
      },
      {
          "name": "controls",
          "value": "controls=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "控件"
      },
      {
          "name": "include-points",
          "value": "include-points=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "缩放视野以包含所有给定的坐标点"
      },
      {
          "name": "show-location",
          "value": "show-location=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "显示带有方向的当前定位点"
      },
      {
          "name": "bindmarkertap",
          "value": "bindmarkertap=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "点击标记点时触发"
      },
      {
          "name": "bindcallouttap",
          "value": "bindcallouttap=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "点击标记点对应的气泡时触发"
      },
      {
          "name": "bindcontroltap",
          "value": "bindcontroltap=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "点击控件时触发"
      },
      {
          "name": "bindregionchange",
          "value": "bindregionchange=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "视野发生变化时触发"
      },
      {
          "name": "bindtap",
          "value": "bindtap=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "点击地图时触发"
      }
  ],
  "canvas": [
      {
          "name": "canvas-id",
          "value": "canvas-id=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "canvas 组件的唯一标识符"
      },
      {
          "name": "disable-scroll",
          "value": "disable-scroll=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "false",
          "info": "当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新"
      },
      {
          "name": "bindtouchstart",
          "value": "bindtouchstart=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "手指触摸动作开始"
      },
      {
          "name": "bindtouchmove",
          "value": "bindtouchmove=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "手指触摸后移动"
      },
      {
          "name": "bindtouchend",
          "value": "bindtouchend=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "手指触摸动作结束"
      },
      {
          "name": "bindtouchcancel",
          "value": "bindtouchcancel=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "手指触摸动作被打断，如来电提醒，弹窗"
      },
      {
          "name": "bindlongtap",
          "value": "bindlongtap=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动"
      },
      {
          "name": "binderror",
          "value": "binderror=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}"
      }
  ],
  "open-data": [
      {
          "name": "type",
          "value": "type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "开放数据类型"
      },
      {
          "name": "open-gid",
          "value": "open-gid=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "当 type=\"groupName\" 时生效, 群id"
      }
  ],
  "contact-button": [
      {
          "name": "size",
          "value": "size=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "18",
          "info": "会话按钮大小，有效值 18-27，单位：px"
      },
      {
          "name": "type",
          "value": "type=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "default-dark",
          "info": "会话按钮的样式类型"
      },
      {
          "name": "session-from",
          "value": "session-from=\"\"",
          "moveAction": [
              0,
              -1
          ],
          "defaultValue": "",
          "info": "用户从该按钮进入会话时，开发者将收到带上本参数的事件推送。本参数可用于区分用户进入客服会话的来源。"
      }
  ]
}

var desc = {
  "view": "<h3>view</h3><p>视图容器。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>hover-class</td>\n<td>String</td>\n<td>none</td>\n<td>指定按下去的样式类。当 <code>hover-class=\"none\"</code> 时，没有点击态效果</td>\n<td></td>\n</tr>\n<tr>\n<td>hover-stop-propagation</td>\n<td>Boolean</td>\n<td>false</td>\n<td>指定是否阻止本节点的祖先节点出现点击态</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>hover-start-time</td>\n<td>Number</td>\n<td>50</td>\n<td>按住后多久出现点击态，单位毫秒</td>\n<td></td>\n</tr>\n<tr>\n<td>hover-stay-time</td>\n<td>Number</td>\n<td>400</td>\n<td>手指松开后点击态保留时间，单位毫秒</td>\n</tr>\n</tbody>\n</table>",
  "scroll-view": "<h3>scroll-view</h3><p>可滚动视图区域。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>scroll-x</td>\n<td>Boolean</td>\n<td>false</td>\n<td>允许横向滚动</td>\n</tr>\n<tr>\n<td>scroll-y</td>\n<td>Boolean</td>\n<td>false</td>\n<td>允许纵向滚动</td>\n</tr>\n<tr>\n<td>upper-threshold</td>\n<td>Number</td>\n<td>50</td>\n<td>距顶部/左边多远时（单位px），触发 scrolltoupper 事件</td>\n</tr>\n<tr>\n<td>lower-threshold</td>\n<td>Number</td>\n<td>50</td>\n<td>距底部/右边多远时（单位px），触发 scrolltolower 事件</td>\n</tr>\n<tr>\n<td>scroll-top</td>\n<td>Number</td>\n<td></td>\n<td>设置竖向滚动条位置</td>\n</tr>\n<tr>\n<td>scroll-left</td>\n<td>Number</td>\n<td></td>\n<td>设置横向滚动条位置</td>\n</tr>\n<tr>\n<td>scroll-into-view</td>\n<td>String</td>\n<td></td>\n<td>值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素</td>\n</tr>\n<tr>\n<td>scroll-with-animation</td>\n<td>Boolean</td>\n<td>false</td>\n<td>在设置滚动条位置时使用动画过渡</td>\n</tr>\n<tr>\n<td>enable-back-to-top</td>\n<td>Boolean</td>\n<td>false</td>\n<td>iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向</td>\n</tr>\n<tr>\n<td>bindscrolltoupper</td>\n<td>EventHandle</td>\n<td></td>\n<td>滚动到顶部/左边，会触发 scrolltoupper 事件</td>\n</tr>\n<tr>\n<td>bindscrolltolower</td>\n<td>EventHandle</td>\n<td></td>\n<td>滚动到底部/右边，会触发 scrolltolower 事件</td>\n</tr>\n<tr>\n<td>bindscroll</td>\n<td>EventHandle</td>\n<td></td>\n<td>滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}</td>\n</tr>\n</tbody>\n</table>",
  "swiper": "<h3>swiper</h3><p>滑块视图容器。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>indicator-dots</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否显示面板指示点</td>\n<td></td>\n</tr>\n<tr>\n<td>indicator-color</td>\n<td>Color</td>\n<td>rgba(0, 0, 0, .3)</td>\n<td>指示点颜色</td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>indicator-active-color</td>\n<td>Color</td>\n<td>#000000</td>\n<td>当前选中的指示点颜色</td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>autoplay</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否自动切换</td>\n<td></td>\n</tr>\n<tr>\n<td>current</td>\n<td>Number</td>\n<td>0</td>\n<td>当前所在页面的 index</td>\n<td></td>\n</tr>\n<tr>\n<td>interval</td>\n<td>Number</td>\n<td>5000</td>\n<td>自动切换时间间隔</td>\n<td></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Number</td>\n<td>500</td>\n<td>滑动动画时长</td>\n<td></td>\n</tr>\n<tr>\n<td>circular</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否采用衔接滑动</td>\n<td></td>\n</tr>\n<tr>\n<td>vertical</td>\n<td>Boolean</td>\n<td>false</td>\n<td>滑动方向是否为纵向</td>\n<td></td>\n</tr>\n<tr>\n<td>bindchange</td>\n<td>EventHandle</td>\n<td></td>\n<td>current 改变时会触发 change 事件，event.detail = {current: current, source: source}</td>\n</tr>\n</tbody>\n</table>",
  "swiper-item": "<h3>swiper-item</h3><p>仅可放置在<code><swiper/></code>组件中，宽高自动设置为100%。</p><p><strong>示例代码：</strong></p>",
  "movable-area": "<h3>movable-area</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p><code>movable-view</code> 的可移动区域</p><p><strong>注意：movable-area 必须设置width和height属性，不设置默认为10px</strong></p>",
  "movable-view": "<h3>movable-view</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>可移动的视图容器，在页面中可以拖拽滑动</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>direction</td>\n<td>String</td>\n<td>none</td>\n<td>movable-view的移动方向，属性值有all、vertical、horizontal、none</td>\n</tr>\n<tr>\n<td>inertia</td>\n<td>Boolean</td>\n<td>false</td>\n<td>movable-view是否带有惯性</td>\n</tr>\n<tr>\n<td>out-of-bounds</td>\n<td>Boolean</td>\n<td>false</td>\n<td>超过可移动区域后，movable-view是否还可以移动</td>\n</tr>\n<tr>\n<td>x</td>\n<td>Number</td>\n<td></td>\n<td>定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画</td>\n</tr>\n<tr>\n<td>y</td>\n<td>Number</td>\n<td></td>\n<td>定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画</td>\n</tr>\n<tr>\n<td>damping</td>\n<td>Number</td>\n<td>20</td>\n<td>阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快</td>\n</tr>\n<tr>\n<td>friction</td>\n<td>Number</td>\n<td>2</td>\n<td>摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值</td>\n</tr>\n</tbody>\n</table>",
  "cover-view": "<h3>cover-view</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>覆盖在原生组件之上的文本视图，可覆盖的原生组件包括<code>map</code>、<code>video</code>、<code>canvas</code>，支持嵌套。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>无</td>\n</tr>\n</tbody>\n</table>",
  "cover-image": "<h3>cover-image</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>覆盖在原生组件之上的图片视图，可覆盖的原生组件同<code>cover-view</code>，支持嵌套在cover-view里。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src</td>\n<td>String</td>\n<td></td>\n<td>图标路径，支持临时路径。暂不支持base64与网络地址。</td>\n</tr>\n</tbody>\n</table>",
  "icon": "<h3>icon</h3><p>图标。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>String</td>\n<td></td>\n<td>icon的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear</td>\n</tr>\n<tr>\n<td>size</td>\n<td>Number</td>\n<td>23</td>\n<td>icon的大小，单位px</td>\n</tr>\n<tr>\n<td>color</td>\n<td>Color</td>\n<td></td>\n<td>icon的颜色，同css的color</td>\n</tr>\n</tbody>\n</table>",
  "text": "<h3>text</h3><p>文本。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>selectable</td>\n<td>Boolean</td>\n<td>false</td>\n<td>文本是否可选</td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>space</td>\n<td>String</td>\n<td>false</td>\n<td>显示连续空格</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>decode</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否解码</td>\n<td>1.4.0</td>\n</tr>\n</tbody>\n</table>",
  "rich-text": "<h3>rich-text</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>富文本。</p><table>\n<thead>\n<tr>\n<th>属性</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>nodes</td>\n<td>Array / String</td>\n<td>[]</td>\n<td>节点列表 / HTML String</td>\n<td>1.4.0</td>\n</tr>\n</tbody>\n</table>",
  "progress": "<h3>progress</h3><p>进度条。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>percent</td>\n<td>Float</td>\n<td>无</td>\n<td>百分比0~100</td>\n</tr>\n<tr>\n<td>show-info</td>\n<td>Boolean</td>\n<td>false</td>\n<td>在进度条右侧显示百分比</td>\n</tr>\n<tr>\n<td>stroke-width</td>\n<td>Number</td>\n<td>6</td>\n<td>进度条线的宽度，单位px</td>\n</tr>\n<tr>\n<td>color</td>\n<td>Color</td>\n<td>#09BB07</td>\n<td>进度条颜色 （请使用 activeColor）</td>\n</tr>\n<tr>\n<td>activeColor</td>\n<td>Color</td>\n<td></td>\n<td>已选择的进度条的颜色</td>\n</tr>\n<tr>\n<td>backgroundColor</td>\n<td>Color</td>\n<td></td>\n<td>未选择的进度条的颜色</td>\n</tr>\n<tr>\n<td>active</td>\n<td>Boolean</td>\n<td>false</td>\n<td>进度条从左往右的动画</td>\n</tr>\n</tbody>\n</table>",
  "button": "<h3>button</h3><p>按钮。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>生效时机</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>size</td>\n<td>String</td>\n<td>default</td>\n<td>按钮的大小</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>String</td>\n<td>default</td>\n<td>按钮的样式类型</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>plain</td>\n<td>Boolean</td>\n<td>false</td>\n<td>按钮是否镂空，背景色透明</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否禁用</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Boolean</td>\n<td>false</td>\n<td>名称前是否带 loading 图标</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>form-type</td>\n<td>String</td>\n<td></td>\n<td>用于 <code><form/></code> 组件，点击分别会触发 <code><form/></code> 组件的 submit/reset 事件</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>open-type</td>\n<td>String</td>\n<td></td>\n<td>微信开放能力</td>\n<td></td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>hover-class</td>\n<td>String</td>\n<td>button-hover</td>\n<td>指定按钮按下去的样式类。当 <code>hover-class=\"none\"</code> 时，没有点击态效果</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>hover-stop-propagation</td>\n<td>Boolean</td>\n<td>false</td>\n<td>指定是否阻止本节点的祖先节点出现点击态</td>\n<td></td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>hover-start-time</td>\n<td>Number</td>\n<td>20</td>\n<td>按住后多久出现点击态，单位毫秒</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>hover-stay-time</td>\n<td>Number</td>\n<td>70</td>\n<td>手指松开后点击态保留时间，单位毫秒</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>bindgetuserinfo</td>\n<td>Handler</td>\n<td></td>\n<td>用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同wx.getUserInfo</td>\n<td>open-type=\"getUserInfo'</td>\n<td>1.3.0</td>\n</tr>\n<tr>\n<td>session-from</td>\n<td>String</td>\n<td></td>\n<td>会话来源</td>\n<td>open-type=\"contact\"</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>send-message-title</td>\n<td>String</td>\n<td>当前标题</td>\n<td>会话内消息卡片标题</td>\n<td>open-type=\"contact\"</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>send-message-path</td>\n<td>String</td>\n<td>当前分享路径</td>\n<td>会话内消息卡片点击跳转小程序路径</td>\n<td>open-type=\"contact\"</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>send-message-img</td>\n<td>String</td>\n<td>截图</td>\n<td>会话内消息卡片图片</td>\n<td>open-type=\"contact\"</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>show-message-card</td>\n<td>Boolean</td>\n<td>false</td>\n<td>显示会话内消息卡片</td>\n<td>open-type=\"contact\"</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>bindcontact</td>\n<td>Handler</td>\n<td></td>\n<td>客服消息回调</td>\n<td>open-type=\"contact\"</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>bindgetphonenumber</td>\n<td>Handler</td>\n<td></td>\n<td>获取用户手机号回调</td>\n<td>open-type=\"getphonenumber\"</td>\n<td>1.2.0</td>\n</tr>\n</tbody>\n</table>",
  "checkbox-group": "<h3>checkbox-group</h3><p>多项选择器，内部由多个<code>checkbox</code>组成。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bindchange</td>\n<td>EventHandle</td>\n<td></td>\n<td><code><checkbox-group/></code>中选中项发生改变是触发 change 事件，detail = {value:[选中的checkbox的value的数组]}</td>\n</tr>\n</tbody>\n</table>",
  "checkbox": "<h3>checkbox</h3><p>多选项目。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>String</td>\n<td></td>\n<td><code><checkbox/></code>标识，选中时触发<code><checkbox-group/></code>的 change 事件，并携带 <code><checkbox/></code> 的 value</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否禁用</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>Boolean</td>\n<td>false</td>\n<td>当前是否选中，可用来设置默认选中</td>\n</tr>\n<tr>\n<td>color</td>\n<td>Color</td>\n<td></td>\n<td>checkbox的颜色，同css的color</td>\n</tr>\n</tbody>\n</table>",
  "form": "<h3>form</h3><p>表单，将组件内的用户输入的<code><switch/></code> <code><input/></code> <code><checkbox/></code> <code><slider/></code> <code><radio/></code> <code><picker/></code> 提交。</p><p>当点击 <code><form/></code> 表单中 formType 为 submit 的 <code><button/></code> 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>report-submit</td>\n<td>Boolean</td>\n<td>是否返回 formId 用于发送模板消息</td>\n<td></td>\n</tr>\n<tr>\n<td>bindsubmit</td>\n<td>EventHandle</td>\n<td>携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'} , formId: ''}</td>\n<td></td>\n</tr>\n<tr>\n<td>bindreset</td>\n<td>EventHandle</td>\n<td>表单重置时会触发 reset 事件</td>\n</tr>\n</tbody>\n</table>",
  "input": "<h3>input</h3><p>输入框。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>String</td>\n<td></td>\n<td>输入框的初始内容</td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>String</td>\n<td>\"text\"</td>\n<td>input 的类型</td>\n<td></td>\n</tr>\n<tr>\n<td>password</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否是密码类型</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>String</td>\n<td></td>\n<td>输入框为空时占位符</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder-style</td>\n<td>String</td>\n<td></td>\n<td>指定 placeholder 的样式</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder-class</td>\n<td>String</td>\n<td>\"input-placeholder\"</td>\n<td>指定 placeholder 的样式类</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否禁用</td>\n<td></td>\n</tr>\n<tr>\n<td>maxlength</td>\n<td>Number</td>\n<td>140</td>\n<td>最大输入长度，设置为 -1 的时候不限制最大长度</td>\n<td></td>\n</tr>\n<tr>\n<td>cursor-spacing</td>\n<td>Number</td>\n<td>0</td>\n<td>指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离</td>\n<td></td>\n</tr>\n<tr>\n<td>auto-focus</td>\n<td>Boolean</td>\n<td>false</td>\n<td>(即将废弃，请直接使用 focus )自动聚焦，拉起键盘</td>\n<td></td>\n</tr>\n<tr>\n<td>focus</td>\n<td>Boolean</td>\n<td>false</td>\n<td>获取焦点</td>\n<td></td>\n</tr>\n<tr>\n<td>confirm-type</td>\n<td>String</td>\n<td>\"done\"</td>\n<td>设置键盘右下角按钮的文字</td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>confirm-hold</td>\n<td>Boolean</td>\n<td>false</td>\n<td>点击键盘右下角按钮时是否保持键盘不收起</td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>cursor</td>\n<td>Number</td>\n<td></td>\n<td>指定focus时的光标位置</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>bindinput</td>\n<td>EventHandle</td>\n<td></td>\n<td>当键盘输入时，触发input事件，event.detail = {value, cursor}，处理函数可以直接 return 一个字符串，将替换输入框的内容。</td>\n<td></td>\n</tr>\n<tr>\n<td>bindfocus</td>\n<td>EventHandle</td>\n<td></td>\n<td>输入框聚焦时触发，event.detail = {value: value}</td>\n<td></td>\n</tr>\n<tr>\n<td>bindblur</td>\n<td>EventHandle</td>\n<td></td>\n<td>输入框失去焦点时触发，event.detail = {value: value}</td>\n<td></td>\n</tr>\n<tr>\n<td>bindconfirm</td>\n<td>EventHandle</td>\n<td></td>\n<td>点击完成按钮时触发，event.detail = {value: value}</td>\n</tr>\n</tbody>\n</table>",
  "label": "<h3>label</h3><p>用来改进表单组件的可用性，使用<code>for</code>属性找到对应的<code>id</code>，或者将控件放在该标签下，当点击时，就会触发对应的控件。</p><p><code>for</code>优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。</p><p>目前可以绑定的控件有：<code><button/></code>, <code><checkbox/></code>, <code><radio/></code>, <code><switch/></code>。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>for</td>\n<td>String</td>\n<td>绑定控件的 id</td>\n</tr>\n</tbody>\n</table>",
  "picker": "<h3>picker</h3><p>从底部弹起的滚动选择器，现支持五种选择器，通过mode来区分，分别是普通选择器，多列选择器，时间选择器，日期选择器，省市区选择器，默认是普通选择器。</p><p><strong>普通选择器：mode = selector</strong></p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>range</td>\n<td>Array / Object Array</td>\n<td>[]</td>\n<td>mode为 selector 或 multiSelector 时，range 有效</td>\n</tr>\n<tr>\n<td>range-key</td>\n<td>String</td>\n<td></td>\n<td>当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容</td>\n</tr>\n<tr>\n<td>value</td>\n<td>Number</td>\n<td>0</td>\n<td>value 的值表示选择了 range 中的第几个（下标从 0 开始）</td>\n</tr>\n<tr>\n<td>bindchange</td>\n<td>EventHandle</td>\n<td></td>\n<td>value 改变时触发 change 事件，event.detail = {value: value}</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否禁用</td>\n</tr>\n</tbody>\n</table>",
  "picker-view": "<h3>picker-view</h3><p>嵌入页面的滚动选择器</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>NumberArray</td>\n<td>数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。</td>\n<td></td>\n</tr>\n<tr>\n<td>indicator-style</td>\n<td>String</td>\n<td>设置选择器中间选中框的样式</td>\n<td></td>\n</tr>\n<tr>\n<td>indicator-class</td>\n<td>String</td>\n<td>设置选择器中间选中框的类名</td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>mask-style</td>\n<td>String</td>\n<td>设置蒙层的样式</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>mask-class</td>\n<td>String</td>\n<td>设置蒙层的类名</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>bindchange</td>\n<td>EventHandle</td>\n<td>当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）</td>\n</tr>\n</tbody>\n</table>",
  "picker-view-column": "<h3>picker-view-column</h3><p>仅可放置于<code><picker-view /></code>中，其孩子节点的高度会自动设置成与picker-view的选中框的高度一致</p><p><strong>示例代码：</strong></p>",
  "radio-group": "<h3>radio-group</h3><p>单项选择器，内部由多个<code><radio/></code>组成。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>bindchange</td>\n<td>EventHandle</td>\n<td></td>\n<td><code><radio-group/></code> 中的选中项发生变化时触发 change 事件，event.detail = {value: 选中项radio的value}</td>\n</tr>\n</tbody>\n</table>",
  "radio": "<h3>radio</h3><p>单选项目</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>String</td>\n<td></td>\n<td><code><radio/></code> 标识。当该<code><radio/></code> 选中时，<code><radio-group/></code> 的 change 事件会携带<code><radio/></code>的value</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>Boolean</td>\n<td>false</td>\n<td>当前是否选中</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否禁用</td>\n</tr>\n<tr>\n<td>color</td>\n<td>Color</td>\n<td></td>\n<td>radio的颜色，同css的color</td>\n</tr>\n</tbody>\n</table>",
  "slider": "<h3>slider</h3><p>滑动选择器。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>min</td>\n<td>Number</td>\n<td>0</td>\n<td>最小值</td>\n</tr>\n<tr>\n<td>max</td>\n<td>Number</td>\n<td>100</td>\n<td>最大值</td>\n</tr>\n<tr>\n<td>step</td>\n<td>Number</td>\n<td>1</td>\n<td>步长，取值必须大于 0，并且可被(max - min)整除</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否禁用</td>\n</tr>\n<tr>\n<td>value</td>\n<td>Number</td>\n<td>0</td>\n<td>当前取值</td>\n</tr>\n<tr>\n<td>color</td>\n<td>Color</td>\n<td>#e9e9e9</td>\n<td>背景条的颜色（请使用 backgroundColor）</td>\n</tr>\n<tr>\n<td>selected-color</td>\n<td>Color</td>\n<td>#1aad19</td>\n<td>已选择的颜色（请使用 activeColor）</td>\n</tr>\n<tr>\n<td>activeColor</td>\n<td>Color</td>\n<td>#1aad19</td>\n<td>已选择的颜色</td>\n</tr>\n<tr>\n<td>backgroundColor</td>\n<td>Color</td>\n<td>#e9e9e9</td>\n<td>背景条的颜色</td>\n</tr>\n<tr>\n<td>show-value</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否显示当前 value</td>\n</tr>\n<tr>\n<td>bindchange</td>\n<td>EventHandle</td>\n<td></td>\n<td>完成一次拖动后触发的事件，event.detail = {value: value}</td>\n</tr>\n</tbody>\n</table>",
  "switch": "<h3>switch</h3><p>开关选择器。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>checked</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否选中</td>\n</tr>\n<tr>\n<td>type</td>\n<td>String</td>\n<td>switch</td>\n<td>样式，有效值：switch, checkbox</td>\n</tr>\n<tr>\n<td>bindchange</td>\n<td>EventHandle</td>\n<td></td>\n<td>checked 改变时触发 change 事件，event.detail={ value:checked}</td>\n</tr>\n<tr>\n<td>color</td>\n<td>Color</td>\n<td></td>\n<td>switch 的颜色，同 css 的 color</td>\n</tr>\n</tbody>\n</table>",
  "textarea": "<h3>textarea</h3><p>多行输入框。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>String</td>\n<td></td>\n<td>输入框的内容</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>String</td>\n<td></td>\n<td>输入框为空时占位符</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder-style</td>\n<td>String</td>\n<td></td>\n<td>指定 placeholder 的样式</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder-class</td>\n<td>String</td>\n<td>textarea-placeholder</td>\n<td>指定 placeholder 的样式类</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否禁用</td>\n<td></td>\n</tr>\n<tr>\n<td>maxlength</td>\n<td>Number</td>\n<td>140</td>\n<td>最大输入长度，设置为 -1 的时候不限制最大长度</td>\n<td></td>\n</tr>\n<tr>\n<td>auto-focus</td>\n<td>Boolean</td>\n<td>false</td>\n<td>自动聚焦，拉起键盘。</td>\n<td></td>\n</tr>\n<tr>\n<td>focus</td>\n<td>Boolean</td>\n<td>false</td>\n<td>获取焦点</td>\n<td></td>\n</tr>\n<tr>\n<td>auto-height</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否自动增高，设置auto-height时，style.height不生效</td>\n<td></td>\n</tr>\n<tr>\n<td>fixed</td>\n<td>Boolean</td>\n<td>false</td>\n<td>如果 textarea 是在一个 <code>position:fixed</code> 的区域，需要显示指定属性 fixed 为 true</td>\n<td></td>\n</tr>\n<tr>\n<td>cursor-spacing</td>\n<td>Number</td>\n<td>0</td>\n<td>指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离</td>\n<td></td>\n</tr>\n<tr>\n<td>cursor</td>\n<td>Number</td>\n<td></td>\n<td>指定focus时的光标位置</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>bindfocus</td>\n<td>EventHandle</td>\n<td></td>\n<td>输入框聚焦时触发，event.detail = {value: value}</td>\n<td></td>\n</tr>\n<tr>\n<td>bindblur</td>\n<td>EventHandle</td>\n<td></td>\n<td>输入框失去焦点时触发，event.detail = {value: value}</td>\n<td></td>\n</tr>\n<tr>\n<td>bindlinechange</td>\n<td>EventHandle</td>\n<td></td>\n<td>输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}</td>\n<td></td>\n</tr>\n<tr>\n<td>bindinput</td>\n<td>EventHandle</td>\n<td></td>\n<td>当键盘输入时，触发 input 事件，event.detail = {value, cursor}，<strong> bindinput 处理函数的返回值并不会反映到 textarea 上 </strong></td>\n<td></td>\n</tr>\n<tr>\n<td>bindconfirm</td>\n<td>EventHandle</td>\n<td></td>\n<td>点击完成时， 触发 confirm 事件，event.detail = {value: value}</td>\n</tr>\n</tbody>\n</table>",
  "navigator": "<h3>navigator</h3><p>页面链接。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td></td>\n<td>应用内的跳转链接</td>\n<td></td>\n</tr>\n<tr>\n<td>open-type</td>\n<td>String</td>\n<td>navigate</td>\n<td>跳转方式</td>\n<td></td>\n</tr>\n<tr>\n<td>delta</td>\n<td>Number</td>\n<td></td>\n<td>当 open-type 为 'navigateBack' 时有效，表示回退的层数</td>\n<td></td>\n</tr>\n<tr>\n<td>hover-class</td>\n<td>String</td>\n<td>navigator-hover</td>\n<td>指定点击时的样式类，当<code>hover-class=\"none\"</code>时，没有点击态效果</td>\n<td></td>\n</tr>\n<tr>\n<td>hover-stop-propagation</td>\n<td>Boolean</td>\n<td>false</td>\n<td>指定是否阻止本节点的祖先节点出现点击态</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>hover-start-time</td>\n<td>Number</td>\n<td>50</td>\n<td>按住后多久出现点击态，单位毫秒</td>\n<td></td>\n</tr>\n<tr>\n<td>hover-stay-time</td>\n<td>Number</td>\n<td>600</td>\n<td>手指松开后点击态保留时间，单位毫秒</td>\n</tr>\n</tbody>\n</table>",
  "audio": "<h3>audio</h3><p>音频。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>String</td>\n<td></td>\n<td>audio 组件的唯一标识符</td>\n</tr>\n<tr>\n<td>src</td>\n<td>String</td>\n<td></td>\n<td>要播放音频的资源地址</td>\n</tr>\n<tr>\n<td>loop</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否循环播放</td>\n</tr>\n<tr>\n<td>controls</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否显示默认控件</td>\n</tr>\n<tr>\n<td>poster</td>\n<td>String</td>\n<td></td>\n<td>默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效</td>\n</tr>\n<tr>\n<td>name</td>\n<td>String</td>\n<td>未知音频</td>\n<td>默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效</td>\n</tr>\n<tr>\n<td>author</td>\n<td>String</td>\n<td>未知作者</td>\n<td>默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效</td>\n</tr>\n<tr>\n<td>binderror</td>\n<td>EventHandle</td>\n<td></td>\n<td>当发生错误时触发 error 事件，detail = {errMsg: MediaError.code}</td>\n</tr>\n<tr>\n<td>bindplay</td>\n<td>EventHandle</td>\n<td></td>\n<td>当开始/继续播放时触发play事件</td>\n</tr>\n<tr>\n<td>bindpause</td>\n<td>EventHandle</td>\n<td></td>\n<td>当暂停播放时触发 pause 事件</td>\n</tr>\n<tr>\n<td>bindtimeupdate</td>\n<td>EventHandle</td>\n<td></td>\n<td>当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration}</td>\n</tr>\n<tr>\n<td>bindended</td>\n<td>EventHandle</td>\n<td></td>\n<td>当播放到末尾时触发 ended 事件</td>\n</tr>\n</tbody>\n</table>",
  "image": "<h3>image</h3><p>图片。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src</td>\n<td>String</td>\n<td></td>\n<td>图片资源地址</td>\n<td></td>\n</tr>\n<tr>\n<td>mode</td>\n<td>String</td>\n<td>'scaleToFill'</td>\n<td>图片裁剪、缩放的模式</td>\n<td></td>\n</tr>\n<tr>\n<td>lazy-load</td>\n<td>Boolean</td>\n<td>false</td>\n<td>图片懒加载。只针对page与scroll-view下的image有效</td>\n<td>1.5.0</td>\n</tr>\n<tr>\n<td>binderror</td>\n<td>HandleEvent</td>\n<td></td>\n<td>当错误发生时，发布到 AppService 的事件名，事件对象event.detail = {errMsg: 'something wrong'}</td>\n<td></td>\n</tr>\n<tr>\n<td>bindload</td>\n<td>HandleEvent</td>\n<td></td>\n<td>当图片载入完毕时，发布到 AppService 的事件名，事件对象event.detail = {height:'图片高度px', width:'图片宽度px'}</td>\n</tr>\n</tbody>\n</table>",
  "video": "<h3>video</h3><p>视频。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src</td>\n<td>String</td>\n<td></td>\n<td>要播放视频的资源地址</td>\n<td></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Number</td>\n<td></td>\n<td>指定视频时长</td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>controls</td>\n<td>Boolean</td>\n<td>true</td>\n<td>是否显示默认播放控件（播放/暂停按钮、播放进度、时间）</td>\n<td></td>\n</tr>\n<tr>\n<td>danmu-list</td>\n<td>Object Array</td>\n<td></td>\n<td>弹幕列表</td>\n<td></td>\n</tr>\n<tr>\n<td>danmu-btn</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否显示弹幕按钮，只在初始化时有效，不能动态变更</td>\n<td></td>\n</tr>\n<tr>\n<td>enable-danmu</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否展示弹幕，只在初始化时有效，不能动态变更</td>\n<td></td>\n</tr>\n<tr>\n<td>autoplay</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否自动播放</td>\n<td></td>\n</tr>\n<tr>\n<td>loop</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否循环播放</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>muted</td>\n<td>Boolean</td>\n<td>false</td>\n<td>是否静音播放</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>bindplay</td>\n<td>EventHandle</td>\n<td></td>\n<td>当开始/继续播放时触发play事件</td>\n<td></td>\n</tr>\n<tr>\n<td>bindpause</td>\n<td>EventHandle</td>\n<td></td>\n<td>当暂停播放时触发 pause 事件</td>\n<td></td>\n</tr>\n<tr>\n<td>bindended</td>\n<td>EventHandle</td>\n<td></td>\n<td>当播放到末尾时触发 ended 事件</td>\n<td></td>\n</tr>\n<tr>\n<td>bindtimeupdate</td>\n<td>EventHandle</td>\n<td></td>\n<td>播放进度变化时触发，event.detail = {currentTime: '当前播放时间'} 。触发频率应该在 250ms 一次</td>\n<td></td>\n</tr>\n<tr>\n<td>bindfullscreenchange</td>\n<td>EventHandle</td>\n<td></td>\n<td>当视频进入和退出全屏是触发，event.detail = {fullScreen: '当前全屏状态'}</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>objectFit</td>\n<td>String</td>\n<td>contain</td>\n<td>当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充，cover：覆盖</td>\n<td></td>\n</tr>\n<tr>\n<td>poster</td>\n<td>String</td>\n<td></td>\n<td>默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效</td>\n</tr>\n</tbody>\n</table>",
  "map": "<h3>map</h3><p>地图。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>longitude</td>\n<td>Number</td>\n<td></td>\n<td>中心经度</td>\n<td></td>\n</tr>\n<tr>\n<td>latitude</td>\n<td>Number</td>\n<td></td>\n<td>中心纬度</td>\n<td></td>\n</tr>\n<tr>\n<td>scale</td>\n<td>Number</td>\n<td>16</td>\n<td>缩放级别，取值范围为5-18</td>\n<td></td>\n</tr>\n<tr>\n<td>markers</td>\n<td>Array</td>\n<td></td>\n<td>标记点</td>\n<td></td>\n</tr>\n<tr>\n<td>covers</td>\n<td>Array</td>\n<td></td>\n<td><strong>即将移除，请使用 markers</strong></td>\n<td></td>\n</tr>\n<tr>\n<td>polyline</td>\n<td>Array</td>\n<td></td>\n<td>路线</td>\n<td></td>\n</tr>\n<tr>\n<td>circles</td>\n<td>Array</td>\n<td></td>\n<td>圆</td>\n<td></td>\n</tr>\n<tr>\n<td>controls</td>\n<td>Array</td>\n<td></td>\n<td>控件</td>\n<td></td>\n</tr>\n<tr>\n<td>include-points</td>\n<td>Array</td>\n<td></td>\n<td>缩放视野以包含所有给定的坐标点</td>\n<td></td>\n</tr>\n<tr>\n<td>show-location</td>\n<td>Boolean</td>\n<td></td>\n<td>显示带有方向的当前定位点</td>\n<td></td>\n</tr>\n<tr>\n<td>bindmarkertap</td>\n<td>EventHandle</td>\n<td></td>\n<td>点击标记点时触发</td>\n<td></td>\n</tr>\n<tr>\n<td>bindcallouttap</td>\n<td>EventHandle</td>\n<td></td>\n<td>点击标记点对应的气泡时触发</td>\n<td>1.2.0</td>\n</tr>\n<tr>\n<td>bindcontroltap</td>\n<td>EventHandle</td>\n<td></td>\n<td>点击控件时触发</td>\n<td></td>\n</tr>\n<tr>\n<td>bindregionchange</td>\n<td>EventHandle</td>\n<td></td>\n<td>视野发生变化时触发</td>\n<td></td>\n</tr>\n<tr>\n<td>bindtap</td>\n<td>EventHandle</td>\n<td></td>\n<td>点击地图时触发</td>\n</tr>\n</tbody>\n</table>",
  "canvas": "<h3>canvas</h3><p>画布。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>canvas-id</td>\n<td>String</td>\n<td></td>\n<td>canvas 组件的唯一标识符</td>\n</tr>\n<tr>\n<td>disable-scroll</td>\n<td>Boolean</td>\n<td>false</td>\n<td>当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新</td>\n</tr>\n<tr>\n<td>bindtouchstart</td>\n<td>EventHandle</td>\n<td></td>\n<td>手指触摸动作开始</td>\n</tr>\n<tr>\n<td>bindtouchmove</td>\n<td>EventHandle</td>\n<td></td>\n<td>手指触摸后移动</td>\n</tr>\n<tr>\n<td>bindtouchend</td>\n<td>EventHandle</td>\n<td></td>\n<td>手指触摸动作结束</td>\n</tr>\n<tr>\n<td>bindtouchcancel</td>\n<td>EventHandle</td>\n<td></td>\n<td>手指触摸动作被打断，如来电提醒，弹窗</td>\n</tr>\n<tr>\n<td>bindlongtap</td>\n<td>EventHandle</td>\n<td></td>\n<td>手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动</td>\n</tr>\n<tr>\n<td>binderror</td>\n<td>EventHandle</td>\n<td></td>\n<td>当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}</td>\n</tr>\n</tbody>\n</table>",
  "open-data": "<h3>open-data</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>用于展示微信开放的数据。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>String</td>\n<td></td>\n<td>开放数据类型</td>\n</tr>\n<tr>\n<td>open-gid</td>\n<td>String</td>\n<td></td>\n<td>当 type=\"groupName\" 时生效, 群id</td>\n</tr>\n</tbody>\n</table>",
  "contact-button": "<h3>contact-button</h3><p>客服会话按钮，用于在页面上显示一个客服会话按钮，用户点击该按钮后会进入客服会话。</p><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>size</td>\n<td>Number</td>\n<td>18</td>\n<td>会话按钮大小，有效值 18-27，单位：px</td>\n</tr>\n<tr>\n<td>type</td>\n<td>String</td>\n<td>default-dark</td>\n<td>会话按钮的样式类型</td>\n</tr>\n<tr>\n<td>session-from</td>\n<td>String</td>\n<td></td>\n<td>用户从该按钮进入会话时，开发者将收到带上本参数的事件推送。本参数可用于区分用户进入客服会话的来源。</td>\n</tr>\n</tbody>\n</table>"
}

module.exports = {
  context,
  desc
}