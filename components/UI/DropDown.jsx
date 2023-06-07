import { setSelectedProgram } from "@/store/reducers/budgetReducer";
import { TreeSelect } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const DropDownInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const onChange = (newValue) => {
    setValue(newValue);
    dispatch(setSelectedProgram(newValue));
  };
  const [programsList, setProgramsList] = useState([]);

  useEffect(() => {
    const getPrograms = async () => {
      const response = await axios.get(
        "http://192.168.129.1/QuantumLeap/public/api/programmes-titles",
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const data = await response.data.data;
      const newData = data.map((item) => {
        return {
          title: item,
          value: item,
        };
      });
      setProgramsList(newData);
    };

    getPrograms();
  }, []);
  return (
    <TreeSelect
      style={{
        width: "100%",
      }}
      value={value}
      dropdownStyle={{
        maxHeight: 400,

        overflow: "auto",
      }}
      treeData={programsList}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};
export default DropDownInput;
