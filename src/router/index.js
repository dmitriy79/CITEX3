import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Transaction from '@/pages/Transaction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Transaction',
      name: 'Transaction',
      component: Transaction
    }
  ]
})
