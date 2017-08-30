var context = {
  'wx': [{
      "name": "request",
      "value": "request({\n\turl: ''\n})",
      "moveAction": [-1, 6],
      "desc": "<h3 >wx.request(OBJECT)</h3><p>发送请求</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>开发者服务器接口地址</td>\n</tr>\n<tr>\n<td>data</td>\n<td>Object、String</td>\n<td>否</td>\n<td>请求的参数</td>\n</tr>\n<tr>\n<td>header</td>\n<td>Object</td>\n<td>否</td>\n<td>设置请求的 header , header 中不能设置 Referer</td>\n</tr>\n<tr>\n<td>method</td>\n<td>String</td>\n<td>否</td>\n<td>默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT</td>\n</tr>\n<tr>\n<td>dataType</td>\n<td>String</td>\n<td>否</td>\n<td>默认为 json。如果设置了 dataType 为 json，则会尝试对响应的数据做一次 JSON.parse</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "uploadFile",
      "value": "uploadFile({\n\turl: ''\n\tfilePath: ''\n\tname: ''\n})",
      "moveAction": [-3, 6],
      "desc": "<h3 >wx.uploadFile(OBJECT)</h3><p>将本地资源上传到开发者服务器。如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。客户端发起一个 HTTPS POST 请求，其中 <code>content-type</code> 为 <code>multipart/form-data</code> 。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>开发者服务器 url</td>\n</tr>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>要上传文件资源的路径</td>\n</tr>\n<tr>\n<td>name</td>\n<td>String</td>\n<td>是</td>\n<td>文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容</td>\n</tr>\n<tr>\n<td>header</td>\n<td>Object</td>\n<td>否</td>\n<td>HTTP 请求 Header , header 中不能设置 Referer</td>\n</tr>\n<tr>\n<td>formData</td>\n<td>Object</td>\n<td>否</td>\n<td>HTTP 请求中其他额外的 form data</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "downloadFile",
      "value": "downloadFile({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.downloadFile(OBJECT)</h3><p>下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>下载资源的 url</td>\n</tr>\n<tr>\n<td>header</td>\n<td>Object</td>\n<td>否</td>\n<td>HTTP 请求 Header</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "connectSocket",
      "value": "connectSocket({\n\turl: ''\n})",
      "moveAction": [-1, 6],
      "desc": "<h3 >wx.connectSocket(OBJECT)</h3><p>创建一个 WebSocket 连接；<strong>一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。</strong></p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名</td>\n<td></td>\n</tr>\n<tr>\n<td>data</td>\n<td>Object</td>\n<td>否</td>\n<td>请求的数据</td>\n<td></td>\n</tr>\n<tr>\n<td>header</td>\n<td>Object</td>\n<td>否</td>\n<td>HTTP Header , header 中不能设置 Referer</td>\n<td></td>\n</tr>\n<tr>\n<td>method</td>\n<td>String</td>\n<td>否</td>\n<td>默认是GET，有效值： OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT</td>\n<td></td>\n</tr>\n<tr>\n<td>protocols</td>\n<td>StringArray</td>\n<td>否</td>\n<td>子协议数组</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onSocketOpen",
      "value": "onSocketOpen()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onSocketOpen(CALLBACK)</h3><p>监听WebSocket连接打开事件。</p>"
    },
    {
      "name": "onSocketError",
      "value": "onSocketError()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onSocketError(CALLBACK)</h3><p>监听WebSocket错误。</p>"
    },
    {
      "name": "sendSocketMessage",
      "value": "sendSocketMessage({\n\tdata: []\n})",
      "moveAction": [-1, 7],
      "desc": "<h3 >wx.sendSocketMessage(OBJECT)</h3><p>通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>data</td>\n<td>String/ArrayBuffer</td>\n<td>是</td>\n<td>需要发送的内容</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onSocketMessage",
      "value": "onSocketMessage()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onSocketMessage(CALLBACK)</h3><p>监听WebSocket接受到服务器的消息事件。</p>"
    },
    {
      "name": "closeSocket",
      "value": "closeSocket({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.closeSocket(OBJECT)</h3><p>关闭WebSocket连接。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>code</td>\n<td>Number</td>\n<td>否</td>\n<td>一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>reason</td>\n<td>String</td>\n<td>否</td>\n<td>一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）</td>\n<td><a href=\"../framework/compatibility.html\" title=\"基础库 1.4.0 开始支持，低版本需做兼容处理。\">1.4.0</a></td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onSocketClose",
      "value": "onSocketClose()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onSocketClose(CALLBACK)</h3><p>监听WebSocket关闭。</p>"
    },
    {
      "name": "chooseImage",
      "value": "chooseImage({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1, 24],
      "desc": "<h3 >wx.chooseImage(OBJECT)</h3><p>从本地相册选择图片或使用相机拍照。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>count</td>\n<td>Number</td>\n<td>否</td>\n<td>最多可以选择的图片张数，默认9</td>\n</tr>\n<tr>\n<td>sizeType</td>\n<td>StringArray</td>\n<td>否</td>\n<td>original 原图，compressed 压缩图，默认二者都有</td>\n</tr>\n<tr>\n<td>sourceType</td>\n<td>StringArray</td>\n<td>否</td>\n<td>album 从相册选图，camera 使用相机，默认二者都有</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回图片的本地文件路径列表 tempFilePaths</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "previewImage",
      "value": "previewImage({\n\turls: []\n})",
      "moveAction": [-1, 7],
      "desc": "<h3 >wx.previewImage(OBJECT)</h3><p>预览图片。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>current</td>\n<td>String</td>\n<td>否</td>\n<td>当前显示图片的链接，不填则默认为 urls 的第一张</td>\n</tr>\n<tr>\n<td>urls</td>\n<td>StringArray</td>\n<td>是</td>\n<td>需要预览的图片链接列表</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getImageInfo",
      "value": "getImageInfo({\n\tsrc: ''\n})",
      "moveAction": [-1, 6],
      "desc": "<h3 >wx.getImageInfo(OBJECT)</h3><p>获取图片信息</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src</td>\n<td>String</td>\n<td>是</td>\n<td>图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "saveImageToPhotosAlbum",
      "value": "saveImageToPhotosAlbum({\n\tfilePath: ''\n})",
      "moveAction": [-1, 11],
      "desc": "<h3 >wx.saveImageToPhotosAlbum(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>保存图片到系统相册，需要用户授权（scope.writePhotosAlbum），详见 用户授权</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "startRecord",
      "value": "startRecord({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.startRecord(OBJECT)</h3><p>开始录音。当主动调用<code>wx.stopRecord</code>，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开小程序时，此接口无法调用。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'}</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "stopRecord",
      "value": "stopRecord()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.stopRecord()</h3><p>​    主动调用停止录音。</p>"
    },
    {
      "name": "playVoice",
      "value": "playVoice({\n\tfilePath: ''\n})",
      "moveAction": [-1, 11],
      "desc": "<h3 >wx.playVoice(OBJECT)</h3><p>开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>需要播放的语音文件的文件路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "pauseVoice",
      "value": "pauseVoice()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.pauseVoice()</h3><p>暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。</p>"
    },
    {
      "name": "stopVoice",
      "value": "stopVoice()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.stopVoice()</h3><p>结束播放语音。</p>"
    },
    {
      "name": "getBackgroundAudioPlayerState",
      "value": "getBackgroundAudioPlayerState({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.getBackgroundAudioPlayerState(OBJECT)</h3><p>获取后台音乐播放状态。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "playBackgroundAudio",
      "value": "playBackgroundAudio({\n\tdataUrl: ''\n})",
      "moveAction": [-1, 10],
      "desc": "<h3 >wx.playBackgroundAudio(OBJECT)</h3><p>使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户点击“显示在聊天顶部”时，音乐不会暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。</p><p><strong>OBJECT参数说明</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dataUrl</td>\n<td>String</td>\n<td>是</td>\n<td>音乐链接，目前支持的格式有 m4a, aac, mp3, wav</td>\n</tr>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>否</td>\n<td>音乐标题</td>\n</tr>\n<tr>\n<td>coverImgUrl</td>\n<td>String</td>\n<td>否</td>\n<td>封面URL</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "pauseBackgroundAudio",
      "value": "pauseBackgroundAudio()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.pauseBackgroundAudio()</h3><p>暂停播放音乐。</p>"
    },
    {
      "name": "seekBackgroundAudio",
      "value": "seekBackgroundAudio({\n\tposition: 0\n})",
      "moveAction": [-1, 11],
      "desc": "<h3 >wx.seekBackgroundAudio(OBJECT)</h3><p>控制音乐播放进度。</p><p><strong>OBJECT参数说明</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>position</td>\n<td>Number</td>\n<td>是</td>\n<td>音乐位置，单位：秒</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "stopBackgroundAudio",
      "value": "stopBackgroundAudio()",
      "desc": "<h3 >wx.stopBackgroundAudio()</h3><p>停止播放音乐。</p>"
    },
    {
      "name": "onBackgroundAudioPlay",
      "value": "onBackgroundAudioPlay()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onBackgroundAudioPlay(CALLBACK)</h3><p>监听音乐播放。</p>"
    },
    {
      "name": "onBackgroundAudioPause",
      "value": "onBackgroundAudioPause()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onBackgroundAudioPause(CALLBACK)</h3><p>监听音乐暂停。</p>"
    },
    {
      "name": "onBackgroundAudioStop",
      "value": "onBackgroundAudioStop()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onBackgroundAudioStop(CALLBACK)</h3><p>监听音乐停止。</p>"
    },
    {
      "name": "getBackgroundAudioManager",
      "value": "getBackgroundAudioManager()",
      "desc": "<h3 >wx.getBackgroundAudioManager()</h3><p>获取<strong>全局唯一</strong>的背景音频管理器 <code>backgroundAudioManager</code></p>"
    },
    {
      "name": "createAudioContext",
      "value": "createAudioContext()",
      "params": ['audioId'],
      "desc": "<h3 >wx.createAudioContext(audioid)</h3><p>创建并返回 audio 上下文 audioContext 对象</p>"
    },
    {
      "name": "chooseVideo",
      "value": "chooseVideo({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.chooseVideo(OBJECT)</h3><p>拍摄视频或从手机相册中选视频，返回视频的临时文件路径。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>sourceType</td>\n<td>StringArray</td>\n<td>否</td>\n<td>album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']</td>\n</tr>\n<tr>\n<td>maxDuration</td>\n<td>Number</td>\n<td>否</td>\n<td>拍摄视频最长拍摄时间，单位秒。最长支持 60 秒</td>\n</tr>\n<tr>\n<td>camera</td>\n<td>String</td>\n<td>否</td>\n<td>默认调起的为前置还是后置摄像头。front: 前置，back: 后置，默认 back</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功，返回视频文件的临时文件路径，详见返回参数说明</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "saveVideoToPhotosAlbum",
      "value": "saveVideoToPhotosAlbum({\n\tfilePath: ''\n})",
      "moveAction": [-1, 11],
      "desc": "<h3 >wx.saveVideoToPhotosAlbum(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>保存视频到系统相册，需要用户授权（scope.writePhotosAlbum），详见 用户授权</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>视频文件路径，可以是临时文件路径也可以是永久文件路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "createVideoContext",
      "value": "createVideoContext()",
      "params": ['audioId'],
      "desc": "<h3 >wx.createVideoContext(audioid)</h3><p>创建并返回 video 上下文 videoContext 对象</p>"
    },
    {
      "name": "saveFile",
      "value": "saveFile({\n\ttempFilePath: ''\n})",
      "moveAction": [-1, 15],
      "desc": "<h3 >wx.saveFile(OBJECT)</h3><p>保存文件到本地。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>tempFilePath</td>\n<td>String</td>\n<td>是</td>\n<td>需要保存的文件的临时路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getFileInfo",
      "value": "getFileInfo({\n\tfilePath: ''\n})",
      "moveAction": [-1, 11],
      "desc": "<h3 >wx.getFileInfo(OBJECT)</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取文件信息</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>本地文件路径</td>\n</tr>\n<tr>\n<td>digestAlgorithm</td>\n<td>String</td>\n<td>否</td>\n<td>计算文件摘要的算法，默认值 md5，有效值：md5，sha1</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getSavedFileList",
      "value": "getSavedFileList({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.getSavedFileList(OBJECT)</h3><p>获取本地已保存的文件列表</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数，返回结果见<code>success返回参数说明</code></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getSavedFileInfo",
      "value": "getSavedFileInfo({\n\tfilePath: ''\n})",
      "moveAction": [-1, 11],
      "desc": "<h3 >wx.getSavedFileInfo(OBJECT)</h3><p>获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>文件路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数，返回结果见<code>success返回参数说明</code></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "removeSavedFile",
      "value": "removeSavedFile({\n\tfilePath: ''\n})",
      "moveAction": [-1, 11],
      "desc": "<h3 >wx.removeSavedFile(OBJECT)</h3><p>删除本地存储的文件</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>需要删除的文件路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "openDocument",
      "value": "openDocument({\n\tfilePath: ''\n})",
      "moveAction": [-1, 11],
      "desc": "<h3 >wx.openDocument(OBJECT)</h3><p>新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>必填</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>文件路径，可通过 downFile 获得</td>\n<td></td>\n</tr>\n<tr>\n<td>fileType</td>\n<td>String</td>\n<td>否</td>\n<td>文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "setStorage",
      "value": "setStorage({\n\tkey: '',\n\tdata: ''\n})",
      "moveAction": [-2, 6],
      "desc": "<h3 >wx.setStorage(OBJECT)</h3><p>将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>key</td>\n<td>String</td>\n<td>是</td>\n<td>本地缓存中的指定的 key</td>\n</tr>\n<tr>\n<td>data</td>\n<td>Object/String</td>\n<td>是</td>\n<td>需要存储的内容</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "setStorageSync",
      "value": "setStorageSync()",
      "params": ["key", "data"],
      "desc": "<h3 >wx.setStorageSync(KEY,DATA)</h3><p>将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。</p>"
    },
    {
      "name": "getStorage",
      "value": "getStorage({\n\tkey: '',\n\tsuccess: function(res) {}\n})",
      "moveAction": [-2, 6],
      "desc": "<h3 >wx.getStorage(OBJECT)</h3><p>从本地缓存中异步获取指定 key 对应的内容。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>key</td>\n<td>String</td>\n<td>是</td>\n<td>本地缓存中的指定的 key</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>接口调用的回调函数,res = {data: key对应的内容}</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getStorageSync",
      "value": "getStorageSync()",
      "params": ["key"],
      "desc": "<h3 >wx.getStorageSync(KEY)</h3><p>从本地缓存中同步获取指定 key 对应的内容。</p>"
    },
    {
      "name": "getStorageInfo",
      "value": "getStorageInfo({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1, 24],
      "desc": "<h3 >wx.getStorageInfo(OBJECT)</h3><p>异步获取当前storage的相关信息</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>接口调用的回调函数，详见返回参数说明</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getStorageInfoSync",
      "value": "getStorageInfoSync()",
      "desc": "<h3 >wx.getStorageInfoSync</h3><p>同步获取当前storage的相关信息</p>"
    },
    {
      "name": "removeStorage",
      "value": "removeStorage({\n\tkey: '',\n\tsuccess: function(res) {}\n})",
      "moveAction": [-2, 6],
      "desc": "<h3 >wx.removeStorage(OBJECT)</h3><p>从本地缓存中异步移除指定 key 。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>key</td>\n<td>String</td>\n<td>是</td>\n<td>本地缓存中的指定的 key</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>接口调用的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "removeStorageSync",
      "value": "removeStorageSync()",
      "params": ["key"],
      "desc": "<h3 >wx.removeStorageSync(KEY)</h3><p>从本地缓存中同步移除指定 key 。</p>"
    },
    {
      "name": "clearStorage",
      "value": "clearStorage()",
      "desc": "<h3 >wx.clearStorage()</h3><p>清理本地数据缓存。</p>"
    },
    {
      "name": "clearStorageSync",
      "value": "clearStorageSync()",
      "desc": "<h3 >wx.clearStorageSync()</h3><p>同步清理本地数据缓存</p>"
    },
    {
      "name": "getLocation",
      "value": "getLocation({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1, 24],
      "desc": "<h3 >wx.getLocation(OBJECT)</h3><p>获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>String</td>\n<td>否</td>\n<td>默认为 wgs84 返回 gps 坐标，gcj02 返回可用于<code>wx.openLocation</code>的坐标</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>接口调用成功的回调函数，返回内容详见返回参数说明。</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "chooseLocation",
      "value": "chooseLocation({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1, 24],
      "desc": "<h3 >wx.chooseLocation(OBJECT)</h3><p>打开地图选择位置</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>接口调用成功的回调函数，返回内容详见返回参数说明。</td>\n</tr>\n<tr>\n<td>cancel</td>\n<td>Function</td>\n<td>否</td>\n<td>用户取消时调用</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "openLocation",
      "value": "openLocation({\n\tlatitude: ''\n\tlongitude: ''\n})",
      "moveAction": [-2, 11],
      "desc": "<h3 >wx.openLocation(OBJECT)</h3><p>    使用微信内置地图查看位置</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>latitude</td>\n<td>Float</td>\n<td>是</td>\n<td>纬度，范围为-90~90，负数表示南纬</td>\n</tr>\n<tr>\n<td>longitude</td>\n<td>Float</td>\n<td>是</td>\n<td>经度，范围为-180~180，负数表示西经</td>\n</tr>\n<tr>\n<td>scale</td>\n<td>INT</td>\n<td>否</td>\n<td>缩放比例，范围5~18，默认为18</td>\n</tr>\n<tr>\n<td>name</td>\n<td>String</td>\n<td>否</td>\n<td>位置名</td>\n</tr>\n<tr>\n<td>address</td>\n<td>String</td>\n<td>否</td>\n<td>地址的详细说明</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "createMapContext",
      "value": "createMapContext()",
      "params": ['mapId'],
      "desc": "<h3 >wx.createMapContext(mapId)</h3><p>创建并返回 map 上下文 mapContext 对象</p>"
    },
    {
      "name": "getSystemInfo",
      "value": "getSystemInfo({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1, 24],
      "desc": "<h3 >wx.getSystemInfo(OBJECT)</h3><p>获取系统信息。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>接口调用成功的回调</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getSystemInfoSync",
      "value": "getSystemInfoSync()",
      "desc": "<h3 >wx.getSystemInfoSync()</h3><p>获取系统信息同步接口</p>"
    },
    {
      "name": "canIUse",
      "value": "canIUse()",
      "params": ['string'],
      "desc": "<h3 >wx.canIUse(String)</h3><p>判断小程序的API，回调，参数，组件等是否在当前版本可用。</p><p><strong>String参数说明：</strong>使用<code>${API}.${method}.${param}.${options}</code>或者<code>${component}.${attribute}.${option}</code>方式来调用</p>"
    },
    {
      "name": "getNetworkType",
      "value": "getNetworkType({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1, 24],
      "desc": "<h3 >wx.getNetworkType(OBJECT)</h3><p>获取网络类型。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>接口调用成功，返回网络类型 networkType</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onNetworkStatusChange",
      "value": "onNetworkStatusChange()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onNetworkStatusChange(CALLBACK)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>监听网络状态变化。</p>"
    },
    {
      "name": "setScreenBrightness",
      "value": "setScreenBrightness({\n\tvalue: ''\n})",
      "moveAction": [-1, 8],
      "desc": "<h3 >wx.setScreenBrightness(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>设置屏幕亮度。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>Number</td>\n<td>是</td>\n<td>屏幕亮度值，范围 0~1，0 最暗，1 最亮</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getScreenBrightness",
      "value": "getScreenBrightness({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.getScreenBrightness(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取屏幕亮度。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "vibrateLong",
      "value": "vibrateLong({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.vibrateLong(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>使手机发生较长时间的振动（400ms）</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "vibrateShort",
      "value": "vibrateShort({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.vibrateShort(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>使手机发生较短时间的振动（15ms）</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onAccelerometerChange",
      "value": "onAccelerometerChange()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onAccelerometerChange(CALLBACK)</h3><p>监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 <code>wx.stopAccelerometer</code> 停止监听。</p>"
    },
    {
      "name": "startAccelerometer",
      "value": "startAccelerometer({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.startAccelerometer(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>开始监听加速度数据。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "stopAccelerometer",
      "value": "stopAccelerometer({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.stopAccelerometer(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>停止监听加速度数据。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onCompassChange",
      "value": "onCompassChange()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onCompassChange(CALLBACK)</h3><p>监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用<code>wx.stopCompass</code>停止监听。</p>"
    },
    {
      "name": "startCompass",
      "value": "startCompass({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.startCompass(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>开始监听罗盘数据。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "stopCompass",
      "value": "stopCompass({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.stopCompass(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>停止监听罗盘数据。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "makePhoneCall",
      "value": "makePhoneCall({\n\tphoneNumber: ''\n})",
      "moveAction": [-1, 14],
      "desc": "<h3 >wx.makePhoneCall(OBJECT)</h3><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>phoneNumber</td>\n<td>String</td>\n<td>是</td>\n<td>需要拨打的电话号码</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "scanCode",
      "value": "scanCode({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.scanCode(OBJECT)</h3><p>调起客户端扫码界面，扫码成功后返回对应的结果</p><p><strong>Object 参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onlyFromCamera</td>\n<td>Boolean</td>\n<td>否</td>\n<td>是否只能从相机扫码，不允许从相册选择图片</td>\n<td>1.2.0</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数，返回内容详见返回参数说明。</td>\n<td></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "setClipboardData",
      "value": "setClipboardData({\n\tdata: ''\n})",
      "moveAction": [-1, 7],
      "desc": "<h3 >wx.setClipboardData(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>设置系统剪贴板的内容</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>data</td>\n<td>String</td>\n<td>是</td>\n<td>需要设置的内容</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getClipboardData",
      "value": "getClipboardData({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.getClipboardData(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取系统剪贴板内容</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "openBluetoothAdapter",
      "value": "openBluetoothAdapter({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1,
        24
      ],
      "desc": "<h3 >wx.openBluetoothAdapter(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>初始化蓝牙适配器</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回成功初始化信息</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "closeBluetoothAdapter",
      "value": "closeBluetoothAdapter({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1,
        24
      ],
      "desc": "<h3 >wx.closeBluetoothAdapter(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>关闭蓝牙模块。调用该方法将断开所有已建立的链接并释放系统资源</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回成功关闭模块信息</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getBluetoothAdapterState",
      "value": "getBluetoothAdapterState({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1,
        24
      ],
      "desc": "<h3 >wx.getBluetoothAdapterState(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取本机蓝牙适配器状态</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onBluetoothAdapterStateChange",
      "value": "onBluetoothAdapterStateChange()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onBluetoothAdapterStateChange(CALLBACK)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>监听蓝牙适配器状态变化事件</p>"
    },
    {
      "name": "startBluetoothDevicesDiscovery",
      "value": "startBluetoothDevicesDiscovery({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1,
        24
      ],
      "desc": "<h3 >wx.startBluetoothDevicesDiscovery(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>开始搜寻附近的蓝牙外围设备。注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>services</td>\n<td>Array</td>\n<td>否</td>\n<td>蓝牙设备主 service 的 uuid 列表</td>\n</tr>\n<tr>\n<td>allowDuplicatesKey</td>\n<td>boolean</td>\n<td>否</td>\n<td>是否允许重复上报同一设备， 如果允许重复上报，则onDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同</td>\n</tr>\n<tr>\n<td>interval</td>\n<td>integer</td>\n<td>否</td>\n<td>上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "stopBluetoothDevicesDiscovery",
      "value": "stopBluetoothDevicesDiscovery({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1,
        24
      ],
      "desc": "<h3 >wx.stopBluetoothDevicesDiscovery(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getBluetoothDevices",
      "value": "getBluetoothDevices({\n\tsuccess: function(res) {}\n})",
      "moveAction": [-1,
        24
      ],
      "desc": "<h3 >wx.getBluetoothDevices(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onBluetoothDeviceFound",
      "value": "onBluetoothDeviceFound()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onBluetoothDeviceFound(CALLBACK)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>监听寻找到新设备的事件</p>"
    },
    {
      "name": "getConnectedBluetoothDevices",
      "value": "getConnectedBluetoothDevices({\n\tservices: [],\n\tsuccess: function(res) {}\n})",
      "moveAction": [-2,
        11
      ],
      "desc": "<h3 >wx.getConnectedBluetoothDevices(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>根据 uuid 获取处于已连接状态的设备</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>services</td>\n<td>Array</td>\n<td>是</td>\n<td>蓝牙设备主 service 的 uuid 列表</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "createBLEConnection",
      "value": "createBLEConnection({\n\tdeviceId: '',\n\tsuccess: function(res) {}\n})",
      "moveAction": [-2,
        11
      ],
      "desc": "<h3 >wx.createBLEConnection(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>连接低功耗蓝牙设备</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>deviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙设备 id，参考 getDevices 接口</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "closeBLEConnection",
      "value": "closeBLEConnection({\n\tdeviceId: '',\n\tsuccess: function(res) {}\n})",
      "moveAction": [-2,
        11
      ],
      "desc": "<h3 >wx.closeBLEConnection(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>断开与低功耗蓝牙设备的连接</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>deviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙设备 id，参考 getDevices 接口</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getBLEDeviceServices",
      "value": "getBLEDeviceServices({\n\tdeviceId: '',\n\tsuccess: function(res) {}\n})",
      "moveAction": [-2,
        11
      ],
      "desc": "<h3 >wx.getBLEDeviceServices(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取蓝牙设备所有 service（服务）</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>deviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙设备 id，参考 getDevices 接口</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getBLEDeviceCharacteristics",
      "value": "getBLEDeviceCharacteristics({\n\tdeviceId: '',\n\tserviceId: '',\n\tsuccess: function(res) {}\n})",
      "moveAction": [-3,
        11
      ],
      "desc": "<h3 >wx.getBLEDeviceCharacteristics(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p> 获取蓝牙设备所有 characteristic（特征值）</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>deviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙设备 id，参考 device 对象</td>\n</tr>\n<tr>\n<td>serviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙服务 uuid</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "readBLECharacteristicValue",
      "value": "readBLECharacteristicValue({\n\tdeviceId: '',\n\tserviceId: '',\n\tcharacteristicId: '',\n\tsuccess: function(res) {}\n})",
      "moveAction": [-4,
        11
      ],
      "desc": "<h3 >wx.readBLECharacteristicValue(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持<code>read</code>才可以成功调用，具体参照 characteristic 的 properties 属性</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>deviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙设备 id，参考 device 对象</td>\n</tr>\n<tr>\n<td>serviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙特征值对应服务的 uuid</td>\n</tr>\n<tr>\n<td>characteristicId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙特征值的 uuid</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "writeBLECharacteristicValue",
      "value": "writeBLECharacteristicValue({\n\tdeviceId: '',\n\tserviceId: '',\n\tcharacteristicId: '',\n\tvalue: [],\n\tsuccess: function(res) {}\n})",
      "moveAction": [-5,
        11
      ],
      "desc": "<h3 >wx.writeBLECharacteristicValue(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持<code>write</code>才可以成功调用，具体参照 characteristic 的 properties 属性</p><p><em>tips: 并行调用多次读写接口存在读写失败的可能性</em></p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>deviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙设备 id，参考 device 对象</td>\n</tr>\n<tr>\n<td>serviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙特征值对应服务的 uuid</td>\n</tr>\n<tr>\n<td>characteristicId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙特征值的 uuid</td>\n</tr>\n<tr>\n<td>value</td>\n<td>ArrayBuffer</td>\n<td>是</td>\n<td>蓝牙设备特征值对应的二进制值<strong>（注意：vConsole 无法打印出 ArrayBuffer 类型数据）</strong></td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "notifyBLECharacteristicValueChange",
      "value": "notifyBLECharacteristicValueChange({\n\tdeviceId: '',\n\tserviceId: '',\n\tcharacteristicId: '',\n\tstate: true,\n\tsuccess: function(res) {}\n})",
      "moveAction": [-5,
        11
      ],
      "desc": "<h3 >wx.notifyBLECharacteristicValueChange(OBJECT)</h3><blockquote>\n<p>基础库 1.1.1 开始支持，低版本需做兼容处理</p>\n</blockquote><p>启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：必须设备的特征值支持<code>notify</code>才可以成功调用，具体参照 characteristic 的 properties 属性</p><p>另外，必须先启用<code>notify</code>才能监听到设备 characteristicValueChange 事件</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>deviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙设备 id，参考 device 对象</td>\n</tr>\n<tr>\n<td>serviceId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙特征值对应服务的 uuid</td>\n</tr>\n<tr>\n<td>characteristicId</td>\n<td>string</td>\n<td>是</td>\n<td>蓝牙特征值的 uuid</td>\n</tr>\n<tr>\n<td>state</td>\n<td>boolean</td>\n<td>是</td>\n<td>true: 启用 notify; false: 停用 notify</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回本机蓝牙适配器状态</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onBLEConnectionStateChange",
      "value": "onBLEConnectionStateChange()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onBLEConnectionStateChange(CALLBACK)</h3><blockquote>\n<p>基础库 1.1.1 开始支持，低版本需做兼容处理</p>\n</blockquote><p>监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。</p>"
    },
    {
      "name": "onBLECharacteristicValueChange",
      "value": "onBLECharacteristicValueChange()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onBLECharacteristicValueChange(CALLBACK)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>监听低功耗蓝牙设备的特征值变化。必须先启用<code>notify</code>接口才能接收到设备推送的notification。</p>"
    },
    {
      "name": "startBeaconDiscovery",
      "value": "startBeaconDiscovery({\n\tuuids: []\n})",
      "moveAction": [-1,
        8
      ],
      "desc": "<h3 >wx.startBeaconDiscovery(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>开始搜索附近的<code>iBeacon</code>设备</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>uuids</td>\n<td>StringArray</td>\n<td>是</td>\n<td>iBeacon设备广播的 uuids</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "stopBeaconDiscovery",
      "value": "stopBeaconDiscovery({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.stopBeaconDiscovery(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>停止搜索附近的<code>iBeacon</code>设备</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "getBeacons",
      "value": "getBeacons({\n\t\n})",
      "moveAction": [-1],
      "desc": "<h3 >wx.getBeacons(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取所有已搜索到的<code>iBeacon</code>设备</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onBeaconUpdate",
      "value": "onBeaconUpdate()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onBeaconUpdate(CALLBACK)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>监听 <code>iBeacon</code> 设备的更新事件</p>"
    },
    {
      "name": "onBeaconServiceChange",
      "value": "onBeaconServiceChange()",
      "moveAction": [
        0, -1
      ],
      "desc": "<h3 >wx.onBeaconServiceChange(CALLBACK)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>监听 <code>iBeacon</code> 服务的状态变化</p>"
    },
    {
      "name": "setKeepScreenOn",
      "value": "setKeepScreenOn({\n\tkeepScreenOn: true\n})",
      "moveAction": [-1,
        0
      ],
      "desc": "<h3 >wx.setKeepScreenOn(OBJECT)</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>keepScreenOn</td>\n<td>Boolean</td>\n<td>是</td>\n<td>是否保持屏幕常亮</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "onUserCaptureScreen",
      "value": "onUserCaptureScreen()",
      "moveAction": [
          0,
          -1
      ],
      "desc": "<h3 >wx.onUserCaptureScreen(CALLBACK)</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件</p>"
    },
    {
        "name": "addPhoneContact",
        "value": "addPhoneContact({\n\tfirstName: ''\n})",
        "moveAction": [
            -1,
            12
        ],
        "desc": "<h3 >wx.addPhoneContact(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>photoFilePath</td>\n<td>String</td>\n<td>否</td>\n<td>头像本地文件路径</td>\n</tr>\n<tr>\n<td>nickName</td>\n<td>String</td>\n<td>否</td>\n<td>昵称</td>\n</tr>\n<tr>\n<td>lastName</td>\n<td>String</td>\n<td>否</td>\n<td>姓氏</td>\n</tr>\n<tr>\n<td>middleName</td>\n<td>String</td>\n<td>否</td>\n<td>中间名</td>\n</tr>\n<tr>\n<td>firstName</td>\n<td>String</td>\n<td>是</td>\n<td>名字</td>\n</tr>\n<tr>\n<td>remark</td>\n<td>String</td>\n<td>否</td>\n<td>备注</td>\n</tr>\n<tr>\n<td>mobilePhoneNumber</td>\n<td>String</td>\n<td>否</td>\n<td>手机号</td>\n</tr>\n<tr>\n<td>weChatNumber</td>\n<td>String</td>\n<td>否</td>\n<td>微信号</td>\n</tr>\n<tr>\n<td>addressCountry</td>\n<td>String</td>\n<td>否</td>\n<td>联系地址国家</td>\n</tr>\n<tr>\n<td>addressState</td>\n<td>String</td>\n<td>否</td>\n<td>联系地址省份</td>\n</tr>\n<tr>\n<td>addressCity</td>\n<td>String</td>\n<td>否</td>\n<td>联系地址城市</td>\n</tr>\n<tr>\n<td>addressStreet</td>\n<td>String</td>\n<td>否</td>\n<td>联系地址街道</td>\n</tr>\n<tr>\n<td>addressPostalCode</td>\n<td>String</td>\n<td>否</td>\n<td>联系地址邮政编码</td>\n</tr>\n<tr>\n<td>organization</td>\n<td>String</td>\n<td>否</td>\n<td>公司</td>\n</tr>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>否</td>\n<td>职位</td>\n</tr>\n<tr>\n<td>workFaxNumber</td>\n<td>String</td>\n<td>否</td>\n<td>工作传真</td>\n</tr>\n<tr>\n<td>workPhoneNumber</td>\n<td>String</td>\n<td>否</td>\n<td>工作电话</td>\n</tr>\n<tr>\n<td>hostNumber</td>\n<td>String</td>\n<td>否</td>\n<td>公司电话</td>\n</tr>\n<tr>\n<td>email</td>\n<td>String</td>\n<td>否</td>\n<td>电子邮件</td>\n</tr>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>否</td>\n<td>网站</td>\n</tr>\n<tr>\n<td>workAddressCountry</td>\n<td>String</td>\n<td>否</td>\n<td>工作地址国家</td>\n</tr>\n<tr>\n<td>workAddressState</td>\n<td>String</td>\n<td>否</td>\n<td>工作地址省份</td>\n</tr>\n<tr>\n<td>workAddressCity</td>\n<td>String</td>\n<td>否</td>\n<td>工作地址城市</td>\n</tr>\n<tr>\n<td>workAddressStreet</td>\n<td>String</td>\n<td>否</td>\n<td>工作地址街道</td>\n</tr>\n<tr>\n<td>workAddressPostalCode</td>\n<td>String</td>\n<td>否</td>\n<td>工作地址邮政编码</td>\n</tr>\n<tr>\n<td>homeFaxNumber</td>\n<td>String</td>\n<td>否</td>\n<td>住宅传真</td>\n</tr>\n<tr>\n<td>homePhoneNumber</td>\n<td>String</td>\n<td>否</td>\n<td>住宅电话</td>\n</tr>\n<tr>\n<td>homeAddressCountry</td>\n<td>String</td>\n<td>否</td>\n<td>住宅地址国家</td>\n</tr>\n<tr>\n<td>homeAddressState</td>\n<td>String</td>\n<td>否</td>\n<td>住宅地址省份</td>\n</tr>\n<tr>\n<td>homeAddressCity</td>\n<td>String</td>\n<td>否</td>\n<td>住宅地址城市</td>\n</tr>\n<tr>\n<td>homeAddressStreet</td>\n<td>String</td>\n<td>否</td>\n<td>住宅地址街道</td>\n</tr>\n<tr>\n<td>homeAddressPostalCode</td>\n<td>String</td>\n<td>否</td>\n<td>住宅地址邮政编码</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "showToast",
        "value": "showToast({\n\ttitle: ''\n})",
        "moveAction": [
            -1,
            8
        ],
        "desc": "<h3 >wx.showToast(OBJECT)</h3><p>显示消息提示框</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>是</td>\n<td>提示的内容</td>\n<td></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>String</td>\n<td>否</td>\n<td>图标，有效值 \"success\", \"loading\"</td>\n<td></td>\n</tr>\n<tr>\n<td>image</td>\n<td>String</td>\n<td>否</td>\n<td>自定义图标的本地路径，image 的优先级高于 icon</td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Number</td>\n<td>否</td>\n<td>提示的延迟时间，单位毫秒，默认：1500</td>\n<td></td>\n</tr>\n<tr>\n<td>mask</td>\n<td>Boolean</td>\n<td>否</td>\n<td>是否显示透明蒙层，防止触摸穿透，默认：false</td>\n<td></td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "showLoading",
        "value": "showLoading({\n\ttitle: ''\n})",
        "moveAction": [
            -1,
            8
        ],
        "desc": "<h3 >wx.showLoading(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>是</td>\n<td>提示的内容</td>\n</tr>\n<tr>\n<td>mask</td>\n<td>Boolean</td>\n<td>否</td>\n<td>是否显示透明蒙层，防止触摸穿透，默认：false</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "hideToast",
        "value": "hideToast()",
        "desc": "<h3 >wx.hideToast()</h3><p>隐藏消息提示框</p>"
    },
    {
        "name": "hideLoading",
        "value": "hideLoading()",
        "desc": "<h3 >wx.hideLoading()</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>隐藏 loading 提示框</p>"
    },
    {
        "name": "showModal",
        "value": "showModal({\n\ttitle: '',\n\tcontent: ''\n})",
        "moveAction": [
            -2,
            8
        ],
        "desc": "<h3 >wx.showModal(OBJECT)</h3><p>​显示模态弹窗</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>是</td>\n<td>提示的标题</td>\n</tr>\n<tr>\n<td>content</td>\n<td>String</td>\n<td>是</td>\n<td>提示的内容</td>\n</tr>\n<tr>\n<td>showCancel</td>\n<td>Boolean</td>\n<td>否</td>\n<td>是否显示取消按钮，默认为 true</td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>String</td>\n<td>否</td>\n<td>取消按钮的文字，默认为\"取消\"，最多 4 个字符</td>\n</tr>\n<tr>\n<td>cancelColor</td>\n<td>HexColor</td>\n<td>否</td>\n<td>取消按钮的文字颜色，默认为\"#000000\"</td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td>String</td>\n<td>否</td>\n<td>确定按钮的文字，默认为\"确定\"，最多 4 个字符</td>\n</tr>\n<tr>\n<td>confirmColor</td>\n<td>HexColor</td>\n<td>否</td>\n<td>确定按钮的文字颜色，默认为\"#3CC51F\"</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "showActionSheet",
        "value": "showActionSheet({\n\titemList: []\n})",
        "moveAction": [
            -1,
            11
        ],
        "desc": "<h3 >wx.showActionSheet(OBJECT)</h3><p>​显示操作菜单</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>itemList</td>\n<td>String Array</td>\n<td>是</td>\n<td>按钮的文字数组，数组长度最大为6个</td>\n</tr>\n<tr>\n<td>itemColor</td>\n<td>HexColor</td>\n<td>否</td>\n<td>按钮的文字颜色，默认为\"#000000\"</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数，详见返回参数说明</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "setTopBarText",
        "value": "setTopBarText({\n\ttext: ''\n})",
        "moveAction": [
            -1,
            7
        ],
        "desc": "<h3 >wx.setTopBarText(OBJECT)</h3><blockquote>\n<p>基础库 1.4.3 开始支持，低版本需做兼容处理</p>\n</blockquote><p>动态设置置顶栏文字内容，只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容。<strong>注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调 fail，errMsg：\"setTopBarText: fail invoke too frequently\"</strong></p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>String</td>\n<td>是</td>\n<td>置顶栏文字内容</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "setNavigationBarTitle",
        "value": "setNavigationBarTitle({\n\ttitle: ''\n})",
        "moveAction": [
            -1,
            8
        ],
        "desc": "<h3 >wx.setNavigationBarTitle(OBJECT)</h3><p>动态设置当前页面的标题。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>是</td>\n<td>页面标题</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "showNavigationBarLoading",
        "value": "showNavigationBarLoading()",
        "desc": "<h3 >wx.showNavigationBarLoading()</h3><p>在当前页面显示导航条加载动画。</p>"
    },
    {
        "name": "hideNavigationBarLoading",
        "value": "hideNavigationBarLoading()",
        "desc": "<h3 >wx.hideNavigationBarLoading()</h3><p>隐藏导航条加载动画。</p>"
    },
    {
      "name": "setNavigationBarColor",
      "value": "setNavigationBarColor({\n\tfrontColor: '',\n\tbackgroundColor: ''\n})",
      "moveAction": [
          -2,
          13
      ],
      "desc": "<h3 >wx.setNavigationBarColor(OBJECT)</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>frontColor</td>\n<td>String</td>\n<td>是</td>\n<td>前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000</td>\n</tr>\n<tr>\n<td>backgroundColor</td>\n<td>String</td>\n<td>是</td>\n<td>背景颜色值，有效值为十六进制颜色</td>\n</tr>\n<tr>\n<td>animation</td>\n<td>Object</td>\n<td>否</td>\n<td>动画效果</td>\n</tr>\n<tr>\n<td>animation.duration</td>\n<td>Number</td>\n<td>否</td>\n<td>动画变化时间，默认0，单位：毫秒</td>\n</tr>\n<tr>\n<td>animation.timingFunc</td>\n<td>String</td>\n<td>否</td>\n<td>动画变化方式，默认 linear</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "navigateTo",
        "value": "navigateTo({\n\turl: ''\n})",
        "moveAction": [
            -1,
            6
        ],
        "desc": "<h3 >wx.navigateTo(OBJECT)</h3><p>保留当前页面，跳转到应用内的某个页面，使用<code>wx.navigateBack</code>可以返回到原页面。</p><p><strong>OBJECT 参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用<code>?</code>分隔，参数键与参数值用<code>=</code>相连，不同参数用<code>&amp;</code>分隔；如 'path?key=value&amp;key2=value2'</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "redirectTo",
        "value": "redirectTo({\n\turl: ''\n})",
        "moveAction": [
            -1,
            6
        ],
        "desc": "<h3 >wx.redirectTo(OBJECT)</h3><p>关闭当前页面，跳转到应用内的某个页面。</p><p><strong>OBJECT 参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用<code>?</code>分隔，参数键与参数值用<code>=</code>相连，不同参数用<code>&amp;</code>分隔；如 'path?key=value&amp;key2=value2'</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "reLaunch",
        "value": "reLaunch({\n\turl: ''\n})",
        "moveAction": [
            -1,
            6
        ],
        "desc": "<h3 >wx.reLaunch(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>关闭所有页面，打开到应用内的某个页面。</p><p><strong>OBJECT 参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用<code>?</code>分隔，参数键与参数值用<code>=</code>相连，不同参数用<code>&amp;</code>分隔；如 'path?key=value&amp;key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "switchTab",
        "value": "switchTab({\n\turl: ''\n})",
        "moveAction": [
            -1,
            6
        ],
        "desc": "<h3 >wx.switchTab(OBJECT)</h3><p>跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</p><p><strong>OBJECT 参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "navigateBack",
        "value": "navigateBack({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.navigateBack(OBJECT)</h3><p>关闭当前页面，返回上一页面或多级页面。可通过 <code>getCurrentPages()</code>) 获取当前的页面栈，决定需要返回几层。</p><p><strong>OBJECT 参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>delta</td>\n<td>Number</td>\n<td>1</td>\n<td>返回的页面数，如果 delta 大于现有页面数，则返回到首页。</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "createAnimation",
      "value": "createAnimation({\n\t\n})",
      "moveAction": [
          -1
      ],
      "desc": "<h3 >wx.createAnimation(OBJECT)</h3><p>创建一个动画实例animation。调用实例的方法来描述动画。最后通过动画实例的<code>export</code>方法导出动画数据传递给组件的<code>animation</code>属性。</p><p><strong>注意: <code>export</code> 方法每次调用后会清掉之前的动画操作 </strong></p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>duration</td>\n<td>Integer</td>\n<td>否</td>\n<td>400</td>\n<td>动画持续时间，单位ms</td>\n</tr>\n<tr>\n<td>timingFunction</td>\n<td>String</td>\n<td>否</td>\n<td>\"linear\"</td>\n<td>定义动画的效果</td>\n</tr>\n<tr>\n<td>delay</td>\n<td>Integer</td>\n<td>否</td>\n<td>0</td>\n<td>动画延迟时间，单位 ms</td>\n</tr>\n<tr>\n<td>transformOrigin</td>\n<td>String</td>\n<td>否</td>\n<td>\"50% 50% 0\"</td>\n<td>设置transform-origin</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "pageScrollTo",
      "value": "pageScrollTo({\n\tscrollTop: 0\n})",
      "moveAction": [
          -1,
          0
      ],
      "desc": "<h3 >wx.pageScrollTo(OBJECT)</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>将页面滚动到目标位置。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>scrollTop</td>\n<td>Number</td>\n<td>是</td>\n<td>滚动到页面的目标位置（单位px）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "createSelectorQuery",
      "value": "createSelectorQuery()",
      "desc": "<h3 >wx.createSelectorQuery()</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>返回一个SelectorQuery对象实例。可以在这个实例上使用<code>select</code>等方法选择节点，并使用<code>boundingClientRect</code>等方法选择需要查询的信息。</p>"
    },
    {
      "name": "createCanvasContext",
      "value": "createCanvasContext()",
      "params": ["canvasId"],
      "desc": "<h3 >wx.createCanvasContext(canvasId)</h3><p>创建 canvas 绘图上下文（指定 canvasId）</p>"
    },
    {
        "name": "canvasToTempFilePath",
        "value": "canvasToTempFilePath({\n\tcanvasId: ''\n})",
        "moveAction": [
            -1,
            11
        ],
        "desc": "<h3 >wx.canvasToTempFilePath(OBJECT)</h3><p>把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>x</td>\n<td>Number</td>\n<td>否</td>\n<td>画布x轴起点（默认0）</td>\n<td>1.2.0</td>\n</tr>\n<tr>\n<td>y</td>\n<td>Number</td>\n<td>否</td>\n<td>画布y轴起点（默认0）</td>\n<td>1.2.0</td>\n</tr>\n<tr>\n<td>width</td>\n<td>Number</td>\n<td>否</td>\n<td>画布宽度（默认为canvas宽度-x）</td>\n<td>1.2.0</td>\n</tr>\n<tr>\n<td>height</td>\n<td>Number</td>\n<td>否</td>\n<td>画布高度（默认为canvas高度-y）</td>\n<td>1.2.0</td>\n</tr>\n<tr>\n<td>destWidth</td>\n<td>Number</td>\n<td>否</td>\n<td>输出图片宽度（默认为width）</td>\n<td>1.2.0</td>\n</tr>\n<tr>\n<td>destHeight</td>\n<td>Number</td>\n<td>否</td>\n<td>输出图片高度（默认为height）</td>\n<td>1.2.0</td>\n</tr>\n<tr>\n<td>canvasId</td>\n<td>String</td>\n<td>是</td>\n<td>画布标识，传入 <code>&lt;canvas/&gt;</code> 的 cavas-id</td>\n<td></td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "startPullDownRefresh",
        "value": "startPullDownRefresh({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.startPullDownRefresh(OBJECT)</h3><blockquote>\n<p>基础库 1.5.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致</p><p><strong>Object参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "stopPullDownRefresh",
        "value": "stopPullDownRefresh()",
        "desc": "<h3 >wx.stopPullDownRefresh()</h3><p>停止当前页面下拉刷新。</p>"
    },
    {
      "name": "createSelectorQuery",
      "value": "createSelectorQuery()",
      "desc": "<h3 >wx.createSelectorQuery()</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>返回一个SelectorQuery对象实例。可以在这个实例上使用<code>select</code>等方法选择节点，并使用<code>boundingClientRect</code>等方法选择需要查询的信息。</p>"
    },
    {
        "name": "getExtConfig",
        "value": "getExtConfig({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.getExtConfig(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取第三方平台自定义的数据字段。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>返回</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>返回第三方平台自定义的数据</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "getExtConfigSync",
        "value": "getExtConfigSync()",
        "desc": "<h3 >wx.getExtConfigSync()</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取第三方平台自定义的数据字段的同步接口。</p>"
    },
    {
        "name": "login",
        "value": "login({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.login(OBJECT)</h3><p>调用接口获取<strong>登录凭证（code）</strong>进而换取用户登录态信息，包括用户的<strong>唯一标识（openid）</strong> 及本次登录的 <strong>会话密钥（session_key）</strong>。<strong>用户数据的加解密通讯</strong>需要依赖会话密钥完成。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "checkSession",
        "value": "checkSession({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.checkSession(OBJECT)</h3><p>通过上述接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用wx.checkSession接口<strong>检测当前用户登录态是否有效</strong>。登录态过期后开发者可以再调用wx.login获取新的用户登录态。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数，登录态未过期</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数，登录态已过期</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "authorize",
        "value": "authorize({\n\tscope: ''\n})",
        "moveAction": [
            -1,
            8
        ],
        "desc": "<h3 >wx.authorize(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>部分接口需要获得同意后才能调用。此类接口调用时，如果用户未授权过，会弹窗询问用户，用户点击同意后方可调用接口。如果用户点了拒绝，则短期内调用不会出现弹窗，而是直接进入 fail 回调。用户可以在小程序设置界面中修改对该小程序的授权信息。本接口用于提前向用户发起授权，调用后会立刻弹窗询问用户是否同意小程序使用某项功能或获取用户的某些数据，但不会实际调用接口。如果用户之前已经同意，则不会出现弹窗，直接返回成功。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>scope</td>\n<td>String</td>\n<td>是</td>\n<td>需要获取权限的scope，详见 scope 列表</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "getUserInfo",
        "value": "getUserInfo({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.getUserInfo(OBJECT)</h3><p>获取用户信息，withCredentials 为 true 时需要先调用 wx.login 接口。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>withCredentials</td>\n<td>Boolean</td>\n<td>否</td>\n<td>是否带上登录态信息</td>\n<td>1.1.0</td>\n</tr>\n<tr>\n<td>lang</td>\n<td>String</td>\n<td>否</td>\n<td>指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "requestPayment",
        "value": "requestPayment({\n\ttimeStamp: '',\n\tnonceStr: '',\n\tpackage: '',\n\tsignType: '',\n\tpaySign: ''\n})",
        "moveAction": [
            -5,
            12
        ],
        "desc": "<h3 >wx.requestPayment(OBJECT)</h3><p>发起微信支付。</p><p><strong>Object参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>timeStamp</td>\n<td>String</td>\n<td>是</td>\n<td>时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间</td>\n</tr>\n<tr>\n<td>nonceStr</td>\n<td>String</td>\n<td>是</td>\n<td>随机字符串，长度为32个字符以下。</td>\n</tr>\n<tr>\n<td>package</td>\n<td>String</td>\n<td>是</td>\n<td>统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=<em>*</em></td>\n</tr>\n<tr>\n<td>signType</td>\n<td>String</td>\n<td>是</td>\n<td>签名算法，暂支持 MD5</td>\n</tr>\n<tr>\n<td>paySign</td>\n<td>String</td>\n<td>是</td>\n<td>签名,具体签名方案参见小程序支付接口文档;</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "showShareMenu",
      "value": "showShareMenu({\n\t\n})",
      "moveAction": [
          -1
      ],
      "desc": "<h3 >wx.showShareMenu(OBJECT)</h2><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>显示当前页面的转发按钮</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>withShareTicket</td>\n<td>Boolean</td>\n<td>否</td>\n<td>是否使用带 shareTicket 的转发详情</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "hideShareMenu",
        "value": "hideShareMenu({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.hideShareMenu(OBJECT)</h2><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>隐藏转发按钮</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "updateShareMenu",
        "value": "updateShareMenu({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.updateShareMenu(OBJECT)</h2><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>更新转发属性</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>withShareTicket</td>\n<td>Boolean</td>\n<td>否</td>\n<td>是否使用带 shareTicket 的转发详情</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "getShareInfo",
        "value": "getShareInfo({\n\tshareTicket: ''\n})",
        "moveAction": [
            -1,
            14
        ],
        "desc": "<h3 >wx.getShareInfo(OBJECT)</h2><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取转发详细信息</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>shareTicket</td>\n<td>String</td>\n<td>是</td>\n<td>shareTicket</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "chooseAddress",
      "value": "chooseAddress({\n\t\n})",
      "moveAction": [
          -1
      ],
      "desc": "<h3 >wx.chooseAddress(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>返回用户选择的收货地址信息</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "addCard",
        "value": "addCard({\n\tcardList: []\n})",
        "moveAction": [
            -1,
            11
        ],
        "desc": "<h3 >wx.addCard(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>批量添加卡券。</p><p><strong>Object参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>cardList</td>\n<td>ObjectArray</td>\n<td>是</td>\n<td>需要添加的卡券列表，列表内对象说明请参见请求对象说明</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "openCard",
        "value": "openCard({\n\tcardList: []\n})",
        "moveAction": [
            -1,
            11
        ],
        "desc": "<h3 >wx.openCard(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>查看微信卡包中的卡券。</p><p><strong>Object参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>cardList</td>\n<td>ObjectArray</td>\n<td>是</td>\n<td>需要打开的卡券列表，列表内参数详见openCard 请求对象说明</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "openSetting",
        "value": "openSetting({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.openSetting(OBJECT)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>调起客户端小程序设置界面，返回用户设置的操作结果</p><p><strong>Object 参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数，返回内容详见返回参数说明。</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "getSetting",
        "value": "getSetting({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.getSetting(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取用户的当前设置</p><p><strong>Object 参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数，返回内容详见返回参数说明。</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "getWeRunData",
        "value": "getWeRunData({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.getWeRunData(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取用户过去三十天微信运动步数，需要先调用 wx.login 接口。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "navigateToMiniProgram",
        "value": "navigateToMiniProgram({\n\tappId: ''\n})",
        "moveAction": [
            -1,
            8
        ],
        "desc": "<h3 >wx.navigateToMiniProgram(OBJECT)</h3><blockquote>\n<p>基础库 1.3.0 开始支持，低版本需做兼容处理</p>\n<p> iOS 微信客户端 6.5.9 版本开始支持，Android 客户端即将在 6.5.10 版本开始支持，请先使用 iOS 客户端进行调试</p>\n</blockquote><p>打开同一公众号下关联的另一个小程序。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>appId</td>\n<td>String</td>\n<td>是</td>\n<td>要打开的小程序 appId</td>\n</tr>\n<tr>\n<td>path</td>\n<td>String</td>\n<td>否</td>\n<td>打开的页面路径，如果为空则打开首页</td>\n</tr>\n<tr>\n<td>extraData</td>\n<td>Object</td>\n<td>否</td>\n<td>需要传递给目标小程序的数据，目标小程序可在 <code>App.onLaunch()</code>，<code>App.onShow()</code> 中获取到这份数据。详情</td>\n</tr>\n<tr>\n<td>envVersion</td>\n<td>String</td>\n<td>否</td>\n<td>要打开的小程序版本，有效值 develop（开发版），trial（体验版），release（正式版） ，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是体验版或正式版，则打开的小程序必定是正式版。默认值 release</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "navigateBackMiniProgram",
        "value": "navigateBackMiniProgram({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.navigateBackMiniProgram(OBJECT)</h3><blockquote>\n<p>基础库 1.3.0 开始支持，低版本需做兼容处理</p>\n<p> iOS 微信客户端 6.5.9 版本开始支持，Android 客户端即将在 6.5.10 版本开始支持，请先使用 iOS 客户端进行调试</p>\n</blockquote><p>返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>extraData</td>\n<td>Object</td>\n<td>否</td>\n<td>需要返回给上一个小程序的数据，上一个小程序可在 <code>App.onShow()</code> 中获取到这份数据。详情</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "chooseInvoiceTitle",
      "value": "chooseInvoiceTitle({\n\t\n})",
      "moveAction": [
          -1
      ],
      "desc": "<h3 >wx.chooseInvoiceTitle(OBJECT)</h3><blockquote>\n<p>基础库 1.5.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>选择用户的发票抬头</p><p><strong>Object参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "checkIsSupportSoterAuthentication",
        "value": "checkIsSupportSoterAuthentication({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.checkIsSupportSoterAuthentication(OBJECT)</h3><blockquote>\n<p>基础库 1.5.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取本机支持的 SOTER 生物认证方式</p><p><strong>Object参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "startSoterAuthentication",
        "value": "startSoterAuthentication({\n\trequestAuthModes: [],\n\tchallenge: ''\n})",
        "moveAction": [
            -2,
            19
        ],
        "desc": "<h3 >wx.startSoterAuthentication(OBJECT)</h3><blockquote>\n<p>基础库 1.5.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>开始 SOTER 生物认证</p><p><strong>Object参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>requestAuthModes</td>\n<td>StringArray</td>\n<td>是</td>\n<td>请求使用的可接受的生物认证方式</td>\n</tr>\n<tr>\n<td>challenge</td>\n<td>String</td>\n<td>是</td>\n<td>挑战因子。挑战因子为调用者为此次生物鉴权准备的用于签名的字符串关键是别信息，将作为result_json的一部分，供调用者识别本次请求。例如：如果场景为请求用户对某订单进行授权确认，则可以将订单号填入此参数。</td>\n</tr>\n<tr>\n<td>authContent</td>\n<td>String</td>\n<td>否</td>\n<td>验证描述，即识别过程中显示在界面上的对话框提示内容</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "arrayBufferToBase64",
        "value": "arrayBufferToBase64()",
        "moveAction": [
            0,
            -1
        ],
        "desc": "<h3 >wx.arrayBufferToBase64(arrayBuffer)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>将 ArrayBuffer 数据转成 Base64 字符串</p>"
    },
    {
        "name": "base64ToArrayBuffer",
        "value": "base64ToArrayBuffer()",
        "moveAction": [
            0,
            -1
        ],
        "desc": "<h3 >wx.base64ToArrayBuffer(base64)</h3><blockquote>\n<p>基础库 1.1.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>将 Base64 字符串转成 ArrayBuffer 数据</p>"
    }
  ]
}

export default {
  context
}