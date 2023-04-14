import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { Menu } from 'antd';
import {
  HomeOutlined,
  UnorderedListOutlined,
  CalendarOutlined,
} from '@ant-design/icons/lib/icons';
import Sidebar from '@/components/Sidebar';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Sidebar />
    </>
  );
}
