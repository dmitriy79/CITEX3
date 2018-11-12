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
    // let wsUri = `${process.env.WS_API}/scheduling/${arg.url}`
    let wsUri = `${process.env.WS_API}/${arg.url}`
    this.websock = new WebSocket(wsUri)
    this.websock.onmessage = (resp = {}) => {
      try {
        if(resp.data){
          arg.success(JSON.parse(resp.data || "{}"))
        }
        
        console.log(resp.data,'resp.data====')
      } catch (e) {
        console.error('json 解析失败, 数据为', resp)
      }
      console.log(wsUri, "====>WebSocket接收数据")
    }
    this.websock.onclose = (e) => {
      if (e.code != 1000) {
        arg.fail(e)
        console.log(wsUri, `====>WebSocket连接关闭:::errorCode = ${e.code}`)
      }
    }
    this.websock.onopen = (e) => {
      console.log(wsUri, "====>WebSocket连接成功")
    }
  }
  closeSocket() {
    this.websock.close(1000);
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