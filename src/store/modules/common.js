import api from '../../api'
export default {
  state: {
    pageLoading: false,
    isMember: true,
    tradingList: {}, //主币区交易对列表
    tradingCategory: [], //主币
    tradingCurrentIndex: null,
  },
  actions: {
    //初始化交易对列表
    initTrading({
      commit,
      state
    }, params) {
      commit('getTradingCategory', arg)
      commit('getTradingList', params || state.tradingCategory[0].id)
    },
    isNumber({
      commit,
      state
    }, value) {
      commit('isNumber', arg)
    }
  },
  mutations: {
    showLoading(state) {
      state.pageLoading = true
    },
    hideLoading(state) {
      state.pageLoading = false
    },
    //获取主币种
    getTradingCategory(state) {
      console.log("classificationList==>")
      return api.classificationList({})
        .then(res => {
          console.log("classificationList==>", res)
          state.tradingCategory = res.data
        })
    },
    //http获取交易对列表
    getTradingList(state, params) {
      console.log("getTradingList==>")
      return api.getTradeInfoByZone(params)
        .then(res => {
          console.log("getTradingList==>", res)
          state.tradingList = res.datas
          state.tradingCurrentIndex = res.datas[0].id
        })
    },
    
    searchTradingCoin(state, params) {
      console.log("state")
    }
  }
}
