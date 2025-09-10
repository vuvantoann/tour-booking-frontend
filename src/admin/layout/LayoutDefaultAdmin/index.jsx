import { Layout } from 'antd'

import logo from '../../../assets/logo.png'
import logoFold from '../../../assets/logo-fold.png'
import './LayoutDefaultAdmin.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Notification from '../../components/Notification'
import Sidebar from '../../components/Sidebar'

function LayoutDefault() {
  const { Footer, Sider, Content } = Layout
  const [collapsed, setCollapsed] = useState(false)
  const handleClick = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <Layout className="layout__default">
        <header className="header-admin">
          <div
            className={
              'header-admin__logo' +
              (collapsed ? ' header-admin__logo--collapsed' : '')
            }
          >
            {collapsed ? (
              <img src={logoFold} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}
          </div>
          <div className="header-admin__nav">
            <div className="header-admin__left">
              <div className="header-admin__menu" onClick={handleClick}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
              <div className="header-admin__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header-admin__right">
              <div className="header-admin__bell">
                <Notification />
              </div>
            </div>
          </div>
        </header>
        <Layout>
          <Sider theme="light" collapsed={collapsed}>
            <Sidebar />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer
          style={{
            background: '#fff', // light
            color: '#000',
            textAlign: 'center',
          }}
        >
          Footer
        </Footer>
      </Layout>
    </>
  )
}

export default LayoutDefault
