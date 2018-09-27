import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
import home from './modules/home'
import common from './modules/common'
import trading from './modules/trading'
import assets from './modules/memberAssets'
export default new vuex.Store({
  ...common,
  modules: {
    home, //首页
    trading, //交易中心
    assets,//个人中心-资产
  }
})