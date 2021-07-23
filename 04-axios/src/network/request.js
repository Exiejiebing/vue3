import axios from "axios";

export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  // 2. axios的拦截器
  // 2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
    // 1. 比如config中的一些信息不符合服务器的要求
    // 2. 比如每次发送网络请求时，都希望在界面上显示一个请求的图标（正在加载中...）
    // 3. 某些网络请求（比如登录--token），必须携带一些特殊的信息
    return config
  }, error => {
    return error
  })
  // 2.2 响应拦截的作用
  instance.interceptors.response.use(result => {
    return result.data
  }, error => {
    return error
  })

  // 3. 发送真正网络请求---原本就是一个Promise，所以可以直接返回
  return instance(config)
}

/*export function request(config) {
  return new Promise((resolve, reject) => {
    // 1. 创建axios实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000,
    })

    // 3. 发送网络请求
    instance(config)
      .then(res => {
        // 成功函数
        resolve(res)
      })
      .catch(err => {
        // 失败函数
        reject(err)
      })
  })
}*/

/*export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  instance(config.baseConfig)
    .then(res => {
      // 成功函数
      config.success(res)
    })
    .catch(err => {
      // 失败函数
      config.failure(err)
    })
}*/

/*export function request(config, success, failure) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  instance(config)
    .then(res => {
      // 成功函数
      success(res)
    })
    .catch(err => {
      // 失败函数
      failure(err)
    })
}*/
