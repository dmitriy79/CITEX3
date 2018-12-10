import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import FindPassword from '@/pages/FindPassword'
import JoinUs from '@/pages/JoinUs'
// import ApplyChannel from  '@/components/channel/ApplyChannel'
// import ApplyChannelText from  '@/components/channel/ApplyChannelText'
// import ApplyMountCoin from '@/components/mountCoin/ApplyMountCoin'
// import BasicInfo from '@/components/mountCoin/BasicInfo'
import BuyOrSellDetail from '@/pages/BuyOrSellDetail'


Vue.use(Router)
const router =  new Router({
  linkActiveClass: "active",
  linkExactActiveClass:"link",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "Home" */ '@/pages/Home')
    },
    {
      path: '/transaction/:pair?',
      name: 'Transaction',
      component: () => import('@/pages/Transaction')
    },
    {
      path: '/join-us',
      name: 'JoinUs',
      component: JoinUs
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/mine',
      name: 'mine',
      component: () => import('@/pages/mine/mine'),
      meta: {
        requireAuth: true
      },
      children: [{
        path: 'property',
        component: () => import('@/pages/mine/children/Property')
      }, {
        path: 'entrust',
        component: () => import('@/pages/mine/children/Entrust')
      }, {
        path: 'record',
        component: () => import('@/pages/mine/children/TransactionRecord')
      }, {
        path: 'coin-record',
        component: () => import('@/pages/mine/children/CoinRecord')
      }, {
        path: 'full-coin',
        component: () => import('@/pages/mine/children/FullCoin')
      }, {
        path: 'carry-coin',
        component: () => import('@/pages/mine/children/CarryCoin')
      }, {
        path: 'bank-card',
        component: () => import('@/pages/mine/children/BankCardManage')
      }, {
        path: 'coin-count',
        component: () => import('@/pages/mine/children/CoinCount')
      }, {
        path: 'phone-authentication',
        component: () => import('@/pages/mine/children/PhoneAuthentication')
      }, {
        path: 'real-authentication',
        component: () => import('@/pages/mine/children/RealAuthentication')
      }, {
        path: 'google-authenticator',
        component: () => import('@/pages/mine/children/GoogleAuthenticator')
      }, {
        path: 'recommed',
        component: () => import('@/pages/mine/children/Recommed')
      }, {
        path: 'modify-password',
        component: () => import('@/pages/mine/children/ModifyPassword')
      }, {
        path: 'mine-info',
        component: () => import('@/pages/mine/children/Info')
      }, {
        path: 'email-authenticator',
        component: () => import('@/pages/mine/children/EmailAuthenticator')
      }, {
        path: 'transaction-passWord',
        component: () => import('@/pages/mine/children/TransactionPassWord')
      }]
    },{
      path: '/find-password',
      name: 'FindPassword',
      component: FindPassword
    },
    {
      path: '/buyOrSellDetail',
      name: 'BuyOrSellDetail',
      component: BuyOrSellDetail
      
    }
  ],
  
})
// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {// 判断是否需要登录权限to.matched.some(res => res.meta.requireAuth)
  if (localStorage.getItem('token')) {// 判断是否登录
   next()
  } else {// 没登录则跳转到登录界面
   next({
   path: '/login',
  //  query: {redirect: to.fullPath}
   })
  }
  } else {
  next()
  }
 })
 export default router