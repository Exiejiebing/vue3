<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="item-active-icon" v-else><slot name="item-icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
  }
  .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
  }
  .item-text {
    text-align: center;
    font-size: 12px;
    margin-top: 3px;
  }
</style>
