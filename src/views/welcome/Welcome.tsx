import styles from './index.module.less'
const Welcome=()=>{
  return <div className={styles.welcome}>
    <div className={styles.content}>
      <div className={styles.subtitle}>欢迎页面</div>
      <div className={styles.title}>React</div>
      <div className={styles.desc}>React-router</div>
    </div>
    <div className={styles.img}></div>
  </div>
}

export default Welcome