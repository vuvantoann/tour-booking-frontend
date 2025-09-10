import { Button, Dropdown } from 'antd'
import {
  BellOutlined,
  MailOutlined,
  WarningOutlined,
  UserAddOutlined,
  ReloadOutlined,
} from '@ant-design/icons'
import './Notification.scss'
function Notification() {
  const items = [
    {
      label: (
        <>
          <div className="dropdown__contain">
            <div className="dropdown__icon">
              <MailOutlined />
            </div>
            <div className="dropdown__content">
              <div className="dropdown__title">You received a new message</div>
              <div className="dropdown__time">8 min ago</div>
            </div>
          </div>
        </>
      ),
      key: '0',
    },
    {
      label: (
        <>
          <div className="dropdown__contain">
            <div className="dropdown__icon">
              <UserAddOutlined />
            </div>
            <div className="dropdown__content">
              <div className="dropdown__title">new user registered</div>
              <div className="dropdown__time">7 hours ago</div>
            </div>
          </div>
        </>
      ),
      key: '1',
    },

    {
      label: (
        <>
          <div className="dropdown__contain">
            <div className="dropdown__icon">
              <WarningOutlined />
            </div>
            <div className="dropdown__content">
              <div className="dropdown__title">System Alert</div>
              <div className="dropdown__time">8 hours ago</div>
            </div>
          </div>
        </>
      ),
      key: '3',
    },
    {
      label: (
        <>
          <div className="dropdown__contain">
            <div className="dropdown__icon">
              <ReloadOutlined />
            </div>
            <div className="dropdown__content">
              <div className="dropdown__title">You have a new update</div>
              <div className="dropdown__time">2 days ago</div>
            </div>
          </div>
        </>
      ),
      key: '4',
    },
  ]
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
        dropdownRender={(menu) => (
          <>
            <div className="dropdown__notification">
              <div className="dropdown__header">
                <div className="dropdown__bell">
                  <BellOutlined /> Notification
                </div>
                <div className="dropdown__view">
                  <Button type="link">View all</Button>
                </div>
              </div>
              <div className="dropdown__body">{menu}</div>
            </div>
          </>
        )}
      >
        <Button type="text">
          <span className="bell__outlined">
            <BellOutlined />
          </span>
        </Button>
      </Dropdown>
    </>
  )
}

export default Notification
