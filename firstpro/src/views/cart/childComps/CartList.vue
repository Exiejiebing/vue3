<template>
  <div>
    <cart-list-item :goods="item" :key="item.id" v-for="item in list"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";

  import {mapGetters} from "vuex"

  export default {
    name: "CartList",
    computed: {
      ...mapGetters({
        list: 'getCartListData'
      })
    },
    components: {
      CartListItem,
    }
  }
</script>

<style scoped>

</style>
