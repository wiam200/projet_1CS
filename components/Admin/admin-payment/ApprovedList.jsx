import DropDownPayment from "@/components/UI/DropDownPayment";
import Input from "@/components/UI/Input";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Table } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const data = [
  {
    key: "1",
    name: "Mehal wiam",
    id: 22,
    status: "approved",
    date: "01/01/2023",
  },
  {
    key: "2",
    name: "Yahiaoui meriem",
    id: 745,
    status: "approved",
    date: "01/01/2022",
  },
  {
    key: "3",
    name: "Belagha ayoub",
    id: 22,
    status: "approved",
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
    status: "approved",
    date: "01/01/2018",
  },
];
const ApprovedDemandes = () => {
  const [userAmount, setUserAmount] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null); // New state to track the selected request
  const searchInput = useRef(null);

  const handleRowClick = (record) => {
    setSelectedRequest(record);
  };

  const handleAccept = () => {
    sendRequest({
      id: selectedRequest.id,
      method: Cookies.get("method"),
      amount: userAmount,
    });
    console.log({
      id: selectedRequest.id,
      method: Cookies.get("method"),
      amount: userAmount,
    });
  };

  //   function handleReset() {}

  const sendRequest = async ({ id, method, amount }) => {
    await axios
      .post(
        "http://esi-social.azurewebsites.net/api/paydemande/" + id,
        { method, amount },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((response) => {
        toast.success("In progress ...");
        setSelectedRequest(null);
      })
      .catch((error) => {
        setSelectedRequest(null);
      });
  };
  const renderDetailsModal = () => {
    if (!selectedRequest) return null;

    return (
      <Modal
        open={!!selectedRequest}
        onCancel={() => setSelectedRequest(null)}
        footer={[
          //   <Button key="refuse" onClick={handleReset}>
          //     cancel
          //   </Button>,
          <Button
            key="accept"
            type="primary"
            onClick={handleAccept}
            className=" bg-green-600 hover:bg-green-700 "
          >
            Pay
          </Button>,
        ]}
      >
        <div className=" space-y-6  text-base text-gray-500">
          <form className=" w-full  space-y-4 pt-20 pb-10 px-6">
            <DropDownPayment />

            <Input
              type="number"
              id="email1"
              label="Amount "
              onChange={(event) => setUserAmount(event.target.value)}
              value={userAmount}
            />
          </form>
        </div>
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

export default ApprovedDemandes;
