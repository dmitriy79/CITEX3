import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
import home from './modules/home.js'
export default new vuex.Store({
	state: {
		pageLoading: false,
		isMember:true
	},
	mutations: {
		showLoading(state) {
			state.pageLoading = true
		},
		hideLoading(state) {
			state.pageLoading = false
		}
	},
	modules: {
		home, //首页
	}

})
