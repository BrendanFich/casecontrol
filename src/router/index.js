import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'

// 首页按医生查找
import QueryByDoc from '@/components/QualityControlInfo/QueryByDoc/QueryByDoc'
import ContentMonitor from '@/components/QualityControlInfo//ContentMonitor/ContentMonitor'
import TimeLimitMonitor from '@/components/QualityControlInfo/TimeLimitMonitor/TimeLimitMonitor'

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
      redirect: '/qualityControlInfo',
      component: Home
    },
    // 首页按医生查找
    {
      name: 'QualityControlInfo',
      path: '/qualityControlInfo',
      component: Home,
      redirect: '/qualityControlInfo/queryByDoc',
      children: [
        {
          name: 'QueryByDoc',
          path: 'queryByDoc',
          component: QueryByDoc
        },
        {
          name: 'ContentMonitor',
          path: 'contentMonitor',
          component: ContentMonitor
        },
        {
          name: 'TimeLimitMonitor',
          path: 'timeLimitMonitor',
          component: TimeLimitMonitor
        }
      ]
    }
  ]
})
