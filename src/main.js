import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

// 在线生成主题色下载引入即可 https://elementui.github.io/theme-chalk-preview/#/zh-CN
import '@/assets/red-theme/index.css' // 红色主题颜色

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog' // error log
import './permission' // permission control
// import './mock' // simulation data

import * as filters from './filters' // global filters

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// 全局引用使用 DataTables 和 DataTablesServer
import VueDataTables from 'vue-data-tables'
Vue.use(VueDataTables)

// 全局引用树形表组件 单一模块里不用再引用
import TreeTableComponent from 'element-ui-tree-table'
import 'element-ui-tree-table/dist/index.css'
Vue.use(TreeTableComponent, {
  prefix: 'i' // 可选
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
