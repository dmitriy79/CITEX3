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
    currentCoinId:2,//当前币种id
    zoneName:'',//交易区类型
    zoneId:'',//交易区id
    tradeId:'',//交易对id
  },
  actions: {
 
    //初始化交易对列表
    initTradingList({commit,state}, params) {
      api.classificationList({}).then(res => {
        // console.log(res,'交易列表=++++++===》')
        if (res.datas) {
          let datas  = res.datas
          let category=datas.filter(item => item.zoneSwitch===1 )
          state.zoneName=res.datas[0].zoneName
          state.zoneId=res.datas[0].tradeCoinId
           console.log(category,'state.zoneName+++++++_____________3')
          category.push({
            zoneName:'自选',
            id:-1
          })
          commit('setTradingCategory', category)
          return category
        }
      }).then(res => {
       console.log(res,'toggleTrading+++=00099999999--------------')
        commit('toggleTrading',res[0].id)
      })
    },
    //收藏币种
    favoriteCoin({commit,state}, params) {
      api.collect(params).then(res => {
        commit('toggleTrading',state.currentCategoryIndex) //刷新列表
      })
    },
    toggleTrading({commit,state}, id) {
      commit('toggleTrading',id) //刷新列表
    },
    timestampToTime({commit,state}, timestamp) {
        var date = new Date(timestamp)
        var Y = date.getFullYear() + '-'
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
        var D = date.getDate() + ' '
        return Y+M+D
    }
  },
  
  getters:{
   //搜索过滤币种
    filterCoin:(state,getters) => (value) => {
      console.log(getters.tradingList)
      return state.tradingList.filter(item => item.name.indexOf(value)!= '-1')
    },
    tradingList(state){
      return state.tradingList
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
      
      api.getTradeInfoByZone({id:id}).then(res=>{
        if(res.datas.list.length>0){
          state.tradingList = res.datas.list
          state.marketInfo = res.datas.list[0]
        state.currentCoinId=res.datas.list[0].coinId
        state.tradeId=res.datas.list[0].id
      
        }
       console.log(state.tradingList,'---------.......>>>>>>>>>切换交易对')
        state.currentCategoryIndex = id
      })
    },
    //搜索币种
    searchTradingCoin(state, params) {
      console.log("state")
    }

  }
}
