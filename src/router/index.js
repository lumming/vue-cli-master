import Vue from 'vue'
import VueRouter from 'vue-router'
/*
import Home from '../pages/home'
*/
import Detail from '../pages/goodsDetail'
import Msg from '../components/Message.vue'
import Me from '../components/Me.vue'
import Car from '../components/Car.vue'
import News from '../components/News.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    component: resolve => require(['../pages/home'],resolve),
    meta: {
      title:'home'
    }
  },{
  	path:'/',
  	redirect:'/home'
  },
  {
    path: '/msg',
    component: Msg
  },
  {
    path: '/detail',
    component: Detail,
    children: [
      {
          path:'msg',
          component: Msg
      }
    ]
  },{
  	path:'/me',
  	component:Me,
  },{
  	path:'/car',
  	component:Car
  },{
  	path:'/news',
  	component:News
  }
]
export default new VueRouter({
  routes
})
