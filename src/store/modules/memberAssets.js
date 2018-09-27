import api from '../../api'
import axios from 'axios'
const webSocket = api.socket
const state = {
    myAssets:null,
}
const getters = {}
const actions = {
    allAssets({ commit, state }, params) {
        commit("allAssets", params)
    },
}
const mutations = {
    //总资产列表
    allAssets(state,params){
        api.uplistByUserId({pageNum:1,pageSize:90,collet:0})
        .then(res=>{
            console.log(res)
            state.myAssets = res.datas
        })
    },
    //充币提币记录
    coinRecord(state,params){
      api.listByUserId({pageNum:1,pageSize:12})
      .then(res=>{

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
