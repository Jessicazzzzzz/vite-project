import { Button, Card, Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'
import styles from './index.module.less'
import * as echarts from 'echarts'
import { useEffect } from 'react'
type EChartsOption = echarts.EChartsOption
const DashBoard = () => {
  useEffect(() => {
    const lineChartDom = document.getElementById('lineChart')!

    const chartInstance = echarts.init(lineChartDom)
    let option: EChartsOption
    option = {
      // title:{
      //   text:'订单和流水走势图'
      // },
      tooltip:{
        trigger:'axis'
      },
      xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
      },
      yAxis: {
        type: 'value'
      },
      grid: {
        left: '5%',
        right: '15%',
        bottom: '10%'
      },
      series: [
        { name:'订单',
          data: [150, 230, 224, 218, 135, 147, 260,150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        },
        { name:'流水',
          data: [1500, 2300, 2204, 2128, 1315, 1147, 2640,1540, 2340, 2224, 2128, 1735, 1457, 2960],
          type: 'line'
        }
      ]
    }
    option && chartInstance.setOption(option)
  }, [])
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'UserName',
      children: 'Zhou Maomao'
    },
    {
      key: '2',
      label: 'Telephone',
      children: '1810000000'
    },
    {
      key: '3',
      label: 'Live',
      children: 'Hangzhou, Zhejiang'
    },
    {
      key: '4',
      label: 'Address',
      span: 2,
      children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China'
    },
    {
      key: '5',
      label: 'Remark',
      children: 'empty'
    }
  ]

  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img
          src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          alt=''
          className={styles.userAvatar}
        />
        <Descriptions title='User Info' layout='horizontal' items={items} />
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className='title'>司机数量</div>
          <div className={styles.data}>100个</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总流水</div>
          <div className={styles.data}>10000</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总订单</div>
          <div className={styles.data}>1000单</div>
        </div>
        <div className={styles.card}>
          <div className='title'>开通城市</div>
          <div className={styles.data}>100个</div>
        </div>
      </div>

      <div className={styles.chart}>
        <Card title='订单和流水' extra={<Button type='primary'>刷新</Button>}>
          <div id='lineChart' className={styles.itemLine}></div>
        </Card>
      </div>

      <div className={styles.chart}>
        <Card title='司机分步' extra={<Button type='primary'>刷新</Button>}>
          <div id='pieChartCity' className={styles.itemLine}></div>{' '}
          <div id='pieChartAge' className={styles.itemLine}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card title='模型诊断' extra={<Button type='primary'>刷新</Button>}>
          <div id='radarChart' className={styles.itemLine}></div>
        </Card>
      </div>
    </div>
  )
}

export default DashBoard
