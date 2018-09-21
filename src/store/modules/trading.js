import api from '../../api'
import axios from 'axios'
const state ={
    buyParams:{},          //buy参数
    sellParams:{},         //sell参数
    tradingAssets:{},      //当前交易对资金
    currentTradingIndex:0, //交易对列表当前选择项
    coinInfo:{},
    marketInfo:{},         //当前选择的交易对
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
        console.log(rootState)
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
}
const mutations = {
    tradingBuy(state,params){
        console.log(params.price)
        api.buy({...params},true).then(res=>{
            console.log(res)
        })
    },
    tradingSell(state,params){
        api.sell(params,true).then(res=>{
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
        console.log(params)
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
  