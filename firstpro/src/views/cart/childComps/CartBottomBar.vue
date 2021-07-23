<template>
  <div class="cart-bottom">
    <div class="selector-all">
      <cart-check-button v-model="isSelectAll" @click.native="checkBtnClick"/>
      <span>全选</span>
    </div>
    <div class="bottom-total">合计: ¥{{totalPrice}}</div>
    <div class="bottom-compute">去计算({{amount}})</div>
  </div>
</template>

<script>
  import CartCheckButton from "./CartCheckButton";

  import {SETCARTCHECKED} from "store/mutations_type"
  import {mapGetters} from "vuex"

  export default {
    name: "CartBottomBar",
    components: {
      CartCheckButton
    },
    computed: {
      ...mapGetters(['getCartListData']),
      // 判断选中状态
      isSelectAll() {
        if (this.getCartListData.length === 0) return false
        // 1. 使用filter
        // return !(this.getCartListData.filter(item => !item.checked).length)
        // 2. 使用find
        return !this.getCartListData.find(item => !item.checked)
        // 3. 使用普通遍历
        /*for (let item of this.getCartListData) {
          if (!item.checked) {
            return false
          }
        }
        return true*/
      },
      // 合计
      totalPrice() {
        return this.getCartListData.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)
      },
      // 去计算
      amount() {
        return this.getCartListData.filter(item => item.checked).length
      }
    },
    methods: {
      checkBtnClick() {
        // 判断是否有未选中状态的商品
        // const isSelectAll = this.$store.getters.getCartListData.find(item => !item.checked)
        /**
         * 如果存在未选择状态的，则修改全部状态为true
         * 否则修改全部状态为false
         */
        if (this.isSelectAll) {
          // 全部选中，变为全部不选中
          this.$store.commit(SETCARTCHECKED, false)
        }else {
          // 存在一个不选中，变为全部选中
          this.$store.commit(SETCARTCHECKED, true)
        }
        // 不可用，会发生冲突
        // this.getCartListData.forEach(item => item.checked = !this.isSelectAll)
      }
    },

  }
</script>

<style scoped>
  .cart-bottom {
    width: 100%;
    height: 44px;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
    border-top: 1px solid #eeeeee;
    padding-left: 30px;
    justify-content: space-between;
  }
  .selector-all {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selector-all span {
    padding-left: 10px;
    font-size: 14px;
    color: #888888;
    line-height: 44px;
  }
  .bottom-total {
    font-size: 16px;
    margin-left: 15px;
    color: #666666;
    line-height: 44px;
  }
  .bottom-compute {
    background: orangered;
    color: #ffffff;
    width: 100px;
    height: 44px;
    text-align: center;
    font-size: 14px;
    line-height: 44px;
  }
</style>
