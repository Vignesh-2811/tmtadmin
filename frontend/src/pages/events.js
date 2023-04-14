import Sidebar from '@/components/Sidebar';
import styles from '@/styles/Home.module.css';
import { Table, Input, Select, Button } from 'antd';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons/lib/icons';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

function Content() {
  const [searchedText, setSearchedText] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const handleCityFilterChange = (value) => {
    setSelectedCity(value);
  };

  const filteredData = dataSource.filter(
    (record) =>
      (!selectedCity || record.city === selectedCity) &&
      (String(record.event)
        .toLowerCase()
        .includes(searchedText.toLowerCase()) ||
        String(record.artist)
          .toLowerCase()
          .includes(searchedText.toLowerCase()))
  );
  const columns = [
    {
      title: 'Event',
      dataIndex: 'event',
      width: '30%',
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.event).toLowerCase().includes(value.toLowerCase()) ||
          String(record.artist).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      title: 'Artist',
      dataIndex: 'artist',
      width: '20%',
    },
    {
      title: 'City',
      dataIndex: 'city',
      width: '10%',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      width: '10%',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      width: '10%',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      width: '10%',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '10%',
    },
  ];
  return (
    <div className={styles.content}>
      <div style={{ display: 'flex', marginBottom: 18 }}>
        <Input.Search
          placeholder='Search for events'
          style={{ marginBottom: 18 }}
          onSearch={(value) => {
            setSearchedText(value);
          }}
          onChange={(e) => {
            setSearchedText(e.target.value);
          }}
        />
        <Select
          placeholder='All'
          style={{ paddingRight: '20%', width: '50rem' }}
          onChange={handleCityFilterChange}
          allowClear
        >
          <Select.Option value='Chennai'>Chennai</Select.Option>
          <Select.Option value='Bangalore'>Bangalore</Select.Option>
          <Select.Option value='White House'>White House</Select.Option>
        </Select>
        <Link href='/addevent'>
          <Button
            type='primary'
            icon={<PlusOutlined />}
            style={{ background: 'black' }}
          >
            Add an Event
          </Button>
        </Link>
      </div>

      <Table dataSource={filteredData} columns={columns} />
    </div>
  );
}

const dataSource = [
  {
    key: '1',
    event: 'Mike',
    artist: 32,
    city: 'Chennai',
  },
  {
    key: '2',
    event: 'John',
    artist: 42,
    city: 'Bangalore',
  },
];
