import api from '../../api'
import axios from 'axios'
let webSocket = api.socket
const state = {
  banner: [], //banner
  official: [], //公告
  dealOrder: {}, //涨跌幅排行
  coinList: [], //首页置顶展示
  tradingList: {}, //主币区
  category: [], //交易对列表
  tradingCurrentIndex: null,
  officialIndex: 0,
}
const getters = {
  //主币区
  tradingList(state) {
    return state.tradingList
  }
}
const actions = {
  // 交易对
  getTrading({commit,state}, obj) {
    commit("getTrading", obj)
  },
  initHome({commit,state}, obj) {
    commit("initHomePage", obj)
  },
  officaliCycle({commit,state}, obj) {
    commit("officaliCycle", obj)
  },
  toggleDeal({commit,state}, obj) {
    commit("toggleDeal", obj)
  },
  // getTrading({commit,state}, obj) {
  //   commit("getTrading", obj)
  // },
}
const mutations = {
  //币种分类
  getCategory(state, obj) {},
  //切换交易对
  toggleTrading(state, obj) {},
  //获取交易对列表
  getTrading(state, obj) {
    api.getTradeInfoByZone({
      id: obj
    }).then(res => {
      state.tradingList = res.datas
      state.tradingCurrentIndex = obj
    })
  },
  toggleDeal(e) {
    console.log(e)
  },
  officaliCycle(state, obj) {
    var currindex = 0
    let rod = setInterval(() => {
      let i = currindex++
      state.officialIndex = i
      if (i == state.official.length - 1) {
        currindex = 0
      }
    }, 4000)
  },
  
  setMarketInfo(state,obj){
    
  },

  //初始化首页
  initHomePage(state, obj) {
    let rankList = new webSocket({
      url:'websocketRankingList',
      data:'',
      success:(res)=>{
        console.log(res)
        let dealOrder = {}
        dealOrder.fall = JSON.parse(res.fall)
        dealOrder.up = JSON.parse(res.up)
        state.dealOrder = dealOrder
      }
    })
    let indexData = [
      api.listByType({type: 1}), //banner
      api.list({pageNum: 1,pageSize: 10}), //公告列表
      api.getTopTradeCoinPairs({}) //首页排行
    ]
    axios.all(indexData)
      .then(res => {
        console.log(res,'首页list========》》》》')
        state.banner = res[0].datas
        state.official = res[1].datas.list
        state.coinList = res[2].datas
        return res
      }).catch(error => {
        console.log("error===>", error)
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
