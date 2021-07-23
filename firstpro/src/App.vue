<template>
  <div id="app">
    <!--  保留离开时位置信息  -->
    <keep-alive exclude="GoodsDetail">
      <router-view/>
    </keep-alive>
    <main-tab-bar v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
