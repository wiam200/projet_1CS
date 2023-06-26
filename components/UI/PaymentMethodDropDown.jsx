import { setSelectedProgram } from "@/store/reducers/budgetReducer";
import { TreeSelect } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChapters } from "@/api/programs";

const methodes = [
  {
    label: "Paiement par virement",
    value: "transfert",
  },
  {
    label: "Paiement cash",
    value: "cash",
  },
  {
    label: "Paiement par cheque",
    value: "cheque",
  },
];

const PaymentMethodDropDown = ({ onChange }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("transfert");

  const onChangeValue = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <TreeSelect
      style={{
        width: "100%",
      }}
      value={value}
      treeData={methodes}
      placeholder="Selectionner la methode du paiement"
      treeDefaultExpandAll
      onChange={onChangeValue}
    />
  );
};
export default PaymentMethodDropDown;
