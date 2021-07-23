<template>
  <div id="app">
    <router-link to="/home" tag="button" active-class="active" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
<!--    <button @click="indecClick">首页</button>-->
    <router-link :to="'/user/'+user_id" replace>用户</router-link>
    <router-link :to="{path: '/profile', query: {name: 'xiejiebing', age: 26, height: 150}}">档案</router-link>
    <!--
    保留状态: 1.include：只有匹配的组件会被缓存  2.exclude：任何匹配的组件都不会被缓存
    -->
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user_id: '001'
    }
  },
  methods: {
    // 通过代码方式修改路由 vue-router（3.0.1版本之后使用push或replace的方法都会报错，需要后面加入异常处理）
    /*indecClick() {
      this.$router.replace('/about').catch(err => {})
    }*/
  }
}
</script>

<style>
.router-link-active, .active {
  color: #f00000
}
</style>
