<template>
  <div>
    <h2>我的档案</h2>
    <p>{{$route.query}}</p>
    <ul>
      <li>{{info.name}}</li>
      <li>{{info.age}}</li>
      <li>{{info.height}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      info: this.$route.query
    }
  }
}
</script>

<style scoped>

</style>
