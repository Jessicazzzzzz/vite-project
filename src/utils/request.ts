import axios, { AxiosError } from 'axios'
// import { message } from 'antd'
import { hideLoading, showLoading } from './loading'
import storage from './storage'
import env from '@/config'
import { Result } from '@/types/api'
import { message } from './AntdGlobal'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 8000,
  timeoutErrorMessage: '请求超时,请稍后再试',
  withCredentials: true,
  headers: {
    icode: '3D374B5C6E0E3971'
  }
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
    if(config.showLoading) {
      showLoading()
    }
    // showLoading()
   
    const token = storage.get('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    if (env.mock) {
      config.baseURL = env.mockApi
    } else {
      config.baseURL = env.baseApi
    }
    return {
      ...config
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
// 响应拦截
instance.interceptors.response.use(
  response => {
    hideLoading()
    const data: Result = response.data
    //登录失效
    if (data.code === 500001) {
      storage.remove('token')
      // location.href = '/login'
    } else if (data.code != 0) {
      if(response.config.showError===false){
        return  Promise.resolve(data)
      }else {
        message.error(data.msg)
        return Promise.reject(data)
      }
     
    }
    return data.data
  },
  error => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)

interface IConfig {
  showLoading?: boolean
  showError?: boolean
}

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.get(url, { params,...options })
  },
  post<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.post(url, params, options)
  }
}
