import api from '../../api'
import axios from 'axios'

const state = {
	banner: [], //banner
	official: [], //公告
	category: [], //交易对列表
	dealOrder: [], //涨跌幅排行
	coinList: [], //主币区
	officialIndex: 0,
}
const getters = {

}
const actions = {
	// 交易对
	getTrading({ commit, state }, obj) {
		commit("getTrading", obj)
	},
	initHome({ commit, state }, obj) {
		commit("initHomePage", obj)
	},
	officaliCycle({ commit, state }, obj) {
		commit("officaliCycle", obj)
	},
}
const mutations = {
	//币种分类
	getCategory(state, obj) {},
	//切换交易对
	toggleTrading(state, obj) {

	},
	//获取交易对列表
	getTrading(state, obj) {

	},
	//涨跌幅排行
	getDealOrderUpDownTen(state, obj) {

	},
	//公告列表
	getOfficial(state, obj) {

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
	//初始化首页
	initHomePage(state, obj) {
		api.socket.initWebSocket("websocketRankingList")
		api.socket.sendSocket({})
		let indexData = [
			api.listByType({ type: 1 }), //banner列表
			api.list({ pageNum: 1, pageSize: 10 }), //公告列表
			api.classificationList({}), //交易对列表
			api.getTradeInfoByZone({ id: 1 }) //交易对列表

		]
		axios.all(indexData)
			.then(res => {
				console.log(res)
				state.banner = res[0].data.datas
				state.official = res[1].data.datas.list
				state.category = res[2].data.datas
				state.coinList = res[3].data.datas.list
				
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
