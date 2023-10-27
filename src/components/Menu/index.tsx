import { Menu } from 'antd'
import styles from './index.module.less'
import { useStore } from '@/store'
import { DesktopOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const SideMenu = () => {
  const collapsed = useStore(state => state.collapsed)
  const navigate = useNavigate()
  const items = [
    {
      label: '工作台',
      key: 1,
      icon: <DesktopOutlined />
    },
    {
      label: '系统管理',
      key: 2,
      icon: <SettingOutlined />,
      children: [
        {
          label: '系统管理',
          key: 3,
          icon: <TeamOutlined />
        }
      ]
    }
  ]
  return (
    <div>
      <div className={styles.logo} onClick={() => navigate('/welcome')}>
        <img src='/imgs/logo.png' alt='' />
        {collapsed ? '' : <span>momo</span>}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        items={items}
        style={{ width: collapsed ? 80 : 'auto' }}
      />
    </div>
  )
}

export default SideMenu
