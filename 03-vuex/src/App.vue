<template>
  <div id="app">
    <h2>-----------APP：moduleA中的的内容-----------</h2>
    <h2>{{$store.state.moduleA.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>-----------APP：info的内容-----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>-----------APP 的内容-----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-----------APP：getters的内容-----------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLen}}</h2>
    <h2>{{$store.getters.moreAgestu(30)}}</h2>
    <h2>{{$store.getters.stuById(110)}}</h2>

    <h2>-----------Hello World 的内容-----------</h2>
    <hello-world/>

  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld'
import * as types from 'store/mutations_type'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    add() {
      this.$store.commit(types.INCREMENT)
    },
    reduce() {
      this.$store.commit(types.DECREMENT)
    },
    addCount(count) {
      // 1. mutations普通的提交风格：以这种方式提交数据，count是对应数据
      //this.$store.commit(types.ADDCOUNTER, count)

      // 2. 特殊的提交风格：以这种方式提交数据，count是一个对象
      this.$store.commit({
        type: types.ADDCOUNTER,
        count
      })
    },
    addStudent() {
      const stu = {id: 114, name: 'ser', age: 32}
      this.$store.commit(types.ADDSTUDENT, stu)
    },
    updateInfo() {
      // 1.mutations
      // this.$store.commit(types.UPDATEINFO)
      // 2.actions
      // this.$store.dispatch('aUpdateInfo', '我是payload')
      // 方式一
      /*this.$store.dispatch('aUpdateInfo', {
        message: '我是携带的信息',
        success: () => {
          console.log('成功完成了');
        }
      })*/
      // 方式二：使用Promise
      this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log('成功完成了');
          console.log(res);
        })
    },
    updateName() {
      this.$store.commit(types.UPDARENAME, 'lisese')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
