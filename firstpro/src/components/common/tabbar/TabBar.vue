<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    background: #f6f6f6;
    height: 49px;
    text-align: center;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #eee;
    box-shadow: 0 -1px 1px rgb(150, 150, 150, .08);
  }
</style>
