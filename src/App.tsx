import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './router'
import { ConfigProvider, App as AntdApp } from 'antd'
import AntdGlobal from './utils/AntdGlobal'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#e05122',
          borderRadius: 2,

          // 派生变量，影响范围小
          // colorBgContainer: '#f6ffed'
        }
      }}
    >
      <AntdApp>
        <AntdGlobal/>
        <RouterProvider router={routes} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
