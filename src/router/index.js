import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Personal from '@/pages/Personal'
import Register from '@/pages/Register'
import FindPassword from '@/pages/FindPassword'

import Transaction from '@/pages/Transaction'
import ApplyChannel from  '@/components/channel/ApplyChannel'
import ApplyChannelText from  '@/components/channel/ApplyChannelText'
import ApplyMountCoin from '@/components/mountCoin/ApplyMountCoin'
import BasicInfo from '@/components/mountCoin/BasicInfo'
import MineProperty from '@/components/personal/MineProperty'
import CarryfullCoin from '@/components/personal/CarryfullCoin'

Vue.use(Router)

const router =  new Router({
  linkActiveClass: "active",
  linkExactActiveClass:"link",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/transaction',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/applyChannel',
      name: 'ApplyChannel',
      component: ApplyChannel
    },{  
      path: '/applyChannelText',
      name: 'ApplyChannelText',
      component: ApplyChannelText,
      redirect: '/basicInfo',
    },{
      
      path: '/applyMountCoin',
      name: 'ApplyMountCoin',
      component: ApplyMountCoin,
      // children:[
      //   {
      //     path: '/basicInfo',
      //     name: 'BasicInfo',
      //     component: BasicInfo
      //   }
      // ]
    },
    {
      path: '/basicInfo',
      name: 'BasicInfo',
      component: BasicInfo
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
      }
    },{
      
      path: '/findPassword',
      name: 'FindPassword',
      component: FindPassword
    },
    {
      
      path: '/mineProperty',
      name: 'MineProperty',
      component: MineProperty
    },
    {
      
      path: '/carryfullCoin',
      name: 'CarryfullCoin',
      component: CarryfullCoin
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