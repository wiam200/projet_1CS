import ActionButton from "@/components/UI/ActionButton";
import BlankButton from "@/components/UI/BlankButton";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Space, Table } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { Fragment, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const data = [
  {
    key: "1",
    name: "Mehal wiam",
    id: 22,
    status: "waiting",
    date: "01/01/2023",
  },
  {
    key: "2",
    name: "Yahiaoui meriem",
    id: 745,
    status: "refused",
    date: "01/01/2022",
  },
  {
    key: "3",
    name: "Belagha ayoub",
    id: 22,
    status: "pending",
    date: "01/01/2021",
  },
  {
    key: "4",
    name: "Chelaoua naila",
    id: 258,
    status: "approved",
    date: "01/01/2019",
  },
  {
    key: "5",
    name: "Meddad merouane",
    id: 82,
    status: "refused",
    date: "01/01/2018",
  },
];
const Demandes = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null); // New state to track the selected request
  const searchInput = useRef(null);

  const handleRowClick = (record) => {
    setSelectedRequest(record);
  };

  const handleAccept = () => {
    console.log(
      `Dear ${selectedRequest.name}, The request you sent on ${selectedRequest.date} has been accepted.`
    );
    sendRequest(
      selectedRequest.id,
      "accepted",
      `Dear ${selectedRequest.name}, The request you sent on ${selectedRequest.date} has been accepted.`
    );
  };

  const handleRefuse = () => {
    console.log(
      `Dear ${selectedRequest.name}, The request you sent on ${selectedRequest.date} has been refused,recheck your documents.`
    );
    sendRequest(
      selectedRequest.id,
      "refused",
      `Dear ${selectedRequest.name}, The request you sent on ${selectedRequest.date} has been refused,recheck your documents.`
    );
  };

  const sendRequest = async (requestId, status, message) => {
    await axios
      .post(
        "https://projet-1cs-5133b-default-rtdb.firebaseio.com/requests.json",
        { id: requestId, status: status, message }
        //   ,
        // {
        //   headers: {
        //     Authorization: `Bearer ${Cookies.get("token")}`,
        //   },
        // }
      )
      .then((response) => {
        toast.success("In progress ...");
        setSelectedRequest(null);
        console.log("the request has been sent .");
      })
      .catch((error) => {
        setSelectedRequest(null);
        console.log("something went wrong");
      });
  };
  const renderDetailsModal = () => {
    if (!selectedRequest) return null;

    return (
      <Modal
        open={!!selectedRequest}
        title="Request Details"
        onCancel={() => setSelectedRequest(null)}
        footer={[
          <Button key="refuse" onClick={handleRefuse}>
            Refuse
          </Button>,
          <Button
            key="accept"
            type="primary"
            onClick={handleAccept}
            className=" bg-blue-950 hover:bg-blue-900"
          >
            Accept
          </Button>,
        ]}
        className="p-0"
      >
        <div className=" space-y-6 ml-6  text-base text-gray-500">
          <div className=" w-full h-full  mt-8 center justify-between ">
            <div className=" flex gap-4">
              <div className=" w-12 h-12 rounded-full bg-blue-950 text-gray-100 center ">
                {" "}
                <b>{selectedRequest.name[0]}</b>
              </div>
              <div className="">
                <h2 className=" font-semibold">{selectedRequest.name}</h2>
                <h2 className=" text-sm">w.mehal@esi-sba.dz</h2>
              </div>
            </div>
            <div>
              <h2 className=" text-gray-400">{selectedRequest.date}</h2>
            </div>
          </div>
          <div className=" ">
            <h2>
              <b> Program :</b> Health services
            </h2>
            <h2>
              <b>Status :</b> {selectedRequest.status}
            </h2>
            <p>
              <b>id:</b> {selectedRequest.id}
            </p>
          </div>
          <p className=" py-2">
            {" "}
            I am experiencing some health issues and I need help covering the
            costs of my medical bills. I have already seen a doctor and attached
            the medical bills and receipts to this request. I am requesting
          </p>
        </div>
        {/* Add more details here */}
      </Modal>
    );
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "35%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "20%",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps("status"),
      render: (text, record) => {
        let statusColor;
        let bgStatus;
        switch (record.status) {
          case "waiting":
            statusColor = "#477E99";
            bgStatus = "#ECFAFE";
            break;
          case "refused":
            statusColor = "#FF6B6B";
            bgStatus = "#FFE9E9";

            break;
          case "pending":
            statusColor = "#477E99";
            bgStatus = "#ECFAFE";

            break;
          case "approved":
            statusColor = "#66D04B";
            bgStatus = "#D9FCD6";

            break;
          default:
            statusColor = "blue";
            break;
        }
        return (
          <span
            style={{
              color: statusColor,
              backgroundColor: bgStatus,
              padding: "8px 20px",
              borderRadius: "110px",
            }}
          >
            <b>{text}</b>
          </span>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      ...getColumnSearchProps("date"),
      sorter: (a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      },
      sortDirections: ["descend", "ascend"],
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onClick: () => handleRowClick(record), // Attach click event handler to each row
        })}
      />
      {renderDetailsModal()}
    </div>
  );
};

export default Demandes;
