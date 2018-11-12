import Vue from 'vue'
import api from '../../api'
import axios from 'axios'
import {
    stat
} from 'fs';
const webSocket = api.socket
const state = {
    buyParams: {}, //buy参数
    sellParams: {}, //sell参数
    tradingAssets: {}, //当前交易对资金
    coinInfo: {}, //币种资料
    orderData: {}, //订单委托/历史记录
    AskList: [], //卖单
    BidList: [], //买单 
    historyList: [],
    currentPrice: '', //交易区当前价格
    klineCurrent: null,
    step: '1min',
    curbuyPrice: '',
    cursellPrice: '',
    entrustList: [], //委托订单
}
const getters = {

}

function guid() {    
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {     
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);       
        return v.toString(16);   
    });
}
// id 指的交易对 id, coinId 指币种id
const actions = {
    //initTrading
    initTradings({
        commit,
        state,
        rootState
    }, arg) {
        const { id, coinId } = rootState.marketInfo;
        console.log(rootState.marketInfo,'marketInfo=========999999>')
        // commit("initMarketInfo",rootState.tradingList)
        commit("getAssets", {
            coinId: coinId,
            zoneCoinId: rootState.zoneCoinId
        })
        commit("getDealOrders", id) // 初始化交易历史

        // 币种资料
        commit("getCoinInfo", coinId);

        // 实时订单
        commit("tradingAskBid", id);

        // 挂单簿
        commit("listBidOrders", {
            type: 1, // 当前
            tradeCoinPairId: id
        })

    },
    //k线图
    getKline({ commit, rootState, state }, params){
        state.step = params.resolution
        commit('getKline',{
            id: rootState.marketInfo.id,
            step: state.step,
            callback: params.callback
        })  //币种
    },
    tradingBuy({
        commit,
        state,
        rootState
    }, obj) {
        commit("tradingBuy", {
            tradeId: rootState.marketInfo.id,
            params: obj
        })
    },
    tradingSell({
        commit,
        state
    }, obj) {
        commit("tradingSell", obj)
    },

    //根据项目查询交易对
    searchCoin({
        commit,
        rootState
    }, value) {

    },
    //切换币种
    toggleMarket({
        commit,
        rootState,
        state
    }, params) {
        console.log("交易对ID====>", state, rootState, params)
        if (params) {
            let { coinName, zoneName } = params;
            let [zone] = rootState.allCoin.filter( item => item.zoneCoinName == zoneName);
            let [coin] = zone.list.filter( item => item.name == coinName);
            const { id, coinId } = coin;
            console.log(coin,'coin=====')
            rootState.marketInfo = coin
            console.log(rootState.marketInfo,'rootState.marketInfo=======.>>>>>>>')   
            commit("getAssets", {
                coinId: coinId,
                zoneCoinId: rootState.zoneCoinId
            })
            commit("getDealOrders", id) // 初始化交易历史

            // 币种资料
            commit("getCoinInfo", coinId);

            // 实时订单
            commit("tradingAskBid", id);

            // 挂单簿
            commit("listBidOrders", {
                type: 1, // 当前
                tradeCoinPairId: id
            })

        }

    },
    togglePrice({
        commit,
        rootState,
        state
    }, params) {
        state.currentPrice = [params.currentPrice, params.currentPrice]
    },
    testClick({
        commit,
        rootState,
        state
    }, params) {
        // console.log(rootState, state, commit)
    },
    canceOrder({
        commit,
        rootState,
        state
    }, params) {
        commit('canceOrder', params)
    },
    canceSell({
        commit,
        rootState,
        state
    }, params) {
        commit('canceSell', params)
    },
    tradingAskBid({
        commit,
        state,
        rootState
    }, obj) {
        //  console.log(obj,rootState,'++++我是params++++））000=======》')
        commit('tradingAskBid', obj)
    },
    tradeCoinPairMaxMinPrice({
        commit,
        state,
        rootState
    }, obj) {
        commit('tradeCoinPairMaxMinPrice', {
            tradeCoinPairId: rootState.marketInfo.id,
            obj: obj,
            rootState
        })
    },
    tradeCoinPairMaxMinPrice1({
        commit,
        state,
        rootState
    }, obj) {
        commit('tradeCoinPairMaxMinPrice1', {
            tradeCoinPairId: rootState.marketInfo.id,
            obj: obj,
            rootState
        })
    },
    toggleOrder({ commit, state, rootState }, params) {
        commit('listBidOrders', {
            type: params.type,
            size: params.size,
            tradeCoinPairId: rootState.marketInfo.id
        })
    }
}
const mutations = {
    listBidOrders(state, params) {
        const { type, tradeCoinPairId } = params;
        state.orderData = [];
        api.listBidOrders({
            type, tradeCoinPairId,
            pageNum: 1,
            pageSize: params.size || 10
        }).then(res => {
            console.log(res.datas,'listBidOrders====>')
            state.orderData = res.datas
        })
    },
    tradeCoinPairMaxMinPrice(state, params) {
        api.tradeCoinPairMaxMinPrice({
            tradeCoinPairId: params.tradeCoinPairId,
            price: params.obj.Nums
        }).then(res => {
            if (res.datas.trueOrFalse) {
                Vue.prototype.$prompt('请输入交易密码', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消', //replace(/[^\d]/g,'')
                    inputPattern: '',
                    inputErrorMessage: '',
                    inputType: 'password'
                }).then(({
                    value
                }) => {
                    api.buy({
                        tradePassword: value,
                        tradeCoinPairId: params.tradeCoinPairId,
                        price: params.obj.Price,
                        amount: params.obj.Nums
                    }, "POST").then(res => {
                        if (res.message === '成功') {
                            Vue.prototype.$message({
                                message: '成功',
                                type: 'success'
                            });
                        } else {
                            Vue.prototype.$message({
                                message: res.message,
                                type: 'warning'
                            });
                        }
                        const { id, coinId } = params.rootState.marketInfo;
                        api.listBidOrders({
                            type: 1,
                            tradeCoinPairId: id,
                            pageNum: 1,
                            pageSize: 50
                        }).then(res => {
                            state.orderData = res.datas
                        });
                        mutations.getAssets(state, {
                            coinId: coinId,
                            zoneCoinId: params.rootState.zoneCoinId
                        });
                    })
                }).catch(() => {

                });
            } else {

                Vue.prototype.$message({
                    message: res.datas.msg,
                    type: 'warning'
                });
            }
        })
    },
    tradeCoinPairMaxMinPrice1(state, params) {
        api.tradeCoinPairMaxMinPrice({
            tradeCoinPairId: params.tradeCoinPairId,
            price: params.obj.Nums
        }).then(res => {
            console.log(res, '这里是交易限额-----------')
            if (res.datas.trueOrFalse) {
                Vue.prototype.$prompt('请输入交易密码', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消', //replace(/[^\d]/g,'')
                    inputPattern: '',
                    inputErrorMessage: '',
                    inputType: 'password'
                }).then(({
                    value
                }) => {
                    api.sell({
                        tradePassword: value,
                        tradeCoinPairId: params.tradeCoinPairId,
                        price: params.obj.Price,
                        amount: params.obj.Nums
                    }, "POST").then(res => {
                        console.log(res, '009999===我是卖单')
                        if (res.message === '成功') {

                            Vue.prototype.$message({
                                message: '成功',
                                type: 'success'
                            });
                        } else {
                            Vue.prototype.$message({
                                message: res.message,
                                type: 'warning'
                            });
                        }
                        const { id, coinId } = params.rootState.marketInfo;
                        api.listBidOrders({
                            type: 1,
                            tradeCoinPairId: id,
                            pageNum: 1,
                            pageSize: 50
                        }).then(res => {
                            state.orderData = res.datas
                        });
                        mutations.getAssets(state, {
                            coinId: coinId,
                            zoneCoinId: params.rootState.zoneCoinId
                        });
                    });
                }).catch(() => {

                });
            } else {

                Vue.prototype.$message({
                    message: res.datas.msg,
                    type: 'warning'
                });
            }
        })
    },
    //买卖挂单 websocketAskBid
    tradingAskBid(state, id) {
        function createAskBid() {
            window.createAskBid && window.createAskBid.closeSocket();
            window.createAskBid = new webSocket({
                url: `websocketAskBid?pairId=${id}`,
                data: 'sendParams',
                success: (res) => {
                    console.log(res,'websocketAskBid')
                    state.AskList = res.ask || [];
                    state.BidList = res.bid || [];
                    state.BidList.reverse();
                    state.currentPrice = [res.bid[0].price, res.ask[0].price];
                },
                fail: (res) => {
                    createAskBid();
                }
            })
        }
        createAskBid();
    },
    //成交历史
    getDealOrders(state, id) {
        function createDealOrders() {
            window.createDealOrders && window.createDealOrders.closeSocket();
            window.createDealOrders = new webSocket({
                url: `websocketSSCJ?pairId=${id}`,
                data: 'sendParams',
                success: (res) => {
                    state.historyList = res
                },
                fail: (res) => {
                    createDealOrders();
                }
            })
        }
        createDealOrders();
    },
    //k线历史数据
    getKline(state, params) {
        const { step, id, callback } = params;
        api.getKDatas2({
            step,
            tradeCoinPariId: id
        }).then(res => {
            var kline = []
            if (res.datas.list.length>0) {
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
            state.klineCurrent = kline[0]
            state.klineHistory = kline;
            callback && callback(kline);
        });
        var uuid = guid();

        function createKline() {
            window.createKline && window.createKline.closeSocket();
            window.createKline = new webSocket({
                url: `websocketKline?pairId=${id}&uuid=${uuid}&step=${step}`,
                data: 'sendParams',
                success: (res) => {
                    console.log(res,'websocketKline====>res')
                    var currentkline = []
                    if (res.list.length) {
                        res.list.forEach(function(bar) {
                            let lastBar = state.klineHistory[state.klineHistory.length - 1];
                            let currentBar = {
                                time: Number(bar.startTime),
                                open: Number(bar.openPrice),
                                close: Number(bar.closePrice),
                                high: Number(bar.topPrice),
                                low: Number(bar.floorPrice),
                                volume: Number(bar.total)
                            };
                            if (lastBar.time == currentBar.time) {
                                state.klineHistory[state.klineHistory.length - 1] = currentBar;
                            } else {
                                state.klineHistory.push(currentBar)
                            }
                        });
                    }
                    state.klineCurrent = state.klineHistory[state.klineHistory.length - 1];
                    callback && callback(state.klineHistory);
                },
                fail: (res) => {
                    createKline();
                }
            })
        }
        createKline();
    },
    //当前or历史 卖单 记录
    listAskOrders(state, params) {
        api.listAskOrders(params)
    },

    tradingBuy(state, params) {
        var param = {
            tradePassword: params.params.tradePassword,
            price: params.params.buyPrice,
            amount: params.params.buyNums,
            tradeCoinPairId: params.tradeId
        }
        console.log(param, '我是买单--------》》》》》》》》》》》》》++++++')

        api.buy(param, "POST").then(res => {
            console.log(res, '009999===我是买单')
            if (res.message === '成功') {

                Vue.prototype.$message({
                    message: '成功',
                    type: 'success'
                });
            } else {
                Vue.prototype.$message({
                    message: res.message,
                    type: 'warning'
                });
            }

        })
    },
    //委托卖单
    tradingSell(state, params) {
        // console.log(params)
        api.sell(params, "POST").then(res => {
            console.log(res, '我是卖单========》》》》》》》')
        })
    },
    //币种资产
    getAssets(state, params) {
        console.log(params, '=========.......///////')
        let indexData = [
            api.uplistByUserId({
                pageNum: 1,
                pageSize: 1,
                coinId: params.zoneCoinId
            }),
            api.uplistByUserId({
                pageNum: 1,
                pageSize: 1,
                coinId: params.coinId
            })
        ]
        axios.all(indexData).then(res => {
            if (Object.keys(res[1].datas.list).length == 0) {
                state.cursellPrice = 0.00000000
            } else {
                state.curbuyPrice = res[0].datas.list[0].able
                state.cursellPrice = res[1].datas.list[0].able
            }
        }).catch(error => {
            console.log("error===>", error)
        })
    },
    //交易记录
    orderRecord(state, params) {
        api.getUserTransactionRecord(params).then(res => {
            // console.log("canceOrder====>", res)
        })
    },

    //获取币种资料
    getCoinInfo(state, id) {
        // console.log(params.currentCoinId,'币种idd_________________________-d++++++')
        axios.get(`/coin/coin/info/${id}`).then(res => {
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