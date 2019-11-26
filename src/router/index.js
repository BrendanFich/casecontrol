import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Home',
      path: '/home',
      // redirect: '/patient-manage',
      component: Home
    }
  ]
})
