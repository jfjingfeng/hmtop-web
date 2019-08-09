import axios from 'axios'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// Add a request interceptor
// 请求
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // console.log(response)
  // Do something with response data
  return response.data.data || response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
export default request
