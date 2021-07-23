<template>
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{length}})</div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import {mapGetters} from "vuex"

  export default {
    name: "CartNavBar",
    computed: {
      ...mapGetters({
        length: 'cartListLength'
      })
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar {
    background: var(--color-tint);
    color: #ffffff;
  }
</style>
