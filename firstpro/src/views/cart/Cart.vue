<template>
  <div id="cart">
    <cart-nav-bar/>
    <scroll ref="scroll" class="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import CartNavBar from "./childComps/CartNavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "Cart",
    components: {
      CartNavBar,
      CartList,
      CartBottomBar,
      Scroll
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
  }
  .scroll {
    position: absolute;
    top: 40px;
    bottom: 93px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
