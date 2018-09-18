import api from '../../api'
import axios from 'axios'
console.log(api,'=====++++++=====')
//import socket from '../../socket.js'
const state = {
	official: null, //公告
	category: null, //交易对列表
	dealOrder: null, //涨跌幅排行
	coinList: null, //主币区
}
const getters = {

}
const actions = {
	// 币种分类
	getCategory({ commit, state }, obj) {
		commit("getCategory", obj)
	},
	initHome({ commit, state }, obj) {
		commit("initHomePage", obj)
	},
}
const mutations = {
	//币种分类
	getCategory(state, obj) {
		console.log(state.all)
		return api.classificationList({})
		// .then(res => {
		// 	console.log(res.data.datas)
		// 	state.category = res.data.datas
		// }).catch(error => {
		// 	console.log(error)
		// })
	},
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
	//初始化首页
	initHomePage(state, obj) {
		console.log(state)
		api.socket.initWebSocket("websocketSSCJ")
		api.socket.sendSocket("ss")
		// return this.$http.all([])
		// console.log(this)
		// api.getTopTradeCoinPairs({})
		// 	.then(res => {
		// 		console.log(res)
		// 	})
		  // let ranking = new WebSocket(`${process.env.WS_API}/websocketRankingList`)
		  // ranking.onopen = () => {
		  // 	console.log("socket IS open")
		  //   // Web Socket 已连接上，使用 send() 方法发送数据
		  //   ranking.send('')
		  //     console.log('数据发送中8888...')
		  // }
		  // ranking.onmessage = evt => {
		  //   console.log("RANKING==>", evt)
		  //   var content = JSON.parse(evt.data)
		  //   console.log("res==>", content)
		  //   console.log(JSON.parse(content.up))
		  //   // this.buyListsAll=content.bid
		  //   // this.sellListsAll=content.ask
		  //   // console.log(content,'length')
		  //   // this.buyLists=content.bid.slice(0,11)
		  //   // this.sellLists=content.ask.slice(0,11)
		  // }
		  // ranking.onclose = function() {
		  //   // 关闭 websocket
		  //    console.log('连接已关闭...')
		  // }
		  // 组件销毁时调用，中断websocket链接
		  // this.over = () => {
		  //   ws.close()
		  // }

		let indexData = [
			api.listByType({ type: 1 }), //banner列表
			api.list({ pageNum: 1, pageSize: 10 }), //公告列表
			api.classificationList({}), //交易对列表
			api.getTradeInfoByZone({id:1}) //交易对列表
		]
		axios.all(indexData)
			.then(res => {
				console.log(res)
			}).catch(error=>{
				console.log("error===>",error)
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
