import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../views/home/First.vue'
import Cart from '../views/home/Cart.vue'
import My from '../views/home/My.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path:'first',component:First}, 
      {path:'cart',component:Cart},
      {path:'my',component:My},
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
