export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  more20stu(state) {
    return state.students.filter(stu => stu.age > 20)
  },
  more20stuLen(state, getters) {
    return getters.more20stu.length
  },
  moreAgestu(state) {
    // 方式一
    /*return function (age) {
      return state.students.filter(stu => stu.age > age)
    }*/
    // 方式二：简写
    return age => {
      return state.students.filter(stu => stu.age > age)
    }
  },
  stuById(state) {
    return id => {
      return state.students.find(stu => stu.id === id)
    }
  }
}
