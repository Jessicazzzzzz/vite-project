import { useState } from 'react'

import { Button, Form, Input, App } from 'antd'

import styles from './ index.module.less'
import api from '@/api'
import { LoginAPI } from '@/types/api'
import storage from '@/utils/storage'
import { useStore } from '@/store'
const Login = () => {
  const { message } = App.useApp()
  const [loading, setLoading] = useState(false)
  const updateToken = useStore(state => state.updateToken)
  const onFinish = async (values: LoginAPI.params) => {
    //需要用try catch 捕获异常
    try {
      setLoading(true)
      const data = await api.login(values)
      setLoading(false)
      storage.set('token', data)
      updateToken(data)
      message.info('登录成功')
      const params = new URLSearchParams(location.search)
      setTimeout(() => {
        location.href = params.get('callback') || '/welcome'
      })
    } catch (error) {
      setLoading(false)
    }

    //  console.log(location.search);
    //    const  s2= location.search.slice(1).split("=")
    //     location.href =`${s2[1]}` || '/'
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  type FieldType = {
    userName?: string
    userPwd?: string
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='Username'
            name='userName'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Password'
            name='userPwd'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit' block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
