import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/home.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: Home
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router