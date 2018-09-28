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


import './utils/axios'
import './utils/filter'
import axios from 'axios'
import VueClipboards from 'vue-clipboards';
import VueI18n from 'vue-i18n'
import lang from './lang'
import store from './store'

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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

const i18n = new VueI18n({
	locale: 'zh_cn',
	messages: lang
})


router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

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
