import originAxios from "axios";

export default function axios(config) {
  const instance = originAxios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 50000
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    return error
  })

  // 响应拦截器
  instance.interceptors.response.use(result => {
    return result.data
  }, error => {
    return error
  })

  return instance(config)
}

