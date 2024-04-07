import { Anchor, Avatar, Button, Card, Col, Divider, Empty, Form, Input, Layout, Menu, Modal, Row, Space, Steps, Table, Tag, TimePicker, Typography } from "antd"
import "./styles/dashboard.css"
import { Content, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { HiOutlineHome } from "react-icons/hi2";
import { GrOrganization } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { faker } from "@faker-js/faker"
import ButtonGroup from "antd/es/button/button-group";
import dayjs from "dayjs";

const generateDate = () => {
  const dat = [];

  for (let i = 0; i < 34; i++){
    dat.push({
      id: faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false
    })
  }
  return dat;
}

const data = generateDate()

function App() {
  const [collapsed,setCollapsed] = useState(false);

const [isModalOpen, setIsModalOpen] = useState(false);
const [formValues, setFormValues] = useState({});

const showModal = () => {
  setIsModalOpen(true);
} 

const handleCancle = () => {
  setIsModalOpen(false);
} 

const handleOk = () => {
  setIsModalOpen(false);
}

const onFinish = (values:any) => {
  console.log(values);
  setFormValues(values);
  setIsModalOpen(true);
};

  return (
    <Layout className="container">
      <Header className="header" >
        <div style={{
          display: "flex",
          alignItems: "center"
        }}>
          <GiHamburgerMenu onClick={() => setCollapsed(!collapsed)}
           size={28} style={{marginRight: 20}}/>
          <div className="brand">Cool - dashboard</div>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collapsed} theme="light">
          <Menu 
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <HiOutlineHome />,
                children:[
                  {
                    label: "Add profile",
                    key: "add_profile",
                    icon:<FiUser />
                  },
                  {
                    label: "All users",
                    key: "all_users",
                    icon: <FiUsers />
                  }
                ]
              },
              {
                label: "About us",
                key: "about_us",
                icon: <GrOrganization />
              }
            ]}
          />
        </Sider>

        <Content className="content">
          <Card>
            <Typography.Title>Sales</Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis molestiae consequuntur aliquam, officiis fugiat possimus dolores ipsa magni aspernatur repudiandae similique et, adipisci debitis illum cupiditate ullam, totam ex quo.
            </Typography.Paragraph>
          </Card>
          <Divider />
          <Space direction="horizontal">
            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>total sales</small>
              </Space>
              <Typography.Title>$67324</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>total sales</small>
              </Space>
              <Typography.Title>$67324</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <AiOutlineMoneyCollect />
                <small>total sales</small>
              </Space>
              <Typography.Title>$67324</Typography.Title>
            </Card>
          </Space>
          <Divider />
          <Row gutter={10}>
            <Col span={6}>
              <Card>
                <Typography.Title>do something</Typography.Title>
              </Card>
            </Col>
            <Col span={18}>
              <Card>
                <Anchor items={[
                  {key: "link 1",
                  href: "test",
                  title: "link 1"
                  }
                ]} />
              </Card>
            </Col>
          </Row>
          <Card>
            <Form layout="vertical"
                  // onFinish={(values) => {
                  //   console.log(values);
                  // }}
                onFinish={onFinish}
            >
                <Avatar size={"large"} src="data:image/jpeg;base64,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"></Avatar>
                <Form.Item label="Name" name="username" rules={[{required: true,message: "Please input your username!"}]}>
                  <Input></Input>
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{required: true,message: "Please input your email!"}]}>
                  <Input></Input>
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{required: true,message: "Please input your password!"}]}>
                  <Input.Password />
                </Form.Item>
                <Form.Item>
                <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
                </Form.Item>
                <Form.Item>
                  <Empty></Empty>
                  <Button type="primary" htmlType="submit" onClick={showModal}>
                    Submit
                  </Button>
                  <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancle}>
                    <p>{JSON.stringify(formValues)}</p>
                  </Modal>
                </Form.Item>
            </Form>
          </Card>
          <Card>
            <Steps size="small" 
            current={1}
            items={[
              {
                title: 'Waiting',
                description: "something"
              },
              {
                title: 'In Progress',
                description: "something"
              },
              {
                title: 'Finished',
                description: "something"
              }
            ]}
            />
          </Card>
          <Row gutter={10} style={{marginTop: 10}}>
            <Col span={24} >
              <Table dataSource={data} columns={[{
                dataIndex: "id",
                title: "ID",
                key: "id",
                fixed: true
              },{
                dataIndex: "name",
                title: "Name",
                key: "name"
              },{
                dataIndex: "email",
                title: "Email",
                key: "email"
              },{
                dataIndex: "status",
                title: "Status",
                render: (val) => val ? <Tag>Active</Tag> : <Tag>Not Activate</Tag>
              },{
                title: "Actions",
                render: () =>  (
                    <ButtonGroup>
                      <Button>Edit</Button>
                      <Button type="primary" danger>Delete</Button>
                    </ButtonGroup>
                ),
              }
              ]}></Table>
            </Col>
          </Row>
          </Content>
      </Layout>

    </Layout>
  )
}

export default App
