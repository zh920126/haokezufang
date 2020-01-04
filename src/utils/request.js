import axios from 'axios'
import baseURL from './urls'
// 引入轻提示
import {Toast} from 'antd-mobile'

// 配置统一的baseURL
const Axios =axios.create({
  baseURL:baseURL
})
// 配置拦截器--请求拦截
Axios.interceptors.request.use(function (config) {
  Toast.loading("loading...",60*60*60,null)
  return config
},function (error) {
  return Promise.reject(error)
})
// 返回拦截
Axios.interceptors.response.use(function(response){
  Toast.hide()
  return response.data
},function (error) {
  return Promise.reject(error)
})
export default Axios