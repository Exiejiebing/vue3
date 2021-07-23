import Vue from 'vue'
import VueRouter from "vue-router";
import router from "../../../01-vuecli2/src/router";

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const GoodsDetail = () => import('views/goodsdetail/GoodsDetail')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '购物街',
      isShowFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/detail',
    component: GoodsDetail,
    meta: {
      isShowFooter: false
    }
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})
