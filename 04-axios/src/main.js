import Vue from 'vue'
import App from './App'
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios 默认是get请求
/*axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  // method: 'post',
  method: 'get',
}).then(res => {
  console.log(res);
})*/

// 单独写法
/*axios.get()
axios.post()*/

/*axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'pop',
    page: 1,
  }
}).then(res => {
  console.log(res);
})*/

// 2. axios发送并发请求
/*axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 2
  }
})])
  .then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
  }))*/

// 3.使用全局配置进行网络请求---设置全局配置
/*axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000
axios.all([axios({
  url: '/home/multidata'
}), axios({
  url: '/home/data',
  // params 只能与 get 配合使用
  // post 与 data 配合使用
  params: {
    type: 'sell',
    page: 2
  }
})])
  .then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
  }))*/

// 4. 创建对应的axios实例
/*
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
})

instance1({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 2
  }
}).then(res => {
  console.log(res);
})

const instance2 = axios.create({
  baseURL: 'http://123.207.32.32:8000111',
  timeout: 10000,
})*/

// 5. 封装request模块
import {request} from "./network/request";
request({
  url: '/home/multidata'
}).then(res =>{
  console.log(res);
}).catch(err => {
  console.log(err);
})
/*request({
  baseConfig: {
    url: '/home/multidata'
  },
  success: function (res) {
    console.log(res);
  },
  failure: function (err) {
    console.log(err);
  }
})*/
/*request({
  url: '/home/multidata'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})*/
