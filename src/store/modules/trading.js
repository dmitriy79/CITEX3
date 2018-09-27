import api from '../../api'
import axios from 'axios'
let webSocket = api.socket
const state = {
    buyParams: {}, //buy参数
    sellParams: {}, //sell参数
    tradingAssets: {}, //当前交易对资金
    //currentTradingIndex: 0, //交易对列表当前选择项
    currentCoinName:'',//当前币种名字
    coinInfo: {}, //币种资料
    marketInfo: {}, //当前选择的交易对
    orderData: {}, //订单委托/历史记录
    AskList: [], //卖单
    BidList:[],//买单 
    currentIndex:0,
    historyList:[],
    currentPrcie:'',//交易区当前价格
    klineHistory:[],
    klineCurrent:{},
    step:'',
    curbuyPrice:'',
    cursellPrice:''
}
const getters = {

}
const actions = {
    //initTrading
    initTradings({ commit, state, rootState }, arg) {
        
        setTimeout(()=>{
            // console.log(arg,'888888==========99999=====777777')
            commit("initMarketInfo",rootState.tradingList)
            commit("getAssets",{currentCoinId:rootState.currentCoinId,zoneId:rootState.zoneId})
            
            commit("tradingAskBid", rootState.tradeId)//初始化交易页面买卖单交易
            commit("getDealOrders", rootState.tradeId)//初始化交易历史
        },1500)
        console.log(rootState,rootState.tradeId,'=======9999999....;;;;;;;')
        //交易对基本信息
        //订单记录
        //币种资料
        commit("getCoinInfo", rootState.currentCoinId)//初始化交易员币种资料
      
        commit("initMarketInfo",rootState)
       
       
        
        //成交记录
        //实时订单
        //用户资金
        //深度图
        //k线图
    },
    tradingBuy({ commit, state }, obj) {
        commit("tradingBuy", obj)
    },
    tradingSell({ commit, state }, obj) {
        commit("tradingSell", obj)
    },
    //订单记录
    listBidOrders({ commit, state }, obj) {
        commit('listBidOrders', obj)
    },
    //k线图
    getKline({ commit, rootState, state }, params){
        // console.log(rootState.currentCoinId,'我是lk线图===============》')
        state.step=params.step
        commit('getKline',{currentCoinId:rootState.tradeId,step:params.step})  //币种
    },
  
    websocketKline({ commit, rootState, state }, params){
        // console.log(rootState.currentCoinId,'我是lk线图===============》')
        state.step=params.step
        commit('websocketKline',{currentCoinId:rootState.tradeId,step:params.step})  //币种
    },

    initMarketInfo({ commit,state, rootState }, obj) {
       
        // let id = rootState.tradingList[0].id
        // state.currentCoinName=rootState.tradingList[0].name
        // commit('initMarketInfo', rootState)
        // console.log(rootState.tradingList,'wo啥时候说实话====================================》')
        // state.currentTradingIndex=rootState.tradingList[0].id
        // commit('setMarket', { ...rootState, selectId: id })
    },
    //切换币种
    toggleMarket({ commit, rootState, state }, params) {
        console.log("交易对ID====>", state,rootState,params)
        if(params){
            state.currentIndex=params.selectId
            state.currentTradingIndex = params.selectId
            state.marketInfo = rootState.tradingList[params.selectId]
            rootState.currentCoinId=params.coinId
            rootState.tradeId=params.tradeId
            
            // console.log(state.marketInfo,'=============>state.marketInfo')
            commit('setMarket', { ...rootState, ...params })
            commit('getCoinInfo', params.coinId)  //币种
            
            commit('getDealOrders',rootState.tradeId) //成交历史
            commit('getKline',{currentCoinId:rootState.tradeId,step:state.step}) //历史k线
            
          
            setTimeout(()=>{
                // console.log(arg,'888888==========99999=====777777')
                commit('tradingAskBid',rootState.tradeId) //买卖挂单
                commit('websocketKline',{zoneId:rootState.tradeId,step:state.step}) //我的资产
                commit("getAssets",{currentCoinId:rootState.currentCoinId,zoneId:rootState.zoneId})
            },500)
        }
       
    },
    togglePrice({ commit, rootState, state }, params){
       state.currentPrcie=params.currentPrice
    },
    //订单记录切换
    toggleOrder({ commit, rootState, state }, params) {

    },
    testClick({ commit, rootState, state }, params) {
        // console.log(rootState, state, commit)
    },
    tradingAskBid({ commit,state,rootState}, obj) {
         console.log(obj,rootState,'++++我是params++++））000=======》')
         commit('tradingAskBid', obj)
    } ,
   
}
const mutations = {
    timestampToTime_(state,timestamp) {
        var date = new Date(timestamp);
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;  
        second = second < 10 ? ('0' + second) : second; 
        return h+':'+minute+':'+second; 
    },
    //买卖挂单 websocketAskBid
    tradingAskBid(state, id) {
        console.log(id,'0999888======.买卖挂单 websocketAskBid......')
        let webs = new webSocket(`websocketAskBid?pairId=${id}`)
        webs.initWebSocket()
        webs.sendSocket('sendParams', res => {
        console.log(res,'0999888======.买卖挂单 websocketAskBid......')

            state.AskList=res.ask
            state.BidList=res.bid
            // console.log("交易中心========>",res)
        })

    },
    //成交历史
    getDealOrders(state,id){
        console.log("成交历史========>",id)
        let webs = new webSocket(`websocketSSCJ?pairId=${id}`)
        webs.initWebSocket()
        webs.sendSocket('sendParams', res => {
            console.log("成交历史========>",res)
            if(res.length){
                res.forEach(element => {
                    var date = new Date(parseInt(element.dealTime));
                    var h = date.getHours();
                    h = h < 10 ? ('0' + h) : h;
                    var minute = date.getMinutes();
                    var second = date.getSeconds();
                    minute = minute < 10 ? ('0' + minute) : minute;  
                    second = second < 10 ? ('0' + second) : second; 
                    element.dealTime=h+':'+minute+':'+second; 
                  });
            }
        
          state.historyList=res
           
        })
    },
    //k线历史数据
    getKline(state, params){
        console.log(params,'========hhahhahahhahahh=====00000')
        var resolution=params.step
        var currentCoinId=params.currentCoinId
        api.getKDatas2({step:resolution,tradeCoinPariId:currentCoinId}).then(res=>{
            console.log(res,'wozai----------->>>>>>kline999999')
            var kline=[]
            if(res.datas.list.length){
                res.datas.list.forEach(function(bar) {
                    kline.push({
                    time: Number(bar.startTime),
                    open: Number(bar.openPrice),
                    close: Number(bar.closePrice),
                    high: Number(bar.topPrice),
                    low: Number(bar.floorPrice),
                    volume: Number(bar.total)
                    });
                });
            }
            console.log(kline)
            state.klineHistory=kline
        })
    },
    //K线实时数据
    websocketKline(state, params){ 
        var resolution=params.step
        var currentCoinId=params.currentCoinId
        let webs = new webSocket(`websocketKline?pairId=${currentCoinId}&uuid=1&step=${resolution}`)
        webs.initWebSocket()
        webs.sendSocket('sendParams========', res => {
            console.log("实时成交哈哈哈哈========>klineCurrent",res)
            var klineCurrent=[]
            // content.list.forEach(function(item){
            //     klineCurrent.push({
            //    time: Number(item.endTime),
            //      open: Number(item.openingPrice),
            //      close: Number(item.closeingPrice),
            //      high: Number(item.topPrice),
            //      low: Number(item.floorPrice),
            //      volume: Number(item.total)
            //    });
            //  // console.log(kline,'9999')
            // })
            
            // state.klineCurrent=klineCurrent[0]
           
        })
    },
    //当前所有委托记录
    listBidOrders(state, params) {
        api.listBidOrders(params).then(res => {
            // console.log("listBidOrders+++++++++++================>", res)
           // state.orderData = res.datas
        })
    },
    //当前or历史 卖单 记录
    listAskOrders(state, params) {
        api.listAskOrders(params)
    },
    //委托买单
    testClick({ commit, rootState, state }, params) {
        // console.log(rootState, state, commit)
    },

    tradingBuy(state, params) {
        // console.log(params)
        api.buy(params, "POST").then(res => {
            // console.log(res)
        })
    },
    //委托卖单
    tradingSell(state, params) {
        // console.log(params)
        api.sell(params, "POST").then(res => {
            // console.log(res)
        })
    },
    //币种资产
    getAssets(state, params) {
        console.log(params,'=========.......///////')
        let indexData = [
            api.uplistByUserId({pageNum:1,pageSize:1,coinId:params.zoneId}),
            api.uplistByUserId({pageNum:1,pageSize:1,coinId:params.currentCoinId})
          ]
          axios.all(indexData)
            .then(res => {
             if(Object.keys(res[1].datas.list).length==0){
                state.cursellPrice = 0.00000000
             }
             else{
                state.curbuyPrice = res[0].datas.list[0].able
                state.cursellPrice = res[1].datas.list[0].able
             }
             
            
            //   return res
            }).catch(error => {
              console.log("error===>", error)
            })
            console.log('首页list========》》》》',state.cursellPrice)
    //    api.uplistByUserId({pageNum:1,pageSize:1,coinId:params.zoneId}).then(res => {
    //     console.log(res,res.datas)
    //     if(res.status==200){
    //         if(res.datas.list.length>0){
    //             state.tradingAssets = res.datas.list[0]
    //             console.log("getAssets=============9999988888800000009999999===========00000000000>", state.tradingAssets)
    //         }
    //     }
    // })
        // api.uplistByUserId({pageNum:1,pageSize:1,coinId:params.currentCoinId}).then(res => {
        //     console.log(res,res.datas)
        //     if(res.status==200){
        //         if(res.datas.list.length>0){
        //             state.tradingAssets = res.datas.list[0]
        //             console.log("getAssets=============999999999999===========00000000000>", state.tradingAssets)
        //         }
        //     }
        // })
    },
    //撤销挂单
    canceOrder(state, params) {
        api.cancelBuy(params).then(res => {
            // console.log("canceOrder====>", res)
        })
    },
    //交易记录
    orderRecord(state, params) {
        api.getUserTransactionRecord(params).then(res => {
            // console.log("canceOrder====>", res)
        })
    },

    //切换币种 资料显示
    setMarket(state, params) {
        state.currentTradingIndex = params.selectId
        state.marketInfo = params.tradingList[params.selectId]
    },
    initMarketInfo(state,params){
        // console.log(params,'000----------')
        state.marketInfo=params[0]
    },
    //获取币种资料
    getCoinInfo(state, id) {
       // console.log(params.currentCoinId,'币种idd_________________________-d++++++')
       
        axios.get(`/COIN/coin/info/${id}`).then(res => {
            // console.log(res)
            let coninInfo = res.data.datas
            state.coinInfo = res.data.datas
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
