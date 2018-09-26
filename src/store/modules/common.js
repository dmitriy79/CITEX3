import api from '../../api'
import Axios from 'axios'
export default {
  state: {
    pageLoading: false,
    isMember: true,
    tradingList: {}, //主币区交易对列表
    tradingCategory: [], //主币分类
    currentCategoryIndex: 1,
    marketInfo:{},
    currentTradingIndex:0,
    currentCoinId:2,
    zoneName:'',//交易区类型
  },
  actions: {
    //初始化交易对列表
    initTrading({commit,state}, params) {
      api.classificationList({}).then(res => {
        // console.log(res,'交易列表=++++++===》')
        if (res.datas) {
          let category  = res.datas
          state.zoneName=res.datas[0].zoneName
           console.log(state.zoneName,'state.zoneName+++++++_____________3')
          category.push({
            zoneName:'自选',
            id:-1
          })
          commit('setTradingCategory', res.datas)
          return res.datas
        }
      }).then(res => {
        // console.log(res,'toggleTrading+++=--------------')
        commit('toggleTrading',res[0].id)
      })
    },
 
    //收藏币种
    favoriteCoin({commit,state}, params) {
      api.collect(params).then(res => {
        commit('toggleTrading',state.currentCategoryIndex) //刷新列表
      })
    },

    timestampToTime({commit,state}, timestamp) {
        var date = new Date(timestamp)
        var Y = date.getFullYear() + '-'
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
        var D = date.getDate() + ' '
        return Y+M+D
    }
  },
  
  getter:{
   //搜索过滤币种
    filterCoin:(state) => (value) => {
      return state.tradingList.filter(item => item.name.indexOf(value)!= '-1')
    },
    getUserInfo(state){
      return 'sss'
    },
  },
  mutations: {
    showLoading(state) {
      state.pageLoading = true
    },
    searchCoin(state,arg){
      // if(arg.value != ''){
        
      // }
    },
    hideLoading(state) {
      state.pageLoading = false
    },
    setTradingList(state,tradingList){
      state.tradingList = tradingList
    },
    //设置主币分类
    setTradingCategory(state, tradingCategory) {
      // console.log(tradingCategory,'11111111111交易区+++++')
      state.tradingCategory = tradingCategory
      // state.currentCategoryIndex = tradingCategory[0].id
      
    },
    setToken(state){
      state.userToken = localStorage.getItem('token')
    },
    checkLogin(state,cb){
      if(!localStorage.getItem('token')){
        cb()
      }else{
        cb()
      }
    },
    //交易对切换
    toggleTrading(state,id){
      // console.log(id,'99999999+++++++')
      api.getTradeInfoByZone({id:id}).then(res=>{
        console.log(res,'交易对切换=========》》》》》》》')
        if(res.datas.list.length>0){
          state.tradingList = res.datas.list
          state.marketInfo = res.datas.list[0]
        state.currentCoinId=res.datas.list[0].id
        }
       
        state.currentCategoryIndex = id
        
        // console.log(res.datas.list[0].id,'888888+++++++')

        // state.tradingList = res.datas.list
        // console.log(res,'res------')
        // state.currentTradingIndex=res.datas.list[0].id
        // state.currentCategoryIndex = id
        // state.marketInfo = res.datas.list[id]
        // console.log( state.tradingList , state.marketInfo,'state.marketInfo)))++++(99')
      })

     
    },

    //搜索币种
    searchTradingCoin(state, params) {
      console.log("state")
    }

  }
}
