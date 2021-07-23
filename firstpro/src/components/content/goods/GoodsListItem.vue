<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="getImg" :key="getImg"  @load="imageLoad">
    <div class="goods-item-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default: []
      }
    },
    computed: {
      getImg() {
        return this.goodsItem.image || this.goodsItem.img ||  this.goodsItem.show.img
      }
    },
    methods: {
      imageLoad() {
        /**
         * 事件总线--用于监听图片的生成
         */
        this.$bus.$emit('itemImageLoad')
      },
      itemClick() {
        let id = ''
        if (this.goodsItem.iid) {
          id = this.goodsItem.iid
        }else {
          id = this.goodsItem.shop_id
        }
        this.$router.push({path: '/detail', query: {id}})
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    flex: auto;
    width: 50%;
    padding: 0 0 10px 5px;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-item-info {
    font-size: 12px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
  }
  .goods-item-info p {
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 3px;
  }
  .goods-item-info .price {
    color: var(--color-tint);
    margin-right: 30px;
  }
  .goods-item-info .collect {
    position: relative;
  }
  .goods-item-info .collect::before {
    width: 14px;
    height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
    position: absolute;
    left: -15px;
    top: 0;
    content: '';
  }
</style>
