import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart/Cart'
import FriendLink from '@/components/FriendLink/FriendLink'
import MyOrder from '@/components/MyOrder/MyOrder'
import Person from '@/components/Person/Person'
import OrderManage from '@/components/Person/OrderManage'
import Personal from '@/components/Person/Personal'
import Update from '@/components/Person/Update'
import Register from '@/components/Register/Register'
import Login from '@/components/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: MyOrder
    },
    {
      path: '/person',
      name: 'person',
      component: Person,
      children: [
        {
          path: '/',
          redirect:'/person/personal'
        },
        {
          path: '/person/update',
          name: 'p_update',
          component: Update,
        },
        {
          path: '/person/personal',
          name: 'p_personal',
          component: Personal,
        },
        {
          path: '/person/orderManage',
          name: 'p_orderManage',
          component: OrderManage,
        },
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/friendLink',
      name: 'friendLink',
      component: FriendLink,
     
    },
  ]
})
