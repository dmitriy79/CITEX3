import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Personal from '@/pages/Personal'
import Register from '@/pages/Register'
import Transaction from '@/pages/Transaction'
import ApplyChannel from  '@/components/channel/ApplyChannel'
import ApplyChannelText from  '@/components/channel/ApplyChannelText'
import ApplyMountCoin from '@/components/mountCoin/ApplyMountCoin'
import BasicInfo from '@/components/mountCoin/BasicInfo'
import MineProperty from '@/components/personal/MineProperty'
import CarryfullCoin from '@/components/personal/CarryfullCoin'

Vue.use(Router)

export default new Router({
  linkActiveClass: "active",
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
      component: Personal
    },{
      
      path: '/mineProperty',
      name: 'MineProperty',
      component: MineProperty
    },
    {
      
      path: '/carryfullCoin',
      name: 'CarryfullCoin',
      component: CarryfullCoin
    }
  ]
})
