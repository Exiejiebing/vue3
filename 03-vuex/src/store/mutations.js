import * as types from './mutations_type'
import vue from 'vue'

export default {
  [types.INCREMENT](state) {
    state.counter++
  },
  [types.DECREMENT](state) {
    state.counter--
  },
  // payload: 负载（count、stu）
  [types.ADDCOUNTER](state, count) {
    console.log(count)
    state.counter += count
  },
  [types.ADDSTUDENT](state, stu) {
    state.students.push(stu)
  },
  [types.UPDATEINFO](state) {
    // 1.可以响应式修改
    state.info.name = 'ices'
    // 2.通过数组方式无法响应式添加元素
    // state.info['address'] = '洛杉矶'
    // 3. 通过vue的set()方法可以响应式添加数据
    // vue.set(state.info, 'address', '洛杉矶')
    // 4. 无法做到响应式删除数据
    // delete state.info.age
    // 5. 通过vue的delete()方法可以做到响应式删除数据
    // vue.delete(state.info, 'age')

    // 如果通过异步处理数据，mutation无法做到响应式修改
    /*setTimeout(() => {
      state.info.name = 'ices'
    })*/
  }
}
