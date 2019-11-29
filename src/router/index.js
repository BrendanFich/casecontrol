import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'

// 首页
import QueryByDoc from '@/components/QualityControlInfo/QueryByDoc/QueryByDoc'
import Monitor from '@/components/QualityControlInfo/Monitor/Monitor'
import ContentMonitor from '@/components/QualityControlInfo/Monitor/ContentMonitor/ContentMonitor'
import TimeLimitMonitor from '@/components/QualityControlInfo/Monitor/TimeLimitMonitor/TimeLimitMonitor'
import DefectRegister from '@/components/QualityControlInfo/Monitor/DefectRegister/DefectRegister'

// 质控
import QcSectionInfo from '@/components/QualityControl/QcSectionInfo/QcSectionInfo'
import QcEndInfo from '@/components/QualityControl/QcEndInfo/QcEndInfo'
import RecordReview from '@/components/QualityControl/RecordReview/RecordReview'
import DeptQcInfo from '@/components/QualityControl/DeptQcInfo/DeptQcInfo'

// 统计
import StatsSectionInfo from '@/components/Statistics/StatsSectionInfo/StatsSectionInfo'
import StatsEndInfo from '@/components/Statistics/StatsEndInfo/StatsEndInfo'

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
          name: 'Monitor',
          path: 'monitor',
          component: Monitor,
          children: [
            {
              name: 'TimeLimitMonitor',
              path: 'timeLimitMonitor',
              component: TimeLimitMonitor
            },
            {
              name: 'ContentMonitor',
              path: 'contentMonitor',
              component: ContentMonitor
            },
            {
              name: 'DefectRegister',
              path: 'defectRegister',
              component: DefectRegister
            }
          ]
        }
      ]
    },
    // 质检
    {
      name: 'QualityControl',
      path: '/qualityControl',
      component: Home,
      redirect: '/qualityControl/qcSectionInfo',
      children: [
        {
          name: 'QcSectionInfo',
          path: 'qcSectionInfo',
          component: QcSectionInfo
        },
        {
          name: 'QcEndInfo',
          path: 'qcEndInfo',
          component: QcEndInfo
        },
        {
          name: 'RecordReview',
          path: 'recordReview',
          component: RecordReview
        },
        {
          name: 'DeptQcInfo',
          path: 'deptQcInfo',
          component: DeptQcInfo
        }
      ]
    },
    // 统计
    {
      name: 'Statistics',
      path: '/statistics',
      component: Home,
      redirect: '/statistics/statsSectionInfo',
      children: [
        {
          name: 'StatsSectionInfo',
          path: 'statsSectionInfo',
          component: StatsSectionInfo
        },
        {
          name: 'StatsEndInfo',
          path: 'statsEndInfo',
          component: StatsEndInfo
        }
      ]
    }
  ]
})
