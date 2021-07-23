<template>
  <div class="icon-selector" :class="{'selector-active': checked}">
    <img src="~/assets/images/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name: "CartCheckButton",
    props: {
      value: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        checked: this.value
      }
    },
    watch: {
      value(val) {
        this.checked = val
      }
    }
  }
</script>

<style scoped>
  .icon-selector {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    border: 2px solid #cccccc;
    text-align: center;
  }
  .icon-selector img {
    width: 95%;
  }
  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
