import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import './plugins/element.js'
import './assets/css/global.css'
import util from './assets/js/global'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
// 配置请求的根路径
axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$http = axios
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)
  const mm = (dt.getMinutes() + '').padStart(2, 0)
  const ss = (dt.getSeconds() + '').padStart(2, 0)
  return `${mm}:${ss}`
})
Vue.filter('format', function (val) {
  const interval = Math.floor(val)
  const minute = (Math.floor(interval / 60)).toString().padStart(2, '0')
  const second = (interval % 60).toString().padStart(2, '0')
  return `${minute}:${second}`
})
Vue.config.productionTip = false
Vue.prototype.util = util
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.png',
  attempt: '1'
})
new Vue({
  router,
  // 将创建的共享数据对象，挂载到Vue实例中
  // 所有组件，就可以直接从store中获取全局的数据了
  store,
  render: h => h(App)
}).$mount('#app')
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
