import Nav from '@/components/Client/landing-components/Nav';
import {DesktopOutlined,
FileOutlined,
PieChartOutlined,
TeamOutlined,
UserOutlined,
} from '@ant-design/icons';
import {Layout,Breadcrumb, Menu } from 'antd';
import React, { useState } from 'react';
const {Sider,Content } = Layout;
function getItem(label, key, icon, children) {
return {
  key,
  icon,
  children,
  label,
};
}
const items = [
    getItem('program1', 'sub1', <UserOutlined />, [
        getItem('Chapter1', '1'),
        getItem('Chapter2', '2'),
        getItem('Chapter3', '3'),
      ]),
      getItem('program2', 'sub2', <UserOutlined />, [
        getItem('chapter1', '4'),
        getItem('chapter2', '5'),
        getItem('chapter3', '6'),
      ]),
getItem('program3', 'sub3', <UserOutlined />, [
  getItem('chapter1', '7'),
  getItem('chapter2', '8'),
  getItem('chapter3', '9'),
]),
getItem('program4', 'sub4', <TeamOutlined />, 
[
    getItem('chapter1', '10'), 
    getItem('chapter2', '11'),
    getItem('chapter3', '12')

]),

];
const Chapter = () => {
const [collapsed, setCollapsed] = useState(false);
return (
    <div>
        <Nav/>
  <Layout
    style={{
      minHeight: '100vh',
    }}
  >
     <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    <Layout className="site-layout">
    
    <Content className='py-[20px] px-[30px]'>
        <h1 className="font-bold text-4xl">Program1</h1>
            <h2 className="text-3xl">
              Chapter: <span className="text-2xl font-medium">title</span>
            </h2>
       
        </Content>
    </Layout>
  </Layout>
  </div>
);
};
export default Chapter;