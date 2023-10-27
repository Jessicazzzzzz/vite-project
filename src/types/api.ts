// 接口类d定义

export namespace LoginAPI {
  export interface params {
    userName: string
    userPwd: string
  }
}
// 返回数据定义类型
export interface Result<T = any> {
  code: number
  data: T
  msg: string
}
export namespace User {
  export interface UserItem {
    createId: number
    deptId: string
    deptName: string
    job: string
    mobile: string
    role: number
    roleList: Array<any>
    state: number
    userEmail: string
    userId: number
    userImg:string
    userName: string
    _id: string
  }
}
