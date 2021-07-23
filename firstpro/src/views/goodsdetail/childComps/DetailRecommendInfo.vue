<template>
  <div class="recommend-info">
    <div class="recommend-info-hot">热门推荐</div>
    <goods-list :goods="info"/>
  </div>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";

  export default {
    name: "DetailRecommendInfo",
    props: {
      info: {
        type: Array,
        default: []
      }
    },
    components: {
      GoodsList
    }
  }
</script>

<style scoped>
  .recommend-info {
    padding: 5px;
  }
  .recommend-info-hot {
    margin-left: 10px;
    color: #333333;
    font-size: 15px;
    line-height: 40px;
  }
</style>
