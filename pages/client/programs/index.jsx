import { getChapters } from "../api/programs";
import Nav from "@/components/Client/landing-components/Nav";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider, Content } = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const ICONS = [<UserOutlined />, <UploadOutlined />, <MenuUnfoldOutlined />]

export const getStaticProps = async () => {
  let programs = await getChapters();
  programs = programs.map((program, index) => {
    return {
      key: program.title,
      children: program.chapters.map(chapter => {
        return {
          label: chapter.title,
          key: chapter.id
        }
      }),
      label: program.title,
    };
  });
  return {
    props: {
      programs: programs,
    },
  };
};

const Programs = ({ programs }) => {
  console.log(programs);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Nav />
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={programs.map((program, index) => {
              return {...program, icon: ICONS[index], children: program.children.map(child => {
                return {label: <a href={`/programs/${child.key}`}>{child.label}</a>}
              })}
            })}
          />
        </Sider>
        <Layout className="site-layout">
          <Content className="mx-auto py-[250px]">
            <p className="font-medium opacity-50">
              Select your program's chapter and send your demand{" "}
            </p>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Programs;
