import Vue from "vue";
import Vuex from "vuex"

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex)

const state = {
  /**
   * 判断是否加载图片
   */
  imageLoad: false,
  /**
   * 购物车列表
   */
  cartList: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
