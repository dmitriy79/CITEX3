import api from '../../api'
import Axios from 'axios'
const webSocket = api.socket
function guid() {    
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {     
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);       
        return v.toString(16);   
    });
}
function coinStarFilter(data) {
  let token = localStorage.getItem('token');
  if (!token) {
    let star = localStorage.getItem('star') || '[]';
    star = JSON.parse(star);
    data.map(zone => {
      zone.list.map(coin => {
        let index = star.findIndex(item => item.id == coin.id );
        if (index >= 0) {
          coin.collect = true;
        }
      });
    });
  }
  return data;
}
export default {
  state: {
    pageLoading: false,
    tradingList: {}, //主币区交易对列表
    marketInfo: {}, // 当前交易区信息 coinId：币种id，id：交易对 id
    zoneName: '', //交易区类型
    zoneCoinId: '',
    isCollect:false,
    allCoin: null,
     coinList:'',//排序之后的交易区列表t:'',//排序之后的交易区列表
     isReload:false,//交易页面是否刷新
  },
  actions: {

    //初始化交易对列表
    initTradingList({
      commit,
      state
    }, params) {
      let inited = false;
      new webSocket({
        url: `websocketDealPrice?uuid=${guid()}`,
        data: 'sendParams',
        success: (datas) => {
         // console.log(datas,'websocketDealPrice====>>>>>>>>>>33333==============')
          datas.sort((a,b)=>{
            return a.zoneSort-b.zoneSort
          })
          let price_down=sessionStorage.getItem("price_down")
          let price_up=sessionStorage.getItem("price_up")
          
          //  if(price_down==null&&price_up==null){
            for (var i=0,len=datas.length; i<len; i++)
            {
            datas[i].list.sort((a,b)=>{
             
              return a.sortId-b.sortId
            })
            }
          //  }
           if(price_down){
            for (var i=0,len=datas.length; i<len; i++)
            {
            datas[i].list.sort((a,b)=>{
 
              return b.deal_price-a.deal_price
            })
            }
           }
          
           if(price_up){
      
            for (var i=0,len=datas.length; i<len; i++)
            {
            datas[i].list.sort((a,b)=>{
         
              return a.deal_price-b.deal_price
            })
            }
           }
         
          state.allCoin = coinStarFilter(datas);
          let pair = location.hash.split('/transaction')[1];
          if (pair) {
            pair = pair.replace('/', '');
            var [coinName, zoneName] = pair.split('_');

            let [zone] = state.allCoin.filter( item => item.zoneCoinName == zoneName);
            let [coin] = zone.list.filter( item => item.name == coinName);
            state.marketInfo = coin;
            state.zoneName = zone.zoneCoinName;
            state.zoneCoinId = zone.zoneCoinId;
          } else {
            
            if(price_down==null||price_up==null){
              state.marketInfo = datas[0].list[0];
              state.zoneName = datas[0].zoneCoinName;
              state.zoneCoinId = datas[0].zoneCoinId;
            }
            else{
              return
            }
          }
          if (!inited) {
            inited = true;
            params.callback && params.callback();
          }
        },
        fail: (res) => {
        }
      })
    },
    //获取点击排序
    getcoinList({
      commit,
      rootState,
      state
  }, params) {

      state.coinList = params.coinList
  },

  
    //收藏币种
    favoriteCoin({
      commit,
      state
    }, params) {
      let token = localStorage.getItem('token');
      const { trade_coin_pair_id, collect } = params;
      if (token) {
        
        if (collect == '1') {
          // 收藏逻辑
          let coin = null;
          state.allCoin.map(zone => {
            zone.list.map(item => {
              if (item.id == trade_coin_pair_id) {
                coin = item;
                item.collect = true;
              }
            });
          });
          state.allCoin = JSON.parse(JSON.stringify(state.allCoin));
          
        }

        api.collect(params).then(res => {
          commit('toggleTrading', { id: trade_coin_pair_id }) //刷新列表
        })
      } else {
        let star = localStorage.getItem('star') || '[]';
        star = JSON.parse(star);
        if (collect == '1') {
          // 收藏逻辑
          let coin = null;
          state.allCoin.map(zone => {
            zone.list.map(item => {
              if (item.id == trade_coin_pair_id) {
                coin = item;
                item.collect = true;
              }
            });
          });
          state.allCoin = JSON.parse(JSON.stringify(state.allCoin));
          star.push(coin);
          localStorage.setItem('star', JSON.stringify(star));
        } else {
          // 取消收藏逻辑
          let index = star.findIndex( item => item.id == trade_coin_pair_id);
          
          star.splice(index, 1);
          state.allCoin.map(zone => {
            zone.list.map(item => {
              if (item.id == trade_coin_pair_id) {
                item.collect = false;
              }
            });
          });
          localStorage.setItem('star', JSON.stringify(star));
        }
      }
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
      api.getTradeInfo({type:1}).then(res=>{
        if (res.datas) {
          state.allCoin = res.datas
        }
      });
    },
    //搜索币种
    searchTradingCoin(state, params) {
      
    }

  }
}