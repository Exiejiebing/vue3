import Toast from "./Toast";

const obj = {}

obj.install = (Vue) => {
  // 1. 创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 2. 通过new方式，根据组件构造器，创建组件对象
  const _toast = new toastContrustor()
  // 3. 将组件对象手动挂载到某一元素上
  _toast.$mount(document.createElement('div'))
  // 4. total.$el对应就是div
  document.body.appendChild(_toast.$el)
  // 5. 把组件绑定到Vue实例中
  Vue.prototype.$toast =_toast
}

export default obj
