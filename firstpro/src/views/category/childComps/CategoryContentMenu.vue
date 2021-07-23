<template>
  <div class="cat-con-menu" v-if="menu.list">
    <div class="m-item" v-for="item in menu.list">
      <a :href="item.link">
        <img class="item-img" :src="item.image" @load="imageLoad">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryContentMenu",
    props: {
      menu: {
        type: Object,
        default: {}
      }
    },
    methods: {
      imageLoad() {
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .cat-con-menu {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-top: 20px;
  }
  .cat-con-menu .m-item {
    width: 33%;
    list-style: none;
    margin-bottom: 10px;
  }
  .cat-con-menu .item-img{
    width: 80%;
    border-radius: 50%;
  }
  .cat-con-menu .item-text {
    font-size: 12px;
    margin-top: 15px;
  }
</style>
