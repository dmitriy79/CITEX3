import api from '../../api'
import axios from 'axios'
import { stat } from 'fs';
const webSocket = api.socket
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
    historyList:[],
    currentPrcie:'',//交易区当前价格
    klineHistory:[],
    step:'',
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
         //用户币种可用资金
        //commit('getAssets',)
        //币种资料
        commit("getCoinInfo", coinId)
        //实时订单
        commit("tradingAskBid",coinId)
        //订单记录
        commit("listBidOrders",coinId)
        //成交记录

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
    //k线图
    getKline({ commit, rootState, state }, params){
        // console.log(rootState.currentCoinId,'我是lk线图===============》')
        state.step=params.step
        commit('getKline',{currentCoinId:rootState.currentCoinId,step:params.step})  //币种
    },
  
    initMarketInfo({ commit,state, rootState }, obj) {
        // let id = rootState.tradingList[0].id
        // state.currentCoinName=rootState.tradingList[0].name
        // commit('initMarketInfo', rootState)
        // console.log(rootState.tradingList,'wo啥时候说实话====================================》')
        // state.currentTradingIndex=rootState.tradingList[0].id
        // commit('setMarket', { ...rootState, selectId: id })
    },
    //根据项目查询交易对
    
    searchCoin({ commit, rootState }, value){
    
    },
    //切换币种
    toggleMarket({ commit, rootState, state }, params) {
        console.log("交易对ID====>", state,rootState,params)
        if(params){
            state.currentIndex=params.selectId
            state.currentTradingIndex = params.selectId
            state.marketInfo = rootState.tradingList[params.selectId]
            rootState.currentCoinId=params.coinId
            
            // console.log(state.marketInfo,'=============>state.marketInfo')
            commit('setMarket', { ...rootState, ...params })
            commit('getCoinInfo', params.coinId)  //币种
            commit('tradingAskBid',params.coinId) //买卖挂单
            commit('getDealOrders',params.coinId) //成交历史
            commit('getKline',{currentCoinId:params.coinId,step:state.step}) //成交历史
            
        }
       
    },
    togglePrice({ commit, rootState, state }, params){
       state.currentPrcie=params.currentPrice
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
        new webSocket({
            url:`websocketAskBid?pairId=${id}`,
            data:'sendParams',
            success:(res)=>{
                state.AskList=res.ask
                state.BidList=res.bid
            }
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
    getKline(state, params){
        var resolution=params.step
        var currentCoinId=params.currentCoinId
        api.getKDatas2({step:resolution,tradeCoinPariId:currentCoinId}).then(res=>{
            var kline=[]
            if(res.datas.list.length){
                res.datas.list.forEach(function(bar) {
                    kline.push({
                    time: Number(bar.endTime),
                    open: Number(bar.openPrice),
                    close: Number(bar.closePrice),
                    high: Number(bar.topPrice),
                    low: Number(bar.floorPrice),
                    volume: Number(bar.total)
                    });
                });
            }
            state.klineHistory=kline

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
        console.log(params,'0099988888===============>>>>>>')
        api.uplistByUserId({pageNum:1,pageSize:10,coinId:params}).then(res => {
            if(res.status==200){
                if(res.datas.list.length>0){
                    state.tradingAssets = res.datas.list[0]
                }
            }
           console.log("getAssets============>", res)
           
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
        console.log(params)
        state.currentTradingIndex = params.selectId
        state.marketInfo = params.tradingList[params.selectId]
    },
    initMarketInfo(state,params){
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
