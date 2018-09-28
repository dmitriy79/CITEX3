// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.devtools = true
import {
	Table,
	TableColumn,
	Pagination,
	Form,
	FormItem,
	Select,
	Option,
	Input,
	Message,
	MessageBox,
	Button,
	Radio,
	RadioGroup,
	Dialog
} from 'element-ui'

import App from './App'
import router from './router'
import api from './api'
// import ws from 'ws'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/font.css'
import './assets/css/iconfont.css'
import './assets/css/common.less'

import './utils/filter'
import axios from 'axios'
import VueClipboards from 'vue-clipboards';
import VueI18n from 'vue-i18n'
import lang from './lang'
import store from './store'

Vue.use(VueI18n)
Vue.use(VueClipboards);
// Vue.use(ws)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios
Vue.prototype.$api = api
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Button)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Dialog);

// Vue.use(MessageBox)
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
//为了方便打包后去除'/api',建议把'/api'设成全局，在main.js中添加
//Vue.prototype.api = process.env.NODE_ENV === 'production' ? '' : '/api'
//console.log(process.env.WS_API)
// 请求拦截
axios.interceptors.request.use(
	config => {
		let token = localStorage.getItem("token");
		// let token =JSON.parse(localStorage.getItem("token")) ;
		// token = JSON.parse(token)
		if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
			config.headers['USER-TOKEN'] = `${token}`;
		}
		// if (config.url.indexOf(url) === -1) {
		// 	config.url = url + config.url;/*拼接完整请求路径*/
		// }
		return config;
	},
	err => {
		return Promise.reject(err);
	});

axios.interceptors.response.use(function(response) {
	// token 已过期，重定向到登录页面
	if (response.data.message == 'no login') {
		// localStorage.clear()
		localStorage.removeItem('token')
		router.replace({
			path: '/login'
		})
	}
	return response
}, function(error) {
	// Do something with response error
	return Promise.reject(error)
})

const i18n = new VueI18n({
	locale: 'zh_cn',
	messages: lang
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	i18n,
	api,
	components: {
		App
	},
	template: '<App/>'
})
