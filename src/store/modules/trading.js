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
    currentPrcie: '', //交易区当前价格
    klineHistory: null,
    klineCurrent: {},
    step: '1min',
    curbuyPrice: '',
    cursellPrice: '',
    entrustList: [], //委托订单
}
const getters = {

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
        console.log(rootState.marketInfo)
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

        commit('getKline', {
            id: id,
            step: state.step
        }) //历史k线
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
            rootState.marketInfo = coin


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

            commit('getKline', {
                id: id,
                step: state.step
            }) //历史k线

        }

    },
    togglePrice({
        commit,
        rootState,
        state
    }, params) {
        state.currentPrcie = params.currentPrice
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
            obj: obj
        })
    },
    tradeCoinPairMaxMinPrice1({
        commit,
        state,
        rootState
    }, obj) {
        commit('tradeCoinPairMaxMinPrice1', {
            tradeCoinPairId: rootState.marketInfo.id,
            obj: obj
        })
    },
    toggleOrder({ commit, state, rootState }, params) {
        commit('listBidOrders', {
            type: params.type,
            tradeCoinPairId: rootState.marketInfo.id
        })
    }
}
const mutations = {
    listBidOrders(state, params) {
        var userId = localStorage.getItem('userId');
        const { type, tradeCoinPairId } = params;
        state.orderData = [];
        api.listBidOrders({
            type, tradeCoinPairId,
            userId: userId,
            pageNum: 1,
            pageSize: 7
        }).then(res => {
            console.log(res.datas,'listBidOrders====>')
            state.orderData = res.datas
        })
    },
    tradeCoinPairMaxMinPrice({
        state,
        rootState
    }, params) {
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

                    })
                    console.log(value, '我是交易密码')


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
    tradeCoinPairMaxMinPrice1({
        state,
        rootState
    }, params) {
        console.log(params, '-----00000000000+++++++')
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

                    })
                    console.log(value, '我是交易密码')


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
        new webSocket({
            url: `websocketAskBid?pairId=${id}`,
            data: 'sendParams',
            success: (res) => {
                console.log(res,'websocketAskBid')
                state.AskList = res.ask || [];
                state.BidList = res.bid || [];
                state.BidList.reverse();
                state.currentPrcie = res.bid[0].price;
            }
        })
    },
    //成交历史
    getDealOrders(state, id) {
        new webSocket({
            url: `websocketSSCJ?pairId=${id}`,
            data: 'sendParams',
            success: (res) => {
                state.historyList = res
            }
        })
    },
    //k线历史数据
    getKline(state, params) {
        const { step, id } = params;
        api.getKDatas2({
            step,
            tradeCoinPariId: id
        }).then(res => {
            var kline = []
            if (res.datas.list.length) {
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
            console.log('k line data', kline)
            state.klineHistory = kline;
        });
        new webSocket({
            url: `websocketKline?pairId=${id}&uuid=1&step=${step}`,
            data: 'sendParams',
            success: (res) => {
                res.list.map(bar => {
                    state.klineHistory.push({
                        time: Number(bar.startTime),
                        open: Number(bar.openPrice),
                        close: Number(bar.closePrice),
                        high: Number(bar.topPrice),
                        low: Number(bar.floorPrice),
                        volume: Number(bar.total)
                    })
                });
                console.log(res,'websocketKline===>')
            }
        })
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
    //撤销挂单
    canceOrder(state, params) {
        api.cancelBuy(params, 'POST').then(res => {
            // console.log("canceOrder====>", res)
        })
    },
    canceSell(state, params) {
        api.cancelSell(params, 'POST').then(res => {

        });
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