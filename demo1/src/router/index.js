import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/views/login/login'
import Shoppingcart from '@/views/shoppingcart/shoppingcart'
import Order from '@/views/order/order'
import Manage from '@/views/manage/manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/shoppingcart',
      name: 'Shoppingcart',
      component: Shoppingcart
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ]
})
