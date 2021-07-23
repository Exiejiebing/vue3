import * as types from '../mutations_type'
const state = {
  name: 'zhangsan'
}

const mutations = {
  [types.UPDARENAME](state, payload) {
    state.name = payload
  }
}

const getters = {
  fullname(state) {
    return state.name + '111'
  },
  fullname2(state, getters) {
    return getters.fullname + '222'
  },
  fullname3(state, getters, rootState) {
    return getters.fullname2 + rootState.counter
  }
}

// modules中的actions只会commit自己方法中的mutations方法
const actions = {
  aUpdateName(context) {
    setTimeout(() => {
      console.log(context)
      context.commit(types.UPDARENAME, 'wanwug')
    }, 1000)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
