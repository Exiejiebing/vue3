<template>
  <nav-bar>
    <div slot="left" class="detail-nav-img" @click="detailBack">
      <img src="~assets/images/common/back.svg" alt="">
    </div>
    <div slot="center" class="detail-item">
      <span v-for="(item, index) in titles"
            :class="{active: index === currentIndex}" @click="itemClick(index)">
        {{item}}
      </span>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      detailBack() {
        this.$router.back()
      },
      itemClick(index) {
        this.currentIndex = index
        this.$emit('navBarClick', index)
      }
    }
  }
</script>

<style scoped>
  .detail-nav-img {
    margin-top: 7px;
    margin-left: -10px;
  }
  .detail-item {
    display: flex;
    font-size: 12px;
  }
  .detail-item span {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
</style>
