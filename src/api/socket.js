//var serverPort = '5000';  //webSocket连接端口
var wsList = [
  "websocketAskBid", //买卖挂单接口 
  "websocketSSCJ", //启用成交历史接口    POSTws://47.93.194.146:13080/
  "websocketKline", //启用K线    POSTws://47.93.194.146:13080/
  "websocketDealPrice", //启用主币区   POSTws://47.93.194.146:13080/
  "websocketRankingList", //启用首页的涨跌排行榜  POSTws://47.93.194.146:13080/ls
]
export default class {
  constructor(arg) {
    window.WebSocket = window.WebSocket || window.MozWebSocket
		if(!window.WebSocket) {
			this.error('Error: WebSocket is not supported..')
      return
    }
    let wsUri = `${process.env.WS_API}/${arg.url}`
    this.websock = new WebSocket(wsUri)
    this.websock.onmessage = (e) => {
      arg.success(JSON.parse(e.data))
      console.log(wsUri, "====>WebSocket接收数据")
    }
    this.websock.onclose = (e) => {
      this.websock.close()
      console.log(wsUri, `====>WebSocket连接关闭:::errorCode = ${e.code}`)
    }
    this.websock.onopen = (e) => {
      console.log(wsUri, "====>WebSocket连接成功")
    }
  }
  sendSocket() {
    if (this.websock.readyState === this.websock.OPEN) {
      console.log("open状态")
      this.websocketSend(arg.data)
    } else if (this.websock.readyState === this.websock.CONNECTING) {
      console.log("开启状态")
      setTimeout(() => {
        this.sendSocket()
      }, 1000)
    } else {
      console.log("未开启状态")
      setTimeout(() => {
        this.sendSocket()
      }, 1000)
    }
  }
  websocketSend(agentData) {
    console.log("数据发送====>", agentData)
    this.websock.send(JSON.stringify(agentData))
  }
}
// initWebSocket(socketUrl, arg) {
//     let wsUri = `${process.env.WS_API}/${this.url}`
//     let websock = new WebSocket(wsUri)
//     console.log(this.websock)
//     websock.onmessage = (e) => {
//       arg.success(JSON.parse(e.data))
//       console.log(wsUri, "====>WebSocket接收数据")
//     }
//     websock.onclose = (e) => {
//       websock.close()
//       console.log("connection closed (" + e.code + ")")
//       console.log(wsUri, "====>WebSocket连接关闭")
//     }
//     websock.onopen = (e) => {
//       console.log(wsUri, "====>WebSocket连接成功")
//     }

//     let websocketSend = (agentData) => {
//       console.log("数据发送====>", agentData)
//       websock.send(JSON.stringify(agentData))
//     }
//     //连接发生错误的回调方法
//     websock.onerror = (e) => {
//       arg.fail()
//       console.log(wsUri, "====>WebSocket连接发生错误")
//     }

//     let sendSocket = () => {
//       if (websock.readyState === websock.OPEN) {
//         console.log("open状态")
//         websocketSend(arg.data)
//       } else if (websock.readyState === websock.CONNECTING) {
//         console.log("开启状态")
//         setTimeout(() => {
//             sendSocket()
//             }, 1000)
//         } else {
//           console.log("未开启状态")
//           setTimeout(() => {
//               sendSocket()
//               }, 1000)
//           }
//         }
//       },
//   return function(Constructor, protoProps, staticProps){

//   }
// 实际调用的方法
// sendSocket(agentData, callback) {
//     this.globalCallback = callback
//     if (this.websock.readyState === this.websock.OPEN) {
//         console.log("open状态")
//         this.websocketSend(agentData)
//     } else if (this.websock.readyState === this.websock.CONNECTING) {
//         console.log("开启状态")
//         setTimeout(() => {
//             this.sendSocket(agentData, callback)
//         }, 1000)
//     } else {
//         console.log("未开启状态")
//         setTimeout(() => {
//             this.sendSocket(agentData, callback)
//         }, 1000)
//     }
// }
//数据接收
// onmessage(e) {
//   console.log(e)
//   let data = JSON.parse(e.data)
//   this.globalCallback(JSON.parse(e.data))
// }
//数据发送
// websocketSend(agentData) {
//   console.log("数据发送====>", agentData)
//   this.websock.send(JSON.stringify(agentData))
// }
// open() {
//   console.log("连接成功")
// }
