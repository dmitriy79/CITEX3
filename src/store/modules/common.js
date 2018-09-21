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
          let category  = res.datas
          category.push({
            zoneName:'自选',
            id:-1
          })
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
      commit('getCoinInfo',params.coinId)
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

    //交易对切换
    toggleTrading(state,id){
      console.log(id)
      api.getTradeInfoByZone({id:id}).then(res=>{
        console.log(res)
        state.tradingList = res.datas.list
        state.currentCategoryIndex = id
        state.marketInfo = res.datas.list[id]
      })
    },

    //搜索币种
    searchTradingCoin(state, params) {
      console.log("state")
    }

  }
}
