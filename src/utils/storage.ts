/**
 */

export default  {
  /**
   * 存储
   * @param key {string}
   * @param value {any} 写入的值
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value))
  },
  /**
   * 
   * @param key {String}
   * @returns storage 值
   */
  get(key:string){
    const value = localStorage.getItem(key)
    if(value) {
      try {
        return  JSON.parse(value)
      } catch (error) {
        return value
      }
   
    }
    return ''
 
  }, 
  /**
   * 删除local storage
   * @param key {string}
   */
  remove(key:string){
   localStorage.removeItem(key)
  },
  /**
   * 清空
   */
  clear(){
    localStorage.clear()
  }
}