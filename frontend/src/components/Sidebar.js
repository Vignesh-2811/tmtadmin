import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { Menu, Button } from 'antd';
import {
  UnorderedListOutlined,
  CalendarOutlined,
  LogoutOutlined,
} from '@ant-design/icons/lib/icons';

export default function Sidebar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Menu>
            <Menu.Item key='home'>
              <Link href='/'>TAKE MY TICKETS</Link>
            </Menu.Item>
            <Menu.Item icon={<CalendarOutlined />}>
              <Link href='/events'>Events</Link>
            </Menu.Item>
            <Menu.Item key='venues' icon={<UnorderedListOutlined />}>
              <Link href='/venues'>Venues</Link>
            </Menu.Item>
          </Menu>
          <div
            style={{
              marginTop: '40rem',
              justifyContent: 'center',
              paddingLeft: '20px',
            }}
          >
            <p style={{ fontSize: '12px' }}>
              <strong> Admin </strong> <br />
              <br />
              admin@takemytickets.co.in
            </p>
          </div>
          <div
            style={{
              marginTop: 'auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button type='default' icon={<LogoutOutlined />}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
