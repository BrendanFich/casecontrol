import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import Test from '@/components/Test/Test'
import ComponentContent from '@/base/ComponentContent/ComponentContent'

// 质控
import SectionQcInfoSum1 from '@/components/QualityControl/SectionQcInfoSum1/SectionQcInfoSum1'
import EndQcInfoSum1 from '@/components/QualityControl/EndQcInfoSum1/EndQcInfoSum1'
import DeptQcInfo from '@/components/QualityControl/DeptQcInfo/DeptQcInfo'
import CaseHistoryReview from '@/components/QualityControl/CaseHistoryReview/CaseHistoryReview'
import SpotCheck from '@/components/QualityControl/SpotCheck/SpotCheck'
import QueryByDoc from '@/components/QualityControl/Overview/queryByDoc/queryByDoc'
import Monitor from '@/components/QualityControl/Overview/Monitor/Monitor'
import ContentMonitor from '@/components/QualityControl/Overview/Monitor/ContentMonitor/ContentMonitor'
import TimeLimitMonitor from '@/components/QualityControl/Overview/Monitor/TimeLimitMonitor/TimeLimitMonitor'
import DefectRegister from '@/components/QualityControl/Overview/Monitor/DefectRegister/DefectRegister'

// 统计
import SectionQcInfoSum2 from '@/components/Statistics/SectionQcInfoSum2/SectionQcInfoSum2'
import EndQcInfoSum2 from '@/components/Statistics/EndQcInfoSum2/EndQcInfoSum2'
import EndScore from '@/components/Statistics/EndScore/EndScore'
import QcDetailSearch from '@/components/Statistics/QcDetailSearch/QcDetailSearch'
import QcerWorkload from '@/components/Statistics/QcerWorkload/QcerWorkload'
import RunTimeLimitMonitor from '@/components/Statistics/RunTimeLimitMonitor/RunTimeLimitMonitor'
import SearchByDefect from '@/components/Statistics/SearchByDefect/SearchByDefect'
import SearchByDept from '@/components/Statistics/SearchByDept/SearchByDept'

// 字典维护
import MaintDeptQcTemplate from '@/components/DictionaryMaint/MaintDeptQcTemplate/MaintDeptQcTemplate'
import MaintQcDictionary from '@/components/DictionaryMaint/MaintQcDictionary/MaintQcDictionary'
import MaintQcTemplate from '@/components/DictionaryMaint/MaintQcTemplate/MaintQcTemplate'
import ModifyTemplate from '@/components/DictionaryMaint/ModifyTemplate/ModifyTemplate'

// 系统维护
import MenuManage from '@/components/SystemMaint/MenuManage/MenuManage'
import ParamsConfig from '@/components/SystemMaint/ParamsConfig/ParamsConfig'
import PasswordChange from '@/components/SystemMaint/PasswordChange/PasswordChange'
import RolesManage from '@/components/SystemMaint/RolesManage/RolesManage'
import UserManage from '@/components/SystemMaint/UserManage/UserManage'

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
      redirect: '/qualityControl',
      component: Home
    },
    {
      name: 'Test',
      path: '/test',
      component: Test
    },
    // 质控-总览
    {
      name: 'QualityControl',
      path: '/qualityControl',
      component: Home,
      redirect: '/qualityControl/overview',
      children: [
        {
          name: 'SectionQcInfoSum1',
          path: 'sectionQcInfoSum1',
          component: SectionQcInfoSum1
        },
        {
          name: 'EndQcInfoSum1',
          path: 'endQcInfoSum1',
          component: EndQcInfoSum1
        },
        {
          name: 'SpotCheck',
          path: 'spotCheck',
          component: SpotCheck
        },
        {
          name: 'CaseHistoryReview',
          path: 'caseHistoryReview',
          component: CaseHistoryReview
        },
        {
          name: 'DeptQcInfo',
          path: 'deptQcInfo/:type',
          component: DeptQcInfo
        },
        {
          name: 'Overview',
          path: 'overview',
          redirect: '/qualityControl/overview/queryByDoc',
          component: ComponentContent,
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
        }
      ]
    },
    // 统计
    {
      name: 'Statistics',
      path: '/statistics',
      component: Home,
      redirect: '/statistics/sectionQcInfoSum2',
      children: [
        {
          name: 'SectionQcInfoSum2',
          path: 'sectionQcInfoSum2',
          component: SectionQcInfoSum2
        },
        {
          name: 'EndQcInfoSum2',
          path: 'endQcInfoSum2',
          component: EndQcInfoSum2
        },
        {
          name: 'EndScore',
          path: 'endScore',
          component: EndScore
        },
        {
          name: 'QcDetailSearch',
          path: 'qcDetailSearch',
          component: QcDetailSearch
        },
        {
          name: 'QcerWorkload',
          path: 'qcerWorkload',
          component: QcerWorkload
        },
        {
          name: 'RunTimeLimitMonitor',
          path: 'runTimeLimitMonitor',
          component: RunTimeLimitMonitor
        },
        {
          name: 'SearchByDefect',
          path: 'searchByDefect',
          component: SearchByDefect
        },
        {
          name: 'SearchByDept',
          path: 'searchByDept',
          component: SearchByDept
        }
      ]
    },
    // 字典维护
    {
      name: 'DictionaryMaint',
      path: '/dictionaryMaint',
      component: Home,
      redirect: '/dictionaryMaint/maintQcDictionary',
      children: [
        {
          name: 'MaintQcDictionary',
          path: 'maintQcDictionary',
          component: MaintQcDictionary
        },
        {
          name: 'MaintQcTemplate',
          path: 'maintQcTemplate',
          component: MaintQcTemplate
        },
        {
          name: 'MaintDeptQcTemplate',
          path: 'maintDeptQcTemplate',
          component: MaintDeptQcTemplate
        },
        {
          name: 'ModifyTemplate',
          path: 'modifyTemplate',
          component: ModifyTemplate
        }
      ]
    },
    // 系统维护
    {
      name: 'SystemMaint',
      path: '/systemMaint',
      component: Home,
      redirect: '/systemMaint/userManage',
      children: [
        {
          name: 'UserManage',
          path: 'userManage',
          component: UserManage
        },
        {
          name: 'ParamsConfig',
          path: 'paramsConfig',
          component: ParamsConfig
        },
        {
          name: 'PasswordChange',
          path: 'passwordChange',
          component: PasswordChange
        },
        {
          name: 'MenuManage',
          path: 'menuManage',
          component: MenuManage
        },
        {
          name: 'RolesManage',
          path: 'rolesManage',
          component: RolesManage
        }
      ]
    }
  ]
})
