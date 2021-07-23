<template>
  <div class="back-top" @click="backTopClick">
    <img src="~assets/images/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods: {
      backTopClick() {
        this.$emit('backTop')
      }
    }
  }
</script>

<style scoped>
  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>
