import * as types from './mutations_type'
export default {
  // context: 上下文
  aUpdateInfo(context, payload) {
    // 方式一
    /*setTimeout(() => {
      // context.state.info.name = 'ices'
      // 异步处理--响应式
      context.commit(types.UPDATEINFO)
      // console.log(payload)
      console.log(payload.message);
      payload.success();
    }, 1000)*/

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(types.UPDATEINFO)
        console.log(payload)
        resolve('11111')
      }, 1000)
    })
  },
  // ES6写法
  test({state, commit, getters}) {
    // 后续代码

  }
}
