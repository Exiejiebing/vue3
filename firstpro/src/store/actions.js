import * as type from './mutations_type'

export default {
  // 加入购物车
  addToCart({state, commit}, payload) {
    return new Promise((resolve, reject) => {
      let list = state.cartList.find(item => item.id === payload.id)
      if (list) {
        commit(type.ADD_CART_COUNT, list)
      }else {
        commit(type.ADD_TO_CART, payload)
      }
      resolve('加入购物车成功')
    })
  },

}
