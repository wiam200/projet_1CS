import { EyeTwoTone,EyeInvisibleOutlined } from "@ant-design/icons";
import { Input, Space,Button } from "antd";
import React from "react";
const { TextArea } = Input;

const Contact = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="container mx-auto py-[24px] " id="contact">
      <div className="text-center">
        <h1 className="text-5xl text-[#023047]">Get in touch!</h1>
        <p className="text-slate-700">
          contact us for any comment or question!
        </p>
      </div>
      <div className="max-w-[736px] bg-white mx-auto px-[16px] py-[30px] border border-solid border-2 border-[#023047] rounded-xl">
        <div className="flex gap-20  ">
          {/* inputs */}
          <div className="flex-grow space-y-10">
            <div className="max-w-[320px]">
              <p>email</p>
              <Input placeholder="email..." />
            </div>

            <div>
              <p>Password</p>
              <Space direction="horizontal">
        <Input.Password
          placeholder="password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          style={{
            width:320,
          }}
        />
      </Space>
            </div>
          </div>
          {/* message  */}
          <div className="h-full">
            <p>message</p>
            <TextArea
              style={{ height: 268, resize: "none", width: 310, 
              }}
              placeholder="write your comment..."
            />
          </div>
        </div>
        {/* Buttonn */}
        <div className="flex justify-center py-[10px]">
        <Button className="rounded-2xl bg-[#023047] px-3.5 py-2.5 text-sm font-semibold text-white
            border border-[#023047] hover:text-[#023047] hover:bg-white "
        >Send
        
        </Button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
