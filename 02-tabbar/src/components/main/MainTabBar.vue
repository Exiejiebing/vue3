<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="item-icon" src="~assets/images/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="item-icon" src="~assets/images/tabbar/category.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/category_active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="item-icon" src="~assets/images/tabbar/cart.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/cart_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="item-icon" src="~assets/images/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/images/tabbar/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
