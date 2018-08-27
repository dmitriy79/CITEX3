// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Table,TableColumn,Pagination,Form,FormItem
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
