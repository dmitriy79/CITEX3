import api from '../../api'
import axios from 'axios'
const state ={
    buyParams:{},
    sellParams:{},
    tradingAssets:{}
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
            console.log(res)
            state.tradingAssets = res.datas.list[0]
        })
    },
    
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  