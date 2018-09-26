import api from '../../api'
import axios from 'axios'
import { stat } from 'fs';
const webSocket = api.socket
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
    //交易对切换
    initTrading({commit, rootState,rootGetters,state}, params) {
        console.log(rootState,params)
        console.log("交易对切换=====>")
        //交易对ID
        //let params = params ? 
        
        
        //当前交易对基本信息 marketInfo
        //commit('getMarketInfo',coinId)
        commit('setMarket',  { ...rootState, ...params })
        let coinId = rootState.marketInfo.id
        console.log(coinId)
        //币种资料
        commit("getCoinInfo", coinId)
        //实时订单
        commit("tradingAskBid",coinId)
        //订单记录
        commit("listBidOrders",coinId)
        //成交记录

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
    //初始化当前交易对
    initMarketInfo({ commit, rootState }, obj) {
        console.log(rootState)
        let id = rootState.tradingList[0].id
        commit('setMarket', { ...rootState, selectId: id })
    },
    //根据项目查询交易对
    
    searchCoin({ commit, rootState }, value){
    
    },
    //切换币种
    toggleMarket({ commit, rootState, state }, params) {
        // console.log("交易对ID====>", params)
        // state.currentTradingIndex = params.selectId
        // state.marketInfo = rootState.tradingList[params.selectId]
        // commit('setMarket', { ...rootState, ...params }) //基本信息
        // commit('getCoinInfo', params.coinId)  //币种切换
        // commit('tradingAskBid',params.coinId) //买卖挂单
    },
    //订单记录切换
    toggleOrder({ commit, rootState, state }, params) {

    },
    testClick({ commit, rootState, state }, params) {
        console.log(rootState, state, commit)
    }
}
const mutations = {
    //买卖挂单 websocketAskBid
    tradingAskBid(state, id) {
        new webSocket({
            url:`websocketAskBid?pairId=${id}`,
            data:'sendParams',
            success:(res)=>{
                state.AskList=res.ask
                state.BidList=res.bid
            }
        })
    },

    //当前所有委托记录
    listBidOrders(state, id) {
         let orderParams={
            type:1,
            userId:localStorage.getItem('userId'),
            pageNum:1,
            pageSize:6,
            tradeCoinPairId:id
        }
        api.listBidOrders(orderParams).then(res => {
            console.log("listBidOrders====>", res)
            state.orderList = res.datas
        })
    },
    //当前or历史 卖单 记录
    listAskOrders(state, params) {
        api.listAskOrders(params)
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
    getMarketInfo(state,id){
        console.log(id)
        api.getTradeCoinPairByCoinId({tradeCoinId:id}).then(res=>{
            console.log(res)
            state.marketInfo = res.datas
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
        console.log(params)
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
