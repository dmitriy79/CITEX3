//var serverPort = '5000';  //webSocket连接端口
var wsList = [
    "websocketAskBid", //买卖挂单接口 
    "websocketSSCJ", //启用成交历史接口    POSTws://47.93.194.146:13080/
    "websocketKline", //启用K线    POSTws://47.93.194.146:13080/
    "websocketDealPrice", //启用主币区   POSTws://47.93.194.146:13080/
    "websocketRankingList", //启用首页的涨跌排行榜  POSTws://47.93.194.146:13080/
]
export default {
    websock: null,
    global_callback: null,
    initWebSocket(socketUrl) { //初始化weosocket
        let wsUri = `${process.env.WS_API}/${socketUrl}`
        //ws地址
        this.websock = new WebSocket(wsUri)
        console.log(this.websock)
        this.websock.onmessage = (e) => {
            console.log(e)
            console.log(wsUri, "====>接收数据")
            this.onmessage(e)
        }
        this.websock.onclose = (e) => {
            this.close(e)
            console.log(wsUri, "====>连接关闭")
        }
        this.websock.onopen = (e) => {
            console.log(e)
            console.log(wsUri, "====>连接成功")
            this.open()
        }
        //连接发生错误的回调方法
        this.websock.onerror = function() {
            console.log("WebSocket连接发生错误")
        }
    },
    // 实际调用的方法
    sendSocket(agentData, callback) {
        this.global_callback = callback
       // console.log(callback)
        if (this.websock.readyState === this.websock.OPEN) {
            console.log("open状态")
            //若是ws开启状态
            this.websocketSend(agentData)
        } else if (this.websock.readyState === this.websock.CONNECTING) {
            // 若是 正在开启状态，则等待1s后重新调用
            console.log("开启状态")
            setTimeout(() => {
                this.sendSocket(agentData, callback)
            }, 1000)
        } else {
            console.log("未开启状态")
            // 若未开启 ，则等待1s后重新调用
            setTimeout(() => {
                this.sendSocket(agentData, callback)
            }, 1000)
        }
    },

    //数据接收
    onmessage(e) {
        console.log(e)
        global_callback(JSON.parse(e.data))
    },

    //数据发送
    websocketSend(agentData) {
        console.log(this)
        this.websock.send(agentData)
    },

    //关闭
    close(e) {
        console.log("connection closed (" + e.code + ")")
    },

    open(e) {
        console.log("连接成功")
    }
}
