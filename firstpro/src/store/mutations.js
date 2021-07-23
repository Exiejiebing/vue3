import * as type from './mutations_type'

export default {
  // 设置imageLoad的状态
  [type.SETIMAGELOADSTATUS](state, payload) {
    state.imageLoad = payload.bool
  },
  // 修改购物车中存在商品的数量
  [type.ADD_CART_COUNT](state, payload) {
    payload.count += 1
  },
  // 加入购物车
  [type.ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  },
  // 购物车列表（全选/全不选）
  [type.SETCARTCHECKED](state, payload) {
    state.cartList.forEach(item => {
      item.checked = payload
    })
  }
}
