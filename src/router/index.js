import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Personal from '@/pages/Personal'
import Register from '@/pages/Register'
import FindPassword from '@/pages/FindPassword'
import Notice from '@/pages/Notice'
import NoticeDetail from '@/pages/NoticeDetail'
import JoinUs from '@/pages/JoinUs'
import Transaction from '@/pages/Transaction'
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
      path: '/transaction',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/joinUs',
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
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        requireAuth: true
      },
      children: [{
        path: 'property',
        component: () => import('@/components/personal/MineProperty')
      }, {
        path: 'entrust',
        component: () => import('@/components/personal/MineEntrust')
      }, {
        path: 'record',
        component: () => import('@/components/personal/TransactionRecord')
      }, {
        path: 'full-coin',
        component: () => import('@/components/personal/FullCoin')
      }, {
        path: 'carry-coin',
        component: () => import('@/components/personal/CarryCoin')
      }, {
        path: 'bank-card',
        component: () => import('@/components/personal/BankCardManage')
      }, {
        path: 'coin-count',
        component: () => import('@/components/personal/CoinCount')
      }, {
        path: 'phone-authentication',
        component: () => import('@/components/personal/PhoneAuthentication')
      }, {
        path: 'real-authentication',
        component: () => import('@/components/personal/RealAuthentication')
      }, {
        path: 'google-authenticator',
        component: () => import('@/components/personal/GoogleAuthenticator')
      }, {
        path: 'recommed',
        component: () => import('@/components/personal/Recommed')
      }, {
        path: 'modify-password',
        component: () => import('@/components/personal/ModifyPassword')
      }, {
        path: 'mine-info',
        component: () => import('@/components/personal/MineInfo')
      }, {
        path: 'email-authenticator',
        component: () => import('@/components/personal/EmailAuthenticator')
      }, {
        path: 'transaction-passWord',
        component: () => import('@/components/personal/TransactionPassWord')
      }]
    },{
      path: '/findPassword',
      name: 'FindPassword',
      component: FindPassword
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/buyOrSellDetail',
      name: 'BuyOrSellDetail',
      component: BuyOrSellDetail
      
    },
    {
      path: '/noticeDetail',
      name: 'NoticeDetail',
      component: NoticeDetail
    }
  ],
  
})
// 判断是否需要登录权限 以及是否登录
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
//   if (localStorage.getItem('token')) {// 判断是否登录
//    next()
//   } else {// 没登录则跳转到登录界面
//    next({
//    path: '/login',
//   //  query: {redirect: to.fullPath}
//    })
//   }
//   } else {
//   next()
//   }
//  })
 export default router