<template>
  <div>
    <h2>我是用户</h2>
    <p>{{$route.params.user_id}}</p>
    <p>{{user_id}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    user_id() {
      return this.$route.params.user_id
    }
  },
}
</script>

<style scoped>

</style>
