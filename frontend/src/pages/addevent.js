import Sidebar from '@/components/Sidebar';
import styles from '@/styles/Home.module.css';
import {
  PlusOutlined,
  UploadOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
  Card,
  Space,
  Row,
  Col,
  TimePicker,
} from 'antd';

const format = 'HH:mm';

export default function addevent() {
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
  return (
    <>
      <div style={{ paddingLeft: 5 }}>
        <Space direction='vertical' size='middle'>
          <Row>
            <Card
              title='Enter the Details'
              size='middle'
              style={{ width: '85vw' }}
            >
              <Form>
                <Row>
                  <Col span={8}>
                    <b>Event Details</b>
                  </Col>
                  <Col span={16}>
                    <Form.Item
                      label='Event'
                      rules={[
                        { required: true, message: 'Please enter event name!' },
                      ]}
                    >
                      <Input placeholder='Enter event name' />
                    </Form.Item>
                    <Form.Item
                      label='Artist'
                      rules={[
                        {
                          required: true,
                          message: 'Please enter artist name!',
                        },
                      ]}
                    >
                      <Input placeholder='Enter artist name' />
                    </Form.Item>
                    <Row>
                      <Col span={8}>
                        <Form.Item label='Type'>
                          <Select>
                            <Select.Option value='Music'>Music</Select.Option>
                            <Select.Option value='Theatre & Art'>
                              Theatre & Art
                            </Select.Option>
                            <Select.Option value='Comedy'>Comedy</Select.Option>
                            <Select.Option value='Performancs'>
                              Performancs
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label='Date' style={{ paddingLeft: 50 }}>
                          <DatePicker />
                        </Form.Item>
                      </Col>

                      <Col span={8} style={{ paddingLeft: 10 }}>
                        <Form.Item label='Time'>
                          <TimePicker format={format} />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item label='Upload' valuePropName='fileList'>
                      <Upload
                        action=''
                        listType='picture'
                        // defaultFileList={[...fileList]}
                        className='upload-list-inline'
                      >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                      </Upload>
                    </Form.Item>
                    <Form.Item>
                      <Checkbox>This is a trending event</Checkbox>
                    </Form.Item>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={8}>
                    <b>Ticket Details</b>
                  </Col>
                  <Col span={16}>
                    <Row>
                      <Col span={8}>
                        <Form.List name='users'>
                          {(fields, { add, remove }) => (
                            <>
                              {fields.map(({ key, name, ...restField }) => (
                                <Space
                                  key={key}
                                  style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                  }}
                                  align='baseline'
                                >
                                  <Form.Item
                                    {...restField}
                                    name={[name, 'first']}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Missing first name',
                                      },
                                    ]}
                                  >
                                    <Input placeholder='First Name' />
                                  </Form.Item>
                                  <Form.Item
                                    {...restField}
                                    name={[name, 'last']}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Missing last name',
                                      },
                                    ]}
                                  >
                                    <Input placeholder='Last Name' />
                                  </Form.Item>
                                  <MinusCircleOutlined
                                    onClick={() => remove(name)}
                                  />
                                </Space>
                              ))}
                              <Form.Item>
                                <Button
                                  type='dashed'
                                  onClick={() => add()}
                                  block
                                  icon={<PlusOutlined />}
                                >
                                  Add field
                                </Button>
                              </Form.Item>
                            </>
                          )}
                        </Form.List>
                        <Form.Item>
                          <Button type='primary' htmlType='submit'>
                            Submit
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Row>
        </Space>
      </div>
    </>
  );
}
