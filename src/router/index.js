import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Cart from '@/components/Cart/Cart'
import FriendLink from '@/components/FriendLink/FriendLink'
import MyOrder from '@/components/MyOrder/MyOrder'
import Person from '@/components/Person/Person'
import Register from '@/components/Register/Register'
import AdminRegister from '@/components/Register/AdminRegister'
import UserRegister from '@/components/Register/UserRegister'
import Login from '@/components/Login/Login'
import AdminLogin from '@/components/Login/AdminLogin'
import UserLogin from '@/components/Login/UserLogin'

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
      component: Person
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        { 
          path: '/login/userLogin',
          name:'userLogin',
          component:UserLogin 
        },
        { 
          path: '/login/adminLogin',
          name:'adminLogin',
          component:AdminLogin 
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      children:[
        {
          path: '/register/userRegister',
          name:'userRegister',
          component:UserRegister 
        },
        {
          path: '/register/adminRegister',
          name:'adminRegister',
          component:AdminRegister 
        }
      ]
    },
    {
      path: '/friendLink',
      name: 'friendLink',
      component: FriendLink,

    },
  ]
})
