import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store"
import VueLazyload from "vue-lazyload"
import toast from "components/common/toast"
import Fastclick from "fastclick"

Vue.config.productionTip = false
// 用于事件总线
Vue.prototype.$bus = new Vue()

// 网页标题--默认使用路由设置标题
router.beforeEach((to, from, next) => {
  // 路由发现变化时修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 安装图片懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('assets/images/common/placeholder.png')
})
// 安装toast插件
Vue.use(toast)
// 解决移动端300ms的延迟
Fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
