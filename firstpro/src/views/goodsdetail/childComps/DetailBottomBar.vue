<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="left-img img-position_1"></i>
        <span class="left-text">客服</span>
      </div>
      <div>
        <i class="left-img img-position_2"></i>
        <span class="left-text">店铺</span>
      </div>
      <div>
        <i class="left-img img-position_3"></i>
        <span class="left-text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart() {
        this.$emit('addToCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    background: #ffffff;
    height: 58px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item>div {
    flex: 1;
  }
  .bar-left .left-img {
    width: 22px;
    height: 22px;
    display: block;
    margin: 10px auto 3px;
    background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
  }
  .bar-left .img-position_1 {
    background-position: 0 -54px;
  }
  .bar-left .img-position_2 {
    background-position: 0 -98px;
  }
  .bar-left, .left-text {
    font-size: 13px;
    padding-top: 2px;
  }
  .bar-right {
    font-size: 15px;
    color: #ffffff;
    line-height: 58px;
  }
  .bar-right .cart {
    background: #ffe817;
  }
  .bar-right .buy {
    background: #f69;
  }
</style>
