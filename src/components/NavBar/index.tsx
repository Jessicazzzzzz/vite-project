import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Switch, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import styles from './index.module.less'
import {useStore} from '@/store'
import storage from '@/utils/storage'
const NavHeader = () => {
   const state = useStore(state=>state.userInfo)
   const collapsed = useStore(state=>state.collapsed)
   const  updateCollapsed = useStore(state=>state.updateCollapsed)
  const breadList = [{ title: 'sample' }, { title: 'sample' }]
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '邮箱 '+state.userEmail
    },
    {
      key: '2',
      label: '退出'
    }
  ]
  const onClick :MenuProps['onClick']= ({key})=>{
      if(key==='2'){
        storage.remove('token')
        location.href = '/login?callback='+encodeURIComponent(location.href)
      }
  }

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <div className="toggle" onClick={()=>updateCollapsed()}>
        {collapsed ?  <MenuFoldOutlined />:  <MenuUnfoldOutlined/>}
        </div>
        <Breadcrumb items={breadList} style={{ marginLeft: 10 }} />
      </div>
      <div className='right'>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认' />
        <Dropdown menu={{ items ,onClick}} trigger={['click']}>
          <span style={{ marginLeft: 10 }} className={styles.nickName}>
           {state.userName}
          </span>
        </Dropdown>
      </div>
    </div>
  )
}
export default NavHeader
