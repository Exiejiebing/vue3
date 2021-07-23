import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import moduleA from "./modules/moduleA";

Vue.use(Vuex)

// 保存状态：state中的数据是响应式的，但是前提是必须在state中定义好
// 这些属性会被加入到响应式系统中，而响应式系统会监听属性的变化。当属性发生变化时，会通知所有界面中用到该属性的地方，让界面发生刷新
const state = {
  counter: 1000,
  students: [
    {id: 110, name: 'why', age: 10},
    {id: 111, name: 'xow', age: 22},
    {id: 112, name: 'arz', age: 42},
    {id: 113, name: 'tew', age: 53},
  ],
  info: {
    name: 'ice',
    age: 26,
    height: 150
  }
}

export default new Vuex.Store({
  state,
  // 定义方法修改state中的值，mutation中的数据必须是同步的
  mutations,
  // 与computed计算属性类似，用来做逻辑运算
  getters,
  // 处理异步
  actions,
  // 模块
  modules: {
    moduleA
  }
})

