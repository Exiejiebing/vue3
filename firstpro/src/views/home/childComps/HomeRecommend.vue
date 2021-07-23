<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="home-recommend-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .home-recommend {
    display: flex;
    text-align: center;
    border-bottom: 8px solid #eeeeee;
  }
  .home-recommend-item {
    flex: 1;
    padding: 10px 10px 30px;
  }
  .home-recommend-item img {
    width: 100%;
  }
  .home-recommend-text {
    font-size: 12px;
    margin-top: 10px;
  }
</style>
