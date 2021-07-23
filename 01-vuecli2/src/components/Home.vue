<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news" replace>新闻</router-link>
    <router-link to="/home/message" replace>消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    // console.log('crated');
  },
  // activated和deactivated 只有该组件被保持了状态，使用keep-alive时，才有效
  activated() {
    // console.log('activated');
    this.$router.push(this.path)
  },
  deactivated() {
    // console.log('deactivated');
  },
  // 组件内守卫
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path;
    next()
  }
}
</script>

<style scoped>

</style>
