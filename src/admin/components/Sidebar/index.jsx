import { Menu } from 'antd'
import {
  DashboardOutlined,
  AppstoreOutlined,
  PieChartOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
function Sidebar() {
  const items = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      children: [
        {
          key: '/',
          label: <Link to="/">Default</Link>,
        },
        {
          key: '12',
          label: 'CRM',
        },
        {
          key: '13',
          label: 'E-commerce',
        },
        {
          key: '14',
          label: 'Projects',
        },
      ],
    },
    {
      key: '2',
      icon: <AppstoreOutlined />,
      label: 'Apps',
      children: [
        {
          key: '21',
          label: 'Chat',
        },
        {
          key: '22',
          label: 'File Manager',
        },
        {
          key: '23',
          label: 'Mail',
        },
        {
          key: '24',
          label: 'Projects',
        },
      ],
    },
    {
      key: '3',
      icon: <PieChartOutlined />,
      label: 'Components',
      children: [
        {
          key: '31',
          label: 'General',
        },
        {
          key: '32',
          label: 'Navigation',
        },
        {
          key: '33',
          label: 'Data Display',
        },
        {
          key: '34',
          label: 'Others',
        },
      ],
    },

    {
      key: 'book-room',
      icon: <WhatsAppOutlined />,
      label: <Link to="book-room">Book Room</Link>,
    },
  ]
  return (
    <>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={['/']}
        defaultOpenKeys={['1']}
      />
    </>
  )
}

export default Sidebar
