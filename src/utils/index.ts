/**
 工具函的封装
*/



export const formatMoney = (num: number | string) => {
  const numParsed = parseInt(num.toString())
  return numParsed.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
}

//   (\db表示一组,?=做预判 是否有这个,$1 表示的是 第一组
export const formatNum = (num: number | string) => {
  const numToString = num.toString()
  if (numToString.indexOf('.') > -1) {
    return numToString.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  }
  return numToString.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

export const toLocaleDate = (date?: Date, rule?: string) => {
  let curDate = new Date()
  if (date) curDate = date
  if (rule === 'yyyy-MM-dd') return curDate.toLocaleDateString()
  if (rule === 'HH:mm:ss') return curDate.toLocaleTimeString()
  return curDate.toLocaleString().replaceAll('/', '-')
}

export const formatDate = (date?: Date, rule?: string) => {
  let curDate = new Date()
  if (date) curDate = date
  let fmt = rule || 'yyyy-MM-dd HH:mm:ss'
  fmt = fmt.replace(/(y+)/, curDate.getFullYear().toString())
  type oType = {
    [key:string]:number
  }
  const o:oType = {
    'M+': curDate.getMonth() + 1,
    'd+': curDate.getDate(),
    'H+': curDate.getHours(),
    'm+': curDate.getMinutes(),
    's+': curDate.getSeconds()
  }

  for(const k in o){

   fmt= fmt.replace(new RegExp(`(${k})`), o[k].toString().padStart(2,'0'))
  }
  return fmt
}
