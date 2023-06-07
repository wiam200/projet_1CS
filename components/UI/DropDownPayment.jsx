import { Select } from "antd";
import Cookies from "js-cookie";

const handleChange = (value) => {
  console.log(value.value);
  Cookies.set("method", value.value);
};

const DropDownPayment = () => (
  <Select
    labelInValue
    defaultValue={{
      value: " ",
      label: "Method",
    }}
    style={{
      width: 180,
    }}
    onChange={handleChange}
    options={[
      {
        value: "cheque",
        label: "cheque",
      },
      {
        value: "transfert",
        label: "transfert",
      },
      {
        value: "cash",
        label: "cash",
      },
    ]}
  />
);
export default DropDownPayment;
