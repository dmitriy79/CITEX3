import api from '../../api'
import axios from 'axios'
let webSocket = api.socket
const state ={
    buyParams:{},          //buy参数
    sellParams:{},         //sell参数
    tradingAssets:{},      //当前交易对资金
    currentTradingIndex:0, //交易对列表当前选择项
    coinInfo:{},
    marketInfo:{},         //当前选择的交易对
    AskBidList:[], //买单
}
const getters = {

}
const actions = {
    tradingBuy({commit,state}, obj) {
        
        commit("tradingBuy", obj)
      },
    tradingSell({commit,state}, obj) {
        commit("tradingSell", obj)
    },
    initMarketInfo({commit,rootState},obj){
        console.log(rootState,'rootState++++0000')
        let id = rootState.tradingList[0].id
        commit('setMarket',{...rootState,selectId:id})
    },
    //切换币种
    toggleMarket({commit,rootState,state}, params){
        console.log("交易对ID====>",params)
        state.currentTradingIndex = params.selectId
        state.marketInfo = rootState.tradingList[params.selectId]
        commit('setMarket',{...rootState,...params})
        commit('getCoinInfo',params.coinId)
      },
      
      testClick({commit,rootState,state},params){
          console.log(rootState,state,commit)
      },
      tradingAskBid({commit,state}, obj) {
        commit("tradingAskBid", obj)
      },
     
}
const mutations = {
     //买卖挂单 websocketAskBid
     tradingAskBid(state, obj){
        let webs = new webSocket("websocketAskBid")
        webs.initWebSocket()
        let sendParams = {
            pairId: 1,
           
          }
        webs.sendSocket(sendParams, res => {
          console.log(res,'+++我是交易中心3333333333')
         
        })
      },
    tradingBuy(state,params){
        console.log(params)
        api.buy(params,"POST").then(res=>{
            console.log(res)
        })
    },
    tradingSell(state,params){
        console.log(params)
        api.sell(params,"POST").then(res=>{
            console.log(res)
        })
    },
    //币种资产
    getAssets(state,params){
        api.uplistByUserId(params).then(res=>{
            console.log("getAssets====>",res)
            state.tradingAssets = res.datas.list[0]
        })
    },
    //撤销挂单
    canceOrder(state,params){
        api.cancelBuy(params).then(res => {
            console.log("canceOrder====>",res)
        })
    },
    //交易记录
    orderRecord(state,params){
        api.getUserTransactionRecord(params).then(res => {
            console.log("canceOrder====>",res)
        })
    },
    
    //切换币种 资料显示
    setMarket(state,params){
       
        state.currentTradingIndex = params.selectId
        state.marketInfo = params.tradingList[params.selectId]
    },

    //获取币种资料
    getCoinInfo(state,id){
        axios.get(`/COIN/coin/info/${id}`).then(res=>{
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
  