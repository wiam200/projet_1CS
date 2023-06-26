import { setSelectedProgramDestination } from "@/store/reducers/budgetReducer";
import { TreeSelect } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChapters } from "@/api/programs";

const DropDownDestination = ({ source }) => {
  const dispatch = useDispatch();
  const [programsList, setProgramsList] = useState([]);
  const [value, setValue] = useState();

  const onChange = (newValue) => {
    setValue(newValue);
    dispatch(setSelectedProgramDestination(newValue));
  };

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
export default DropDownDestination;
