import api from '../../api'
import axios from 'axios'
let webSocket = api.socket
const state = {
    buyParams: {}, //buy参数
    sellParams: {}, //sell参数
    tradingAssets: {}, //当前交易对资金
    //currentTradingIndex: 0, //交易对列表当前选择项
    currentCoinName:'',//当前币种名字
    coinInfo: {}, //币种资料
    marketInfo: {}, //当前选择的交易对
    orderData: {}, //订单委托/历史记录
    AskList: [], //卖单
    BidList:[],//买单 
    currentIndex:0,
    historyList:[]
}
const getters = {

}
const actions = {
    //initTrading
    initTradings({ commit, state, rootState }, arg) {
        setTimeout(()=>{
            console.log(rootState.tradingList,'888888==========99999=====777777')
            commit("initMarketInfo",rootState.tradingList)
        },500)
       
        //交易对基本信息
        //订单记录
        //币种资料
        commit("getCoinInfo", rootState.currentCoinId)//初始化交易员币种资料
        commit("tradingAskBid", rootState.currentCoinId)//初始化交易页面买卖单交易
        commit("initMarketInfo",rootState)
        commit("getDealOrders", rootState.currentCoinId)//初始化交易历史
       
        
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

  
    initMarketInfo({ commit,state, rootState }, obj) {
       
        // let id = rootState.tradingList[0].id
        // state.currentCoinName=rootState.tradingList[0].name
        // commit('initMarketInfo', rootState)
        console.log(rootState.tradingList,'wo啥时候说实话====================================》')
        // state.currentTradingIndex=rootState.tradingList[0].id
        // commit('setMarket', { ...rootState, selectId: id })
    },
    //切换币种
    toggleMarket({ commit, rootState, state }, params) {
        console.log("交易对ID====>", rootState.tradingList,params)
        if(params){
            state.currentIndex=params.selectId
            state.currentTradingIndex = params.selectId
            state.marketInfo = rootState.tradingList[params.selectId]
            rootState.currentCoinId=params.coinId
            console.log(state.marketInfo,'=============>state.marketInfo')
            commit('setMarket', { ...rootState, ...params })
            commit('getCoinInfo', params.coinId)  //币种
            commit('tradingAskBid',params.coinId) //买卖挂单
            commit('getDealOrders',params.coinId) //成交历史
             
        }
       
    },
    togglePrice(){

    },
    //订单记录切换
    toggleOrder({ commit, rootState, state }, params) {

    },
    testClick({ commit, rootState, state }, params) {
        // console.log(rootState, state, commit)
    },
    tradingAskBid({ commit,state}, obj) {
        // console.log(obj,'++++我是params++++））000=======》')
         commit('tradingAskBid', obj)
    } ,
   
}
const mutations = {
    timestampToTime_(state,timestamp) {
        var date = new Date(timestamp);
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;  
        second = second < 10 ? ('0' + second) : second; 
        return h+':'+minute+':'+second; 
    },
    //买卖挂单 websocketAskBid
    tradingAskBid(state, id) {
        // console.log(state,'0999888======.......')
        let webs = new webSocket(`websocketAskBid?pairId=${id}`)
        webs.initWebSocket()
        webs.sendSocket('sendParams', res => {
            state.AskList=res.ask
            state.BidList=res.bid
            // console.log("交易中心========>",res)
        })

    },
    //成交历史
    getDealOrders(state,id){
        
        let webs = new webSocket(`websocketSSCJ?pairId=${id}`)
        webs.initWebSocket()
        webs.sendSocket('sendParams', res => {
            if(res.length){
                res.forEach(element => {
                    var date = new Date(parseInt(element.dealTime));
                    var h = date.getHours();
                    h = h < 10 ? ('0' + h) : h;
                    var minute = date.getMinutes();
                    var second = date.getSeconds();
                    minute = minute < 10 ? ('0' + minute) : minute;  
                    second = second < 10 ? ('0' + second) : second; 
                    element.dealTime=h+':'+minute+':'+second; 
                  });
            }
        
          state.historyList=res
            console.log("成交历史========>",res)
        })
    },
    //k线历史数据

    //当前所有委托记录
    listBidOrders(state, params) {
        api.listBidOrders(params).then(res => {
            // console.log("listBidOrders================>", res)
            state.orderData = res.datas
        })
    },
    //当前or历史 卖单 记录
    listAskOrders(state, params) {
        api.listAskOrders(params)
    },
    //委托买单
    testClick({ commit, rootState, state }, params) {
        // console.log(rootState, state, commit)
    },

    tradingBuy(state, params) {
        // console.log(params)
        api.buy(params, "POST").then(res => {
            // console.log(res)
        })
    },
    //委托卖单
    tradingSell(state, params) {
        // console.log(params)
        api.sell(params, "POST").then(res => {
            // console.log(res)
        })
    },
    //币种资产
    getAssets(state, params) {
        api.uplistByUserId(params).then(res => {
            // console.log("getAssets====>", res)
            state.tradingAssets = res.datas.list[0]
        })
    },
    //撤销挂单
    canceOrder(state, params) {
        api.cancelBuy(params).then(res => {
            // console.log("canceOrder====>", res)
        })
    },
    //交易记录
    orderRecord(state, params) {
        api.getUserTransactionRecord(params).then(res => {
            // console.log("canceOrder====>", res)
        })
    },

    //切换币种 资料显示
    setMarket(state, params) {
        state.currentTradingIndex = params.selectId
        state.marketInfo = params.tradingList[params.selectId]
    },
    initMarketInfo(state,params){
        console.log(params,'000----------')
        state.marketInfo=params[0]
    },
    //获取币种资料
    getCoinInfo(state, id) {
       // console.log(params.currentCoinId,'币种idd_________________________-d++++++')
       
        axios.get(`/COIN/coin/info/${id}`).then(res => {
            // console.log(res)
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
