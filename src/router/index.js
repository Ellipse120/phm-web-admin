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
    redirect: '/example/table1'
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table1',
    name: 'Example',
    meta: { title: '健康监测', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table1',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '状态全景', icon: 'table' }
      },
      {
        path: 'tree1',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '车载故障', icon: 'tree' }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/example2',
    component: Layout,
    redirect: '/example2/table',
    name: 'Example',
    meta: { title: '预警预测', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table2',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '故障预警', icon: 'table' }
      },
      {
        path: 'tree2',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '跟踪处置', icon: 'tree' }
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
        component: () => import('@/views/dashboard/index'),
        meta: { title: '视情维修', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/example3',
    component: Layout,
    redirect: '/example3/table',
    name: 'Example',
    meta: { title: '轮对镟修', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table3',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '换轮轮廓计划', icon: 'table' }
      },
      {
        path: 'tree3',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '参数趋势分析', icon: 'tree' }
      },
      {
        path: 'tree4',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '车轮多边形监测', icon: 'tree' }
      },
      {
        path: 'tree5',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '等效锥度监控', icon: 'tree' }
      },
      {
        path: 'table4',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '接触疲劳监控', icon: 'table' }
      },
      {
        path: 'tree6',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '磨耗规律分析', icon: 'tree' }
      },
      {
        path: 'tree7',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '镟修建议计划编制', icon: 'tree' }
      },
      {
        path: 'tree8',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '径向跳动监控', icon: 'tree' }
      }
    ]
  },
  {
    path: '/example1',
    component: Layout,
    redirect: '/example1/table5',
    name: 'Example',
    meta: { title: '应急辅助', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table5',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '全景图', icon: 'table' }
      },
      {
        path: 'tree9',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '应急指挥辅助模块', icon: 'tree' }
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
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '数据分析', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/example6',
    component: Layout,
    redirect: '/example6/table6',
    name: 'Example',
    meta: { title: '维修支持', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table6',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '重点故障管理', icon: 'table' }
      },
      {
        path: 'tree10',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '机检一级修管理', icon: 'tree' }
      },
      {
        path: 'table7',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '修程修制', icon: 'table' }
      },
      {
        path: 'tree11',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '高级修送修卡控', icon: 'tree' }
      },
      {
        path: 'tree12',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '健康评估', icon: 'tree' }
      }
    ]
  },
  {
    path: '/example7',
    component: Layout,
    redirect: '/example7/table',
    name: 'Example',
    meta: { title: '系统管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table8',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '车型管理', icon: 'table' }
      },
      {
        path: 'tree13',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '修程管理', icon: 'tree' }
      },
      {
        path: 'tree14',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '实时监控', icon: 'tree' }
      },
      {
        path: 'tree15',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '用户管理', icon: 'tree' }
      },
      {
        path: 'tree16',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '组织机构', icon: 'tree' }
      },
      {
        path: 'tree17',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '修改密码', icon: 'tree' }
      },
      {
        path: 'tree18',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '接口日志', icon: 'tree' }
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

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
