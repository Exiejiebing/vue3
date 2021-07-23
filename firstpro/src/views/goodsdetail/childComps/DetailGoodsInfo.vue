<template>
  <div class="goods-info" v-if="Object.keys(info).length !== 0">
    <div class="goods-info-desc">
      <div class="goods-info-desc-start"></div>
      <div class="goods-info-desc-center">{{info.desc}}</div>
      <div class="goods-info-desc-end"></div>
    </div>
    <div class="goods-info-key">{{info.detailImage[0].key}}</div>
    <div class="goods-info-list" >
      <img v-for="item in info.detailImage[0].list" :src="item" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      info: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      imageLoad() {
        /**
         * 等到图片加载完才进行事件的发送
         * 另外一种方法：可以用vuex实现
         */
        /*if (++this.counter === this.imagesLength) {
          this.$emit('DetailGoodsImageLoad')
        }*/
        // 在父组件中直接使用封装好的mixin方法，不需要做变量监听判断
        this.$emit('DetailGoodsImageLoad')
      }
    },
    watch: {
      // 监听info的变化，计算图片的长度
      info() {
        this.imagesLength = this.info.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .goods-info-desc {
    padding: 0 15px;
  }
  .goods-info-desc .goods-info-desc-start {
    float: left;
  }
  .goods-info-desc .goods-info-desc-start, .goods-info-desc .goods-info-desc-end {
    width: 90px;
    height: 1px;
    background: #a3a3a5;
    position: relative;
  }
  .goods-info-desc .goods-info-desc-end {
    float: right;
  }
  .goods-info-desc .goods-info-desc-start::before, .goods-info-desc .goods-info-desc-end::after {
    width: 5px;
    height: 5px;
    background: #333333;
    position: absolute;
    bottom: 0;
    content: '';
  }
  .goods-info-desc .goods-info-desc-end::after {
    right: 0;
  }
  .goods-info-desc .goods-info-desc-center {
    padding: 15px 0;
    font-size: 14px;
  }
  .goods-info-key {
    font-size: 15px;
    color: #333333;
    margin: 10px 0 10px 15px;
  }
  .goods-info-list img {
    width: 100%;
  }
</style>
