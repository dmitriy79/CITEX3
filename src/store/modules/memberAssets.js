import api from '../../api'
import axios from 'axios'
import '../../utils/filter'
const webSocket = api.socket
const state = {
    myAssets:null,
    fullcoinList:[],//充币记录
    carrycoinList:[],//提币记录
    fullcoinTotal:0,
    carrycoinTotal:0,
    myAssetsTotal:0,//我的资产总条数

}
const getters = {}
const actions = {
    //我的资产
    allAssets({ commit, state }, params) {
        commit("allAssets", params)
    },
    //充币记录
    fullcoinRecord({ commit, state }, params){
        commit("fullcoinRecord", params)
    },
    //提币记录
    carrycoinRecord({ commit, state }, params){
        commit("carrycoinRecord", params)
    }
}
const mutations = {
    //总资产列表
    allAssets(state,params){
        api.userPropertylistByUserId({pageNum:params,pageSize:14,collet:0})
        .then(res=>{
             state.myAssets = res.datas
             state.myAssetsTotal=res.datas.total
        })
    },
    //充币记录
    fullcoinRecord(state,params){
      api.rrlistByUserId({pageNum:params,pageSize:12})
      .then(res=>{
        res.datas.list.forEach(element=>{
            // element.createTime = element.createTime| date-format
            if(element.state==0){
                element.state='待确认'
            }
            else if(element.state==1){
                element.state='充值成功'
            }
            else{
                element.state='无主'
            }
        })
        state.fullcoinTotal=res.datas.total
        state.fullcoinList=res.datas.list

      })
    },
    //提币记录
    carrycoinRecord(state,params){
        api.wrlistByUserIdTwo({pageNum:params,pageSize:12})
        .then(res=>{
            res.datas.list.forEach(element=>{
                // element.createTime = element.createTime| date-format
                if(element.status==-1){
                    element.status='驳回' 
                }
                if(element.status==0||element.status==1){
                    element.status='审核中'
                }
                else if(element.status==2){
                    element.status='提币成功'
                }
                else{
                    element.status='已撤销'
                }
            })
          
            state.carrycoinTotal=res.datas.total
            state.carrycoinList=res.datas.list
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
