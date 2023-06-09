import { BellOutlined } from "@ant-design/icons";
import { Avatar, Badge, Popover, List } from "antd";
import Link from "next/link";
import { useState } from "react";
import Notification from "@/components/Admin/Navigation/Notification";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/store/reducers/userReducer";
import Cookies from "js-cookie";

const navigation = [
  { name: "Accueil", href: "/client" },
  { name: "programs", href: "/client/programs" },
  { name: "My demands", href: "/client/demands" },
  { name: "Contact", href: null },
];
const UserList = ["U"];
const ColorList = ["#00a2ae"];

export default function Nav() {
  const userName = useSelector((state) => state.user.userName);
  const [profileState, setProfileState] = useState(false);
  const dispactch = useDispatch();

  const logOutHandler = () => {
    dispactch(logOut());
    console.log("wiam");
    Cookies.remove("token");
  };

  const data = [
    {
      title: "Notification 1",
      content: "Content of notification 1",
    },
    {
      title: "Notification 2",

      content: "Content of notification 2",
    },
    {
      title: "Notification 3",
      content: "Content of notification 3",
    },
    {
      title: "Notification 4",
      content: "Content of notification 4",
    },
  ];

  const [count, setCount] = useState(5);
  const [user] = useState(UserList[0]);
  const [color] = useState(ColorList[0]);

  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-white ">
      <header className="w-full border-b border-solid">
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global "
        >
          <div className="flex ">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="" alt="LOGO" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) =>
              item.href ? (
                <Link key={item.name} href={item.href} legacyBehavior>
                  <a className="text-sm font-medium leading-6 text-[#023047] hover:text-[#023047]">
                    {item.name}
                  </a>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={scrollToContact}
                  className="text-sm font-medium leading-6 text-[#023047] hover:text-[#023047]"
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          <div className=" lg:flex  lg:items-center gap-x-4">
            {/* <div className=""> */}
            <Notification />
            {/* <Popover
              placement="bottomRight"
              title="notifications"
              content={
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item, index) => (
                    <List.Item>
                      <p className="font-bold">{item.title}</p>
                      <p>{item.content}</p>
                    </List.Item>
                  )}
                />
              }
              trigger="click"
              onOpenChange={() => setCount(0)}
            >
              <div className="pr-4">
                <Badge count={count} size="small">
                  <BellOutlined
                    className="text-2xl"
                    style={{ color: "#023047" }}
                  />
                </Badge>
              </div>
            </Popover> */}
            {/* </div> */}
            <Link href="/" onClick={logOutHandler} className="text-sm font-bold text-red-500">
              Sign out
            </Link>
            <a href="#"></a>
          </div>
        </nav>
      </header>
    </div>
  );
}
