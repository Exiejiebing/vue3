<template>
  <div class="base-info" v-if="Object.keys(info).length !== 0">
    <div class="info-title">{{info.title}}</div>
    <div class="info-price">
      <span class="p-info-price">{{info.price}}</span>
      <span class="o-info-price">{{info.oldPrice}}</span>
      <span class="d-info-price" :style="{background: bandStyle}">{{info.discountDesc}}</span>
    </div>
    <div class="info-columns">
      <span>{{info.columns[0]}}</span>
      <span>{{info.columns[1]}}</span>
      <span>{{info.services[info.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in info.services.length-1" :key="index">
        <img :src="info.services[index-1].icon" v-if="info.services[index-1].icon">
        <span>{{info.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      info: {
        type: Object,
        default: {}
      }
    },
    methods: {
      // 绑定折扣描述背景颜色
      bandStyle() {
        return this.info.discountBgColor ? this.info.discountBgColor : 'var(--color-high-text)'
      }
    }
  }
</script>

<style scoped>
  .base-info {
    padding: 10px 8px;
    margin-top: 5px;
    color: #999999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #222222;
  }
  .info-price {
    margin-top: 10px;
  }
  .info-price .p-info-price {
    font-size: 24px;
    color: var(--color-high-text);
  }
  .info-price .o-info-price {
    font-size: 13px;
    margin-left: 10px;
    text-decoration: line-through;
  }
  .info-price .d-info-price {
    font-size: 12px;
    margin-left: 5px;
    color: #ffffff;
    padding: 2px 5px;
    border-radius: 8px;

    position: relative;
    top: -5px;
  }
  .info-columns {
    display: flex;
    margin-top: 15px;
    font-size: 13px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;
  }
  .info-services {
    display: flex;
    justify-content: space-between;
  }
  .info-services img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .info-services span {
    font-size: 12px;
    margin-left: 2px;
    line-height: 60px;
  }
</style>
