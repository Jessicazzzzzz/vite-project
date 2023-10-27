/**
环境变量
 */

type ENV = 'dev' | 'stg' | 'prd'
//  let env:ENV = 'dev'
// location.host.indexOf('localhost')表示的是localhost 有值
//  if(location.host.indexOf('localhost')>-1){
//   env = 'dev'
//  }else if(location.host==='driver-stg.marsview.cc'){
//   env = 'stg'
//  }else {
//   env = 'prd'
//  }
const env = document.documentElement.dataset.env as ENV || 'stg'
 const config = {
  'dev':{
    baseApi:"/api",
    uploadApi:'http://api-driver-dev.marsview.cc',
    cdn:'http://xxx.aliyun.com',
    mock:true,
    mockApi:'https://www.fastmock.site/mock/d1ad61be7ec1aa467dddc07cbbd4382c/api'
  },
  'stg':{
    baseApi:"/api",
    uploadApi:'http://api-driver-stg.marsview.cc',
    cdn:'http://xxx.aliyun.com',
    mock:false,
    mockApi:'https://www.fastmock.site/mock/d1ad61be7ec1aa467dddc07cbbd4382c/api'
  },
  'prd':{
    baseApi:"/api",
    uploadApi:'http://api-driver.marsview.cc',
    cdn:'http://xxx.aliyun.com',
    mock:false,
    mockApi:'https://www.fastmock.site/mock/d1ad61be7ec1aa467dddc07cbbd4382c/api'
  }
 }
 export default {env ,...config[env]}
