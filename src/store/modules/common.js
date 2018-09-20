import api from '../../api'
export default {
  state: {
    pageLoading: false,
    isMember: true,
    tradingList: {}, //主币区交易对列表
    tradingCategory: [], //主币分类
    tradingCurrentIndex: 1,
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
      state.tradingCurrentIndex = tradingCategory[0].id
    },

    toggleTrading(state,id){
      api.getTradeInfoByZone({id:id}).then(res=>{
        console.log(res)
        state.tradingList = res.datas.list
        state.tradingCurrentIndex = id
      })
    },


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
    },

    //收藏币种
    favoriteCoin(state, params) {
      api.collect(params).then(res => {
        console.log(res.message)
      })
    },
    //币种资料


  }
}
