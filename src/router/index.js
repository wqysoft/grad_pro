import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import AdminHome from '@/components/Home/AdminHome'
import AddGoods from '@/components/Home/AddGoods'
import Detail from '@/components/Home/Detail'
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
      path:'/',
      redirect:'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/adminHome',
      name: 'adminHome',
      component: AdminHome,
    },
    {
      path: '/adminHome/addGoods',
      name: 'addGoods',
      component: AddGoods,
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: MyOrder,
      meta:{
        requireUserInfo:false
      }
    },
    {
      path: '/person',
      name: 'person',
      component: Person,
      meta:{
        requireUserInfo:false
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta:{
        requireUserInfo:false
      }
    },
    {
      path:'/detail',
      name:'detail',
      component:Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      children: [
        { 
          path: '/userLogin',
          name:'userLogin',
          component:UserLogin 
        },
        { 
          path: '/adminLogin',
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
          path: '/userRegister',
          name:'userRegister',
          component:UserRegister 
        },
        {
          path: '/adminRegister',
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
