import { Navigate, createBrowserRouter } from 'react-router-dom'
import Login from '@/views/login/Login'
import Welcome from '@/views/welcome/Welcome'
import Eorror404 from '@/views/404'
import Eorror403 from '@/views/403'
import Layout from '@/layout'
import DashBoard from '@/views/dashboard'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to ='/welcome'/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <Layout/>,
    children:[
      {
        path:'/welcome',
        element:<Welcome/>
      },
      {
        path:'/dashboard',
        element:<DashBoard/>
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Eorror404 />
  },
  {
    path: '/403',
    element: <Eorror403 />
  }
])

export default routes
