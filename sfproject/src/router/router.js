import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login/login.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: Login
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router