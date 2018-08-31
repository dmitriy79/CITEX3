// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Table,TableColumn,Pagination,Form,FormItem,Select,Option,Input,Message,MessageBox,
} from 'element-ui'

import App from './App'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css';
import './assets/css/font.css'
import axios from 'axios'


Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
// Vue.use(MessageBox)

Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
//为了方便打包后去除'/api',建议把'/api'设成全局，在main.js中添加
Vue.prototype.api = process.env.NODE_ENV === 'production' ? '' : '/api' 

// 请求拦截
axios.interceptors.request.use(
	config => {
		let token = localStorage.getItem("token");
		// token = JSON.parse(token)
		if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
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

axios.interceptors.response.use(function (response) {
			// token 已过期，重定向到登录页面
			if (response.data.code == 403){
				localStorage.clear()
				router.replace({
						path: '/login'
				})
			}
			return response
		}, function (error) {
			// Do something with response error
			return Promise.reject(error)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
