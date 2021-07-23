export default {
  // 购物车列表数量
  cartListLength(state) {
    return state.cartList.length
  },
  // 获取购物车列表
  getCartListData(state) {
    return state.cartList
  },
}
