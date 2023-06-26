import ActionButton from "@/components/UI/ActionButton";
import BlankButton from "@/components/UI/BlankButton";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Space, Table, message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { Fragment, useRef, useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getDemandesByStatus,
  changeStatusDemandes,
  payDemande,
} from "@/api/demandes";
import PdfPreview from "@/components/Client/AttachementModal";
import PaymentMethodDropDown from "@/components/UI/PaymentMethodDropDown"

const Paiements = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null); // New state to track the selected request
  const [data, setData] = useState([]);
  const searchInput = useRef(null);

  useEffect(() => {
    getDemandesByStatus().then((res) => {
      setData(res);
    });
  }, []);

  const handleRowClick = (record) => {
    setSelectedRequest(record);
  };

  const renderDetailsModal = () => {
    const [amount, setAmount] = useState(0);
    const [method, setMethod] = useState("transfert");
    const [isPaying, setIsPaying] = useState(false);

    const handleAccept = async () => {
      setIsPaying(true);
      await payDemande(selectedRequest.id, amount, method).then(
        (res) => {
          setSelectedRequest(null);
        },
        (err) => {
          message.error("An error occured during paiment");
        }
      );
      setIsPaying(false);
    };

    if (!selectedRequest) return null;
    return (
      <Modal
        open={!!selectedRequest}
        title="Request Details"
        onCancel={() => setSelectedRequest(null)}
        footer={[
          <Button
            key="refuse"
            className="border border-red-300 hover:border-red-500"
            onClick={() => setSelectedRequest(null)}
          >
            Cancel
          </Button>,
          <Button
            key="accept"
            type="primary"
            onClick={handleAccept}
            loading={isPaying}
            className="bg-blue-950 hover:bg-blue-900"
          >
            Pay
          </Button>,
        ]}
        className="p-0"
      >
        <div className=" space-y-6 ml-6  text-base text-gray-500">
          <div className=" w-full h-full  mt-8 center justify-between ">
            <div className=" flex gap-4">
              <div className=" w-12 h-12 rounded-full bg-blue-950 text-gray-100 center ">
                <b>{selectedRequest.name[0]}</b>
              </div>
              <div>
                <h2 className="font-semibold">{selectedRequest.name}</h2>
              </div>
            </div>
            <div>
              <h2 className="text-gray-400">{selectedRequest.date}</h2>
            </div>
          </div>
          <div>
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
          <div>
            <PaymentMethodDropDown onChange={(val) => setMethod(val)} />
          </div>
          <div>
            <Input
              type="number"
              id="amount"
              placeholder="Amount To Pay"
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
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

export default Paiements;
