// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

/*import Home from "../components/Home";
import About from "../components/About";*/
// 路由的懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.user(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // 元数据，描述数据的数据
    meta: {
      title: '首页'
    },
    children: [
      /*{
        path: '',
        redirect: 'news'
      },*/
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ],
    // 路由独享守卫
    beforeEach: (to, from, next) => {
      next()
    },
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:user_id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '个人'
    }
  }
]

const router = new VueRouter({
  // 配置路由和插件之间的映射关系
  routes,
  // 选择H5的history
  mode: 'history'
})

// 前置守卫（guard）——全局守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // next()必须调用
  next()
})

// 后置钩子（hook）——全局守卫
/*router.afterEach((to, from) => {

})*/

// 3.将router对象传入到Vue实例
export default router
