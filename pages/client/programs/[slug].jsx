import { getChapter,getChapters } from "../api/programs";
import Nav from "@/components/Client/landing-components/Nav";
import {
  InboxOutlined,
  MenuUnfoldOutlined,
  MinusCircleOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Layout, Menu, Upload, message } from "antd";
import { useState } from "react";
const { Sider, Content } = Layout;
const { Dragger } = Upload;

const ICONS = [<UserOutlined />, <UploadOutlined />, <MenuUnfoldOutlined />];

export const getServerSideProps = async ({ params }) => {
  let programs = await getChapters();
  programs = programs.map((program) => {
    return {
      key: program.title,
      children: program.chapters.map((chapter) => {
        return {
          label: chapter.title,
          key: chapter.id,
        };
      }),
      label: program.title,
    };
  });

  let chapter = await getChapter(params.slug);
  return {
    props: {
      programs: programs,
      chapter: chapter,
      slug: params.slug,
    },
  };
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};
const props = {
  name: "file",
  multiple: true,
  action: "http://localhost:3000/",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const Details = ({ programs, chapter, slug }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
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
              return {
                ...program,
                icon: ICONS[index],
                children: program.children.map((child) => {
                  return {
                    ...child,
                    label: (
                      <a
                        href={`/programs/${child.key}`}
                        className={
                          child.key == slug ? "!text-sky-500" : "text-white"
                        }
                      >
                        {child.label}
                      </a>
                    ),
                  };
                }),
              };
            })}
          />
        </Sider>
        <Layout className="site-layout">
          <Content className="p-12">
            <h1 className="text-2xl">{chapter.program}</h1>
            <p>
              <span className="text-2xl font-medium"> Chapter:</span>
              {chapter.title}
            </p>
            <p>
              <span className="font-medium text-2xl"> Description:</span>{" "}
              {chapter.description}
            </p>
            <div className="container mx-auto lg:flex-row bg-white border border-solid border-1 border-[#023047] rounded-xl">
              <p className="font-medium text-xl px-[20px] py-[10px]">
                fill your application:
              </p>
              <Form
                name="dynamic_form_item"
                {...formItemLayoutWithOutLabel}
                onFinish={onFinish} 
                form={form}
                style={{
                  maxWidth: 600,
                }}
              >
                <Form.Item name="docs" rules={[{ required: true, message: "Files are required" }]}>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Strictly prohibited from uploading company data or other
                      banned files.
                    </p>
                  </Dragger>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Details;
