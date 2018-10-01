import api from '../../api'
import Axios from 'axios'
export default {
  state: {
    pageLoading: false,
    tradingList: {}, //主币区交易对列表
    marketInfo: {}, // 当前交易区信息 coinId：币种id，id：交易对 id
    zoneName: '', //交易区类型
    zoneCoinId: '',
    allCoin: null,
  },
  actions: {

    //初始化交易对列表
    initTradingList({
      commit,
      state
    }, params) {
      api.getTradeInfo().then(res=>{
        if (res.datas) {
          state.allCoin = res.datas
          let datas = res.datas
          let category = datas.filter(item => item.zoneSwitch === 1)
          if (params.pair) {
            var [coinName, zoneName] = params.pair.split('_');
            let [zone] = state.allCoin.filter( item => item.zoneCoinName == zoneName);
            let [coin] = zone.list.filter( item => item.name == coinName);
            var coinId = coin.id;
            state.marketInfo = coin;
            state.zoneName = zone.zoneCoinName;
            state.zoneCoinId = zone.zoneCoinId;
          } else {
            var coinId = category[0].id;
            state.zoneName = res.datas[0].zoneName
            state.zoneCoinId = res.datas[0].zoneCoinId;
          }
          params.callback && params.callback();
          // commit('toggleTrading', {
          //   id: coinId,
          //   callback: params.callback
          // })
        }
      });
    },
    //收藏币种
    favoriteCoin({
      commit,
      state
    }, params) {
      api.collect(params).then(res => {
        commit('toggleTrading', {
          id: params.coinId
        }) //刷新列表
      })
    },
    toggleTrading({
      commit,
      state
    }, id) {
      commit('toggleTrading', {
        id
      }) //刷新列表
    },
    setZone({
      commit,
      state
    }, zone) {
      state.zoneName = zone.zoneCoinName;
      state.zoneCoinId = zone.zoneCoinId;
    },
  },

  getters: {
    //搜索过滤币种
    filterCoin: (state, getters) => (value) => {
      console.log(getters.tradingList)
      return state.tradingList.filter(item => item.name.indexOf(value) != '-1')
    },
    tradingList(state) {
      return state.tradingList
    },
    getUserInfo(state) {
      return 'sss'
    },
  },
  mutations: {
    showLoading(state) {
      state.pageLoading = true
    },
    searchCoin(state, arg) {},
    hideLoading(state) {
      state.pageLoading = false
    },
    setTradingList(state, tradingList) {
      state.tradingList = tradingList
    },
    setToken(state) {
      state.userToken = localStorage.getItem('token')
    },
    checkLogin(state, cb) {
      if (!localStorage.getItem('token')) {
        cb()
      } else {
        cb()
      }
    },

    //交易对切换
    toggleTrading(state, params) {

      api.getTradeInfoByZone({
        id: params.id
      }).then(res => {
        if (res.datas.list.length > 0) {
          state.tradingList = res.datas.list;
          state.marketInfo = res.datas.list[0];
          params.callback && params.callback();
        }
      })
    },
    //搜索币种
    searchTradingCoin(state, params) {
      console.log("state")
    }

  }
}