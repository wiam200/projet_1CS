import { setSelectedProgram } from "@/store/reducers/budgetReducer";
import { TreeSelect } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChapters } from "@/api/programs";

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
      const data = await getChapters();
      const newData = data.map((item) => {
        return {
          title: item.titre,
          value: item.titre,
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
