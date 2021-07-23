<template>
  <div class="shop-info" v-if="Object.keys(info).length !== 0">
    <div class="shop-info-top">
      <img :src="info.logo" alt="">
      <span>{{info.name}}</span>
    </div>
    <div class="shop-info-middle">
      <div class="shop-info-item shop-info-item-left">
        <div class="info-sells">
          <div class="sells-count">{{info.sells | sellCountFilters}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{info.goodsCount}}</div>
          <div class="goods_text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-info-item shop-info-item-right">
        <div class="info-score" v-for="item in info.score">
          <span>{{item.name}}</span>
          <span class="score" :class="{'score-better': item.isBetter}">{{item.score}}</span>
          <span class="better" :class="{'better-better': item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-info-bottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      info: {
        type: Object,
        default: {}
      }
    },
    filters: {
      // 过滤销量数字
      sellCountFilters(value) {
        if (value < 10000) return value
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 25px 10px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-info-top {
    line-height: 45px;
    display: flex;
    align-items: center;
  }
  .shop-info-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-info-top span {
    margin-left: 10px;
    vertical-align: center;
  }
  .shop-info-middle {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .shop-info-item {
    flex: 1;
  }
  .shop-info-item-left {
    display: flex;
    justify-content: space-evenly;
    color: #333333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }
  .info-sells, info-goods {
    font-size: 18px;
  }
  .sells-text, .goods_text {
    font-size: 12px;
    margin-top: 10px;
  }
  .shop-info-item-right {
    font-size: 13px;
    color: #333333;
  }
  .shop-info-item-right .info-score {
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
  }
  .info-score .score {
    color: #5ea732;
  }
  .info-score .score-better {
    color: #f13e3a;
  }
  .info-score .better {
    background: #5ea732;
    color: #ffffff;
    padding: 1px;
    position: relative;
    top: -2px;
  }
  .info-score .better-better {
    background: #f13e3a;
  }
  .shop-info-bottom {
    font-size: 12px;
    text-align: center;
  }
  .shop-info-bottom span {
    padding: 8px 40px;
    display: inline-block;
    background: #dbdfe2;
    border-radius: 10px;
    font-size: 14px;
    margin-top: 10px;
  }
</style>
