import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import { makeServer } from '@/server'

import '@/icons' // icon
import '@/permission' // permission control

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

Vue.use(ElementUI, { size: 'mini', zIndex: 3000 })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
