var context = {
  'wx': [
    {
        "name": "request",
        "value": "request({\n\turl: ''\n})",
        "moveAction": [
            -1, 6
        ],
        "desc": "<h3 >wx.request(OBJECT)</h3><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>开发者服务器接口地址</td>\n</tr>\n<tr>\n<td>data</td>\n<td>Object、String</td>\n<td>否</td>\n<td>请求的参数</td>\n</tr>\n<tr>\n<td>header</td>\n<td>Object</td>\n<td>否</td>\n<td>设置请求的 header , header 中不能设置 Referer</td>\n</tr>\n<tr>\n<td>method</td>\n<td>String</td>\n<td>否</td>\n<td>默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT</td>\n</tr>\n<tr>\n<td>dataType</td>\n<td>String</td>\n<td>否</td>\n<td>默认为 json。如果设置了 dataType 为 json，则会尝试对响应的数据做一次 JSON.parse</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'}</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "uploadFile",
        "value": "uploadFile({\n\turl: ''\n\tfilePath: ''\n\tname: ''\n})",
        "moveAction": [
            -3, 6
        ],
        "desc": "<h3 >wx.uploadFile(OBJECT)</h3><p>将本地资源上传到开发者服务器。如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。客户端发起一个 HTTPS POST 请求，其中 <code>content-type</code> 为 <code>multipart/form-data</code> 。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>开发者服务器 url</td>\n</tr>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>要上传文件资源的路径</td>\n</tr>\n<tr>\n<td>name</td>\n<td>String</td>\n<td>是</td>\n<td>文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容</td>\n</tr>\n<tr>\n<td>header</td>\n<td>Object</td>\n<td>否</td>\n<td>HTTP 请求 Header , header 中不能设置 Referer</td>\n</tr>\n<tr>\n<td>formData</td>\n<td>Object</td>\n<td>否</td>\n<td>HTTP 请求中其他额外的 form data</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "downloadFile",
        "value": "downloadFile({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.downloadFile(OBJECT)</h3><p>下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td>String</td>\n<td>是</td>\n<td>下载资源的 url</td>\n</tr>\n<tr>\n<td>header</td>\n<td>Object</td>\n<td>否</td>\n<td>HTTP 请求 Header</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'}</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "connectSocket",
        "value": "connectSocket({\n\turl: ''\n})",
        "moveAction": [
            -1, 6
        ],
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
        "moveAction": [
            -1, 7
        ],
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
        "moveAction": [
            -1
        ],
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
        "moveAction": [
            -1, 24
        ],
        "desc": "<h3 >wx.chooseImage(OBJECT)</h3><p>从本地相册选择图片或使用相机拍照。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>count</td>\n<td>Number</td>\n<td>否</td>\n<td>最多可以选择的图片张数，默认9</td>\n</tr>\n<tr>\n<td>sizeType</td>\n<td>StringArray</td>\n<td>否</td>\n<td>original 原图，compressed 压缩图，默认二者都有</td>\n</tr>\n<tr>\n<td>sourceType</td>\n<td>StringArray</td>\n<td>否</td>\n<td>album 从相册选图，camera 使用相机，默认二者都有</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>是</td>\n<td>成功则返回图片的本地文件路径列表 tempFilePaths</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "previewImage",
        "value": "previewImage({\n\turls: []\n})",
        "moveAction": [
            -1, 7
        ],
        "desc": "<h3 >wx.previewImage(OBJECT)</h3><p>预览图片。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>current</td>\n<td>String</td>\n<td>否</td>\n<td>当前显示图片的链接，不填则默认为 urls 的第一张</td>\n</tr>\n<tr>\n<td>urls</td>\n<td>StringArray</td>\n<td>是</td>\n<td>需要预览的图片链接列表</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "getImageInfo",
        "value": "getImageInfo({\n\tsrc: ''\n})",
        "moveAction": [
            -1, 6
        ],
        "desc": "<h3 >wx.getImageInfo(OBJECT)</h3><p>获取图片信息</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src</td>\n<td>String</td>\n<td>是</td>\n<td>图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "saveImageToPhotosAlbum",
        "value": "saveImageToPhotosAlbum({\n\tfilePath: ''\n})",
        "moveAction": [
            -1, 11
        ],
        "desc": "<h3 >wx.saveImageToPhotosAlbum(OBJECT)</h3><blockquote>\n<p>基础库 1.2.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>保存图片到系统相册，需要用户授权（scope.writePhotosAlbum），详见 用户授权</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "startRecord",
      "value": "startRecord({\n\t\n})",
      "moveAction": [
          -1
      ],
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
      "moveAction": [
          -1, 11
      ],
      "desc": "<h3 >wx.playVoice(OBJECT)</h3><p>开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>需要播放的语音文件的文件路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "pauseVoice",
        "value": "pauseVoice()",
        "moveAction": [
            0,
            -1
        ],
        "desc": "<h3 >wx.pauseVoice()</h3><p>暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。</p>"
    },
    {
        "name": "stopVoice",
        "value": "stopVoice()",
        "moveAction": [
            0,
            -1
        ],
        "desc": "<h3 >wx.stopVoice()</h3><p>结束播放语音。</p>"
    },
    {
      "name": "getBackgroundAudioPlayerState",
      "value": "getBackgroundAudioPlayerState({\n\t\n})",
      "moveAction": [
          -1
      ],
      "desc": "<h3 >wx.getBackgroundAudioPlayerState(OBJECT)</h3><p>获取后台音乐播放状态。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "playBackgroundAudio",
        "value": "playBackgroundAudio({\n\tdataUrl: ''\n})",
        "moveAction": [
            -1, 10
        ],
        "desc": "<h3 >wx.playBackgroundAudio(OBJECT)</h3><p>使用后台播放器播放音乐，对于微信客户端来说，只能同时有一个后台音乐在播放。当用户离开小程序后，音乐将暂停播放；当用户点击“显示在聊天顶部”时，音乐不会暂停播放；当用户在其他小程序占用了音乐播放器，原有小程序内的音乐将停止播放。</p><p><strong>OBJECT参数说明</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dataUrl</td>\n<td>String</td>\n<td>是</td>\n<td>音乐链接，目前支持的格式有 m4a, aac, mp3, wav</td>\n</tr>\n<tr>\n<td>title</td>\n<td>String</td>\n<td>否</td>\n<td>音乐标题</td>\n</tr>\n<tr>\n<td>coverImgUrl</td>\n<td>String</td>\n<td>否</td>\n<td>封面URL</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "pauseBackgroundAudio",
        "value": "pauseBackgroundAudio()",
        "moveAction": [
            0,
            -1
        ],
        "desc": "<h3 >wx.pauseBackgroundAudio()</h3><p>暂停播放音乐。</p>"
    },
    {
        "name": "seekBackgroundAudio",
        "value": "seekBackgroundAudio({\n\tposition: 0\n})",
        "moveAction": [
            -1, 11
        ],
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
            0,
            -1
        ],
        "desc": "<h3 >wx.onBackgroundAudioPlay(CALLBACK)</h3><p>监听音乐播放。</p>"
    },
    {
        "name": "onBackgroundAudioPause",
        "value": "onBackgroundAudioPause()",
        "moveAction": [
            0,
            -1
        ],
        "desc": "<h3 >wx.onBackgroundAudioPause(CALLBACK)</h3><p>监听音乐暂停。</p>"
    },
    {
        "name": "onBackgroundAudioStop",
        "value": "onBackgroundAudioStop()",
        "moveAction": [
            0,
            -1
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
      "moveAction": [
          -1
      ],
      "desc": "<h3 >wx.chooseVideo(OBJECT)</h3><p>拍摄视频或从手机相册中选视频，返回视频的临时文件路径。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>sourceType</td>\n<td>StringArray</td>\n<td>否</td>\n<td>album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']</td>\n</tr>\n<tr>\n<td>maxDuration</td>\n<td>Number</td>\n<td>否</td>\n<td>拍摄视频最长拍摄时间，单位秒。最长支持 60 秒</td>\n</tr>\n<tr>\n<td>camera</td>\n<td>String</td>\n<td>否</td>\n<td>默认调起的为前置还是后置摄像头。front: 前置，back: 后置，默认 back</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功，返回视频文件的临时文件路径，详见返回参数说明</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "saveVideoToPhotosAlbum",
        "value": "saveVideoToPhotosAlbum({\n\tfilePath: ''\n})",
        "moveAction": [
            -1, 11
        ],
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
      "moveAction": [
          -1, 15
      ],
      "desc": "<h3 >wx.saveFile(OBJECT)</h3><p>保存文件到本地。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>tempFilePath</td>\n<td>String</td>\n<td>是</td>\n<td>需要保存的文件的临时路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "getFileInfo",
        "value": "getFileInfo({\n\tfilePath: ''\n})",
        "moveAction": [
            -1, 11
        ],
        "desc": "<h3 >wx.getFileInfo(OBJECT)</h3><blockquote>\n<p>基础库 1.4.0 开始支持，低版本需做兼容处理</p>\n</blockquote><p>获取文件信息</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数名</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>本地文件路径</td>\n</tr>\n<tr>\n<td>digestAlgorithm</td>\n<td>String</td>\n<td>否</td>\n<td>计算文件摘要的算法，默认值 md5，有效值：md5，sha1</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "getSavedFileList",
        "value": "getSavedFileList({\n\t\n})",
        "moveAction": [
            -1
        ],
        "desc": "<h3 >wx.getSavedFileList(OBJECT)</h3><p>获取本地已保存的文件列表</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数，返回结果见<code>success返回参数说明</code></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "getSavedFileInfo",
        "value": "getSavedFileInfo({\n\tfilePath: ''\n})",
        "moveAction": [
            -1, 11
        ],
        "desc": "<h3 >wx.getSavedFileInfo(OBJECT)</h3><p>获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>文件路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数，返回结果见<code>success返回参数说明</code></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "removeSavedFile",
        "value": "removeSavedFile({\n\tfilePath: ''\n})",
        "moveAction": [
            -1, 11
        ],
        "desc": "<h3 >wx.removeSavedFile(OBJECT)</h3><p>删除本地存储的文件</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>类型</th>\n<th>必填</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>需要删除的文件路径</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
        "name": "openDocument",
        "value": "openDocument({\n\tfilePath: ''\n})",
        "moveAction": [
            -1, 11
        ],
        "desc": "<h3 >wx.openDocument(OBJECT)</h3><p>新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx</p><p><strong>OBJECT参数说明：</strong></p><table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>必填</th>\n<th>说明</th>\n<th>最低版本</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>filePath</td>\n<td>String</td>\n<td>是</td>\n<td>文件路径，可通过 downFile 获得</td>\n<td></td>\n</tr>\n<tr>\n<td>fileType</td>\n<td>String</td>\n<td>否</td>\n<td>文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx</td>\n<td>1.4.0</td>\n</tr>\n<tr>\n<td>success</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用成功的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>fail</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用失败的回调函数</td>\n<td></td>\n</tr>\n<tr>\n<td>complete</td>\n<td>Function</td>\n<td>否</td>\n<td>接口调用结束的回调函数（调用成功、失败都会执行）</td>\n</tr>\n</tbody>\n</table>"
    },
    {
      "name": "setStorage",
      "value": "setStorage({\n\tkey: '',\n\tdata: ''\n})",
      "moveAction": [
          -2, 6
      ],
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
        "moveAction": [
            -2, 6
        ],
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
        "moveAction": [
            -1, 24
        ],
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
        "moveAction": [
            -2, 6
        ],
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
    }
  ]
}

export default {
  context
}