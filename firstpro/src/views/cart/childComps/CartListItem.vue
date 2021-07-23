<template>
  <div class="cart-item">
    <div class="item-selector">
      <cart-check-button v-model="goods.checked" @click.native="checkedChange"/>
    </div>
    <div class="item-img">
      <img :src="goods.images">
    </div>
    <div class="item-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-desc">商品描述: {{goods.desc}}</div>
      <div class="info-bottom">
        <div class="bottom-price left">¥{{goods.price}}</div>
        <div class="right">×{{goods.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CartCheckButton from "./CartCheckButton";

  export default {
    name: "CartListItem",
    props: {
      goods: {
        type: Object,
        default: {}
      }
    },
    components: {
      CartCheckButton
    },
    methods: {
      checkedChange() {
        this.goods.checked = !this.goods.checked
      }
    }
  }
</script>

<style scoped>
  .cart-item {
    width: 100%;
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-img {
    padding: 5px;
  }
  .item-img img {
    width: 80px;
    height: 100px;
    border-radius: 5px;
  }
  .item-info {
    font-size: 17px;
    padding: 5px 10px;
    color: #777777;
    overflow: hidden;
    position: relative;
  }
  .info-title, .info-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .info-desc {
    font-size: 14px;
    margin-top: 15px;
    color: #666666;
  }
  .info-bottom {
    position: absolute;
    bottom: 5px;
    left: 10px;
    right: 10px;
    margin-top: 5px;
  }
  .bottom-price {
    color: orangered;
  }

</style>
