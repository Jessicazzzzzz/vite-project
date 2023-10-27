import request from '@/utils/request'
import { LoginAPI,User } from '@/types/api'

export default {
  // 登录
  login(params: LoginAPI.params) {
    return request.post<string>('users/login', params, { showLoading: false })
  },
  //获取用户信息
  getUserInfo() {
    return request.get<User.UserItem>('/users/getUserInfo')
  }
}
