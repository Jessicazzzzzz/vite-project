import React, { useEffect } from 'react'

import { Layout, Watermark } from 'antd'
import NavHeader from '@/components/NavBar'
import NavFooter from '@/components/NavFooter'
import Menu from '@/components/Menu'
import { Outlet } from 'react-router-dom'
import styles from './index.module.less'
import api from '@/api'
// import storage from '@/utils/storage'
import {useStore} from '@/store'
const {  Sider } = Layout

const App: React.FC = () => {
    

    const {collapsed,updateUserInfo}= useStore()
  useEffect(() => {
    getUserInfo()
  }, [])

  const getUserInfo = async () => {
    const data = await api.getUserInfo()
    // storage.set('userInfo', data)
    // store.userInfo = data
   updateUserInfo(data)

  }
  return (
    <Watermark content='react'>
      <Layout>
        <Sider collapsed={collapsed}>
          <div className='demo-logo-vertical' />
          <Menu />
        </Sider>
        <Layout>
          <NavHeader />

          
            <div className={styles.wrapper}>
              <Outlet />
            </div>

            <NavFooter />
         
        </Layout>
      </Layout>
    </Watermark>
  )
}

export default App
