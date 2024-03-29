import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
// import Layout from '@/layout'
import Layout from '@/layout/index-new'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * Lazy-loads view components, but with better UX. A loading view
 * will be used if the component takes a while to load, falling
 * back to a timeout view in case the page fails to load. You can
 * use this component to lazy-load a route with:
 * @param asyncView
 * @returns {Promise<{functional: boolean, render(*, {data?: *, children?: *}): *}>|VNode}
 */
function lazyLoadView (asyncView) {
  const asyncHandler = () => ({
    component: asyncView,
    loading: require('@/views/loading').default,
    delay: 2e2, // Default: 200 (milliseconds).
    error: require('@/views/error').default,
    timeout: 4e4 // Default: Infinity (milliseconds). Time before giving up trying to load the component.
  })

  return Promise.resolve({
    functional: true,
    render (h, { data, children }) {
      return h(asyncHandler, data, children)
    }
  })
}

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/temp-path/real-time-fault'
  },
  {
    path: '/temp-path',
    component: Layout,
    redirect: '/temp-path/real-time-fault',
    name: 'TempPath',
    meta: { title: '数据查看' },
    children: [
      {
        path: 'real-time-fault',
        name: 'RealTimeFault',
        component: () => lazyLoadView(import('@/views/real-time-state/monitor')),
        meta: { title: '实时故障' }
      },
      {
        path: 'wtds-resolution-failure-detail',
        name: 'WTDSResolutionFailureDetail',
        component: () => lazyLoadView(import('@/views/wtds-resolution-failure-detail/index')),
        meta: { title: 'WTDS解析失败详情' }
      },
      {
        path: 'real-time-state',
        name: 'RealTimeState',
        component: () => lazyLoadView(import('@/views/real-time-state/index')),
        meta: { title: '实时状态' }
      }
    ]
  }
]

/**
 * checkPermissionRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const checkPermissionRoutes = [
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table1',
    meta: { title: '健康监测', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table1',
        name: 'Table',
        component: () => lazyLoadView(import('@/views/table/index')),
        meta: { title: '状态全景' }
      },
      {
        path: 'tree1',
        name: 'Tree',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '车载故障' }
      },
      {
        path: 'test',
        name: 'Test',
        component: () => lazyLoadView(import('@/views/test/line-chart')),
        meta: { title: 'ECharts' }
      },
      {
        path: 'mirage-todos',
        name: 'MirageTodos',
        component: () => lazyLoadView(import('@/views/mirage-todos')),
        meta: { title: 'MirageTodos' }
      }
    ]
  },
  {
    path: '/example2',
    component: Layout,
    redirect: '/example2/table',
    meta: { title: '预警预测', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table2',
        name: 'Table2',
        component: () => lazyLoadView(import('@/views/table/index')),
        meta: { title: '故障预警' }
      },
      {
        path: 'tree2',
        name: 'Tree2',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '跟踪处置' }
      }
    ]
  },
  {
    path: '/form4',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => lazyLoadView(import('@/views/dashboard/index')),
        meta: { title: '视情维修' }
      }
    ]
  },
  {
    path: '/example3',
    component: Layout,
    redirect: '/example3/table',
    meta: { title: '轮对镟修', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table3',
        name: 'Table3',
        component: () => lazyLoadView(import('@/views/table/index')),
        meta: { title: '换轮轮廓计划' }
      },
      {
        path: 'tree3',
        name: 'Tree3',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '参数趋势分析' }
      },
      {
        path: 'tree4',
        name: 'Tree4',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '车轮多边形监测' }
      },
      {
        path: 'tree5',
        name: 'Tree5',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '等效锥度监控' }
      },
      {
        path: 'table4',
        name: 'Table4',
        component: () => lazyLoadView(import('@/views/table/index')),
        meta: { title: '接触疲劳监控' }
      },
      {
        path: 'tree6',
        name: 'Tree6',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '磨耗规律分析' }
      },
      {
        path: 'tree7',
        name: 'Tree7',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '镟修建议计划编制' }
      },
      {
        path: 'tree8',
        name: 'Tree8',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '径向跳动监控' }
      }
    ]
  },
  {
    path: '/example1',
    component: Layout,
    redirect: '/example1/table5',
    meta: { title: '应急辅助', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table5',
        name: 'Table5',
        component: () => lazyLoadView(import('@/views/table/index')),
        meta: { title: '全景图' }
      },
      {
        path: 'tree9',
        name: 'Tree9',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '应急指挥辅助模块' }
      }
    ]
  },
  {
    path: '/form2',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard2',
        component: () => lazyLoadView(import('@/views/dashboard/index')),
        meta: { title: '数据分析' }
      }
    ]
  },
  {
    path: '/example6',
    component: Layout,
    redirect: '/example6/table6',
    meta: { title: '维修支持', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table6',
        name: 'Table6',
        component: () => lazyLoadView(import('@/views/table/index')),
        meta: { title: '重点故障管理' }
      },
      {
        path: 'tree10',
        name: 'Tree10',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '机检一级修管理' }
      },
      {
        path: 'table7',
        name: 'Table7',
        component: () => lazyLoadView(import('@/views/table/index')),
        meta: { title: '修程修制' }
      },
      {
        path: 'tree11',
        name: 'Tree11',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '高级修送修卡控' }
      },
      {
        path: 'tree12',
        name: 'Tree12',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '健康评估' }
      }
    ]
  },
  {
    path: '/example7',
    component: Layout,
    redirect: '/example7/table',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table8',
        name: 'Table8',
        component: () => lazyLoadView(import('@/views/table/index')),
        meta: { title: '车型管理' }
      },
      {
        path: 'tree13',
        name: 'Tree13',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '修程管理' }
      },
      {
        path: 'tree14',
        name: 'Tree14',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '实时监控' }
      },
      {
        path: 'tree15',
        name: 'Tree15',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '用户管理' }
      },
      {
        path: 'tree16',
        name: 'Tree16',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '组织机构' }
      },
      {
        path: 'tree17',
        name: 'Tree17',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '修改密码' }
      },
      {
        path: 'tree18',
        name: 'Tree18',
        component: () => lazyLoadView(import('@/views/tree/index')),
        meta: { title: '接口日志' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
