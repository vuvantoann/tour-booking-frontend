import { Menu } from 'antd'
import {
  DashboardOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  PlusOutlined,
  TagsOutlined,
  UserOutlined,
  StarOutlined,
  ShareAltOutlined,
  SettingOutlined,
} from '@ant-design/icons'
// import { Link } from 'react-router-dom'
function Sidebar() {
  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'products',
      icon: <AppstoreOutlined />,
      label: 'Products',
      children: [
        {
          key: 'product-list',
          icon: <UnorderedListOutlined />,
          label: 'Product List',
        },
        {
          key: 'add-product',
          icon: <PlusOutlined />,
          label: 'Add Product',
        },
        {
          key: 'category-list',
          icon: <TagsOutlined />,
          label: 'Category List',
        },
      ],
    },
    {
      key: 'orders',
      icon: <ShoppingCartOutlined />,
      label: 'Order',
      children: [
        {
          key: 'order-list',
          label: 'Order List',
        },
        {
          key: 'order-tracking',
          label: 'Order Tracking',
        },
      ],
    },
    {
      key: 'customers',
      icon: <UserOutlined />,
      label: 'Customer',
      children: [
        {
          key: 'customer-list',
          label: 'Customer List',
        },
        {
          key: 'customer-groups',
          label: 'Customer Groups',
        },
      ],
    },
    {
      key: 'reviews',
      icon: <StarOutlined />,
      label: 'Manage Reviews',
    },
    {
      key: 'referrals',
      icon: <ShareAltOutlined />,
      label: 'Referrals',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      children: [
        {
          key: 'profile-settings',
          label: 'Profile Settings',
        },
        {
          key: 'system-settings',
          label: 'System Settings',
        },
      ],
    },
  ]
  return (
    <>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={['product-list']}
        defaultOpenKeys={['products']}
      />
    </>
  )
}

export default Sidebar
