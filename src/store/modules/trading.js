import api from '../../api'
import axios from 'axios'
let webSocket = api.socket
const state = {
    buyParams: {}, //buy参数
    sellParams: {}, //sell参数
    tradingAssets: {}, //当前交易对资金
    currentTradingIndex: 0, //交易对列表当前选择项
    coinInfo: {}, //币种资料
    marketInfo: {}, //当前选择的交易对
    orderData: {}, //订单委托/历史记录
    AskList: [], //卖单
    BidList:[],//买单 

}
const getters = {

}
const actions = {
    //initTrading
    initTrading({ commit, state, rootState }, arg) {
        //交易对基本信息
        //订单记录
        //币种资料
        commit("getCoinInfo", obj)
        commit("tradingAskBid", obj)
        //成交记录
        //实时订单
        //用户资金
        //深度图
        //k线图
    },
    tradingBuy({ commit, state }, obj) {
        commit("tradingBuy", obj)
    },
    tradingSell({ commit, state }, obj) {
        commit("tradingSell", obj)
    },
    //订单记录
    listBidOrders({ commit, state }, obj) {
        commit('listBidOrders', obj)
    },
    initMarketInfo({ commit, rootState }, obj) {
        console.log(rootState, 'rootState++++0000')
        let id = rootState.tradingList[0].id
        commit('setMarket', { ...rootState, selectId: id })
    },
    //切换币种
    toggleMarket({ commit, rootState, state }, params) {
        console.log("交易对ID====>", params)
        state.currentTradingIndex = params.selectId
        state.marketInfo = rootState.tradingList[params.selectId]
        commit('setMarket', { ...rootState, ...params })
        commit('getCoinInfo', params.coinId)  //币种
        commit('tradingAskBid',params.coinId) //买卖挂单 
    },
    //订单记录切换
    toggleOrder({ commit, rootState, state }, params) {

    },
    testClick({ commit, rootState, state }, params) {
        console.log(rootState, state, commit)
    },
    // tradingAskBid({ commit,state}, params) {
    //     console.log(params,'++++我是params++++））000=======》')
    //      commit('tradingAskBid', params)
    // } 
}
const mutations = {
    //买卖挂单 websocketAskBid
    tradingAskBid(state, id) {
        let webs = new webSocket(`websocketAskBid?pairId=${id}`)
        webs.initWebSocket()
        webs.sendSocket('sendParams', res => {
            state.AskList=res.ask
            state.BidList=res.bid
            console.log("交易中心========>",res)
        })
        // let ws= new WebSocket('ws://47.94.213.6:13080/websocketAskBid?pairId=2')
        // ws.onopen = () => {
        //      // Web Socket 已连接上，使用 send() 方法发送数据
        //        ws.send('ws')
        //        console.log('数据发送中8888..++++++++买卖000000000=========》》》单')
        //    }
        //    ws.onmessage = evt => {
        //     var content=JSON.parse(evt.data)
        //     console.log(evt,'--------')
        //    }
        //    ws.onclose = function () {
        //      // 关闭 websocket
        //      console.log('连接已关闭...')
        //    }
        //     // 组件销毁时调用，中断websocket链接
        //    this.over = () => {
        //      ws.close()
        //    }
    },
    //当前所有委托记录
    listBidOrders(state, params) {
        api.listBidOrders(params).then(res => {
            console.log("listBidOrders================>", res)
            state.orderData = res.datas
        })
    },
    //当前or历史 卖单 记录
    listAskOrders(state, params) {
        api.listAskOrders(params)
    },
    //委托买单
    testClick({ commit, rootState, state }, params) {
        console.log(rootState, state, commit)
    },

    tradingBuy(state, params) {
        console.log(params)
        api.buy(params, "POST").then(res => {
            console.log(res)
        })
    },
    //委托卖单
    tradingSell(state, params) {
        console.log(params)
        api.sell(params, "POST").then(res => {
            console.log(res)
        })
    },
    //币种资产
    getAssets(state, params) {
        api.uplistByUserId(params).then(res => {
            console.log("getAssets====>", res)
            state.tradingAssets = res.datas.list[0]
        })
    },
    //撤销挂单
    canceOrder(state, params) {
        api.cancelBuy(params).then(res => {
            console.log("canceOrder====>", res)
        })
    },
    //交易记录
    orderRecord(state, params) {
        api.getUserTransactionRecord(params).then(res => {
            console.log("canceOrder====>", res)
        })
    },

    //切换币种 资料显示
    setMarket(state, params) {
        state.currentTradingIndex = params.selectId
        state.marketInfo = params.tradingList[params.selectId]
    },

    //获取币种资料
    getCoinInfo(state, id) {
        axios.get(`/COIN/coin/info/${id}`).then(res => {
            console.log(res)
            let coninInfo = res.data.datas
            state.coinInfo = res.data.datas
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
    }
