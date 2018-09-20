import api from '../../api'
import axios from 'axios'
const state ={
    buyParams:{},         //buy参数
    sellParams:{},        //sell参数
    tradingAssets:{},     //当前交易对资金
    currentTradingIndex:0, //交易对列表当前选择项
}
const getters={

}
const actions={
    tradingBuy({commit,state}, obj) {
        commit("tradingBuy", obj)
      },
    tradingSell({commit,state}, obj) {
        commit("tradingSell", obj)
    },
    getAssets({commit,state}, obj) {
        commit("getAssets", obj)
    },
}
const mutations={
    tradingBuy(state,params){
        api.buy(params,true).then(res=>{
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
    //切换币种
    toggleMarket(state,params){
        console.log("交易对ID====>",params)
        state.currentTradingIndex = params.selectId
        
    },
    //切换到收藏
    toggleToFav(){
        
    }
    
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  