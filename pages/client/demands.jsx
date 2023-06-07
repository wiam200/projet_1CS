import React from "react";
import { Table, Tag } from "antd";
import Nav from "@/components/Client/landing-components/Nav";
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    filters: [
      {
        text: "health",
        value: "health",
      },
      {
        text: "disaster",
        value: "disaster",
      },
    ],

    onFilter: (value, record) => record.title.indexOf(value) === 0,
    sorter: (a, b) => a.title.length - b.title.length,
    sortDirections: ["descend"],
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },

  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",

    filters: [
      {
        text: "rejected",
        value: "Rejected",
      },
      {
        text: "pending",
        value: "pending",
      },
      {
        text: "accepted",
        value: "accepted",
      },
    ],
    onFilter: (value, record) => record.tags.indexOf(value) === 0,

    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "rejected") {
            color = "volcano";
          }
          if (tag === "pending") {
            color = "orange";
          }

          if (tag === "accepted") {
            color = "green";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },

  {
    title: "Payed",
    key: "payed",
    dataIndex: "payed",

    filters: [
      {
        text: "payed",
        value: "payed",
      },
      {
        text: "not payed",
        value: "not payed",
      },
    ],
    onFilter: (value, record) => record.payed.indexOf(value) === 0,

    render: (_, { payed }) => (
      <>
        {payed.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "not payed") {
            color = "orange";
          }

          if (tag === "payed") {
            color = "green";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data = [
  {
    key: "1",
    title: "health",
    date: "12/12/2012",
    payed: ["not payed"],
    tags: ["accepted"],
  },
  {
    key: "2",
    title: "disaster",
    date: "12/12/2012",
    payed: ["payed"],
    tags: ["rejected"],
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Demands = () => {
  return (
    <div>
      <Nav />
      <div className="px-[104px] py-[70px] text-3xl text-[#023047] ">
        <h1>Demands History</h1>
        <div className="">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};

export default Demands;
