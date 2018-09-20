import api from '../../api'
import Axios from 'axios';
export default {
  state: {
    pageLoading: false,
    isMember: true,
    tradingList: {}, //主币区交易对列表
    tradingCategory: [], //主币分类
    currentCategoryIndex: 1,
    marketInfo:{},
    currentTradingIndex:0,
  },
  actions: {
    //初始化交易对列表
    initTrading({commit,state}, params) {
      api.classificationList({}).then(res => {
        if (res.datas) {
          commit('setTradingCategory', res.datas)
          return res.datas
        }
      }).then(res => {
        console.log(res)
        commit('toggleTrading',res[0].id)
      })
    },
    //切换币种
    toggleMarket({commit,state}, params){
        console.log("交易对ID====>",params)
        commit('setMarket',params)
        commit('getCoinInfo',params.selectId)
      }
  },
  mutations: {
    showLoading(state) {
      state.pageLoading = true
    },

    hideLoading(state) {
      state.pageLoading = false
    },
    //设置主币分类
    setTradingCategory(state, tradingCategory) {
      state.tradingCategory = tradingCategory
      state.currentCategoryIndex = tradingCategory[0].id
    },

    toggleTrading(state,id){
      api.getTradeInfoByZone({id:id}).then(res=>{
        console.log(res)
        state.tradingList = res.datas.list
        state.currentCategoryIndex = id
        state.marketInfo = res.datas.list[id]
      })
    },


    getTradingList(state, params) {
      console.log("getTradingList==>")
      return api.getTradeInfoByZone(params)
        .then(res => {
          console.log("getTradingList==>", res)
          state.tradingList = res.datas
          state.currentCategoryIndex = res.datas[0].id
        })
    },

    searchTradingCoin(state, params) {
      console.log("state")
    },
  
    //收藏币种
    favoriteCoin(state, params) {
      api.collect(params).then(res => {
        console.log(res.message)
      })
    },
    //切换币种 资料显示
    setMarket(state,params){
      state.currentTradingIndex = params.selectId
      state.marketInfo = state.tradingList[params.selectId]
    },
    //获取币种资料
    getCoinInfo(state,id){
      Axios.get(`/COIN/info/${id}`).then(res=>{
        console.log(res)
        //state.coinInfo = res.datas
      })
    }

  }
}
