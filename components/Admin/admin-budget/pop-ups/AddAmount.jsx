import ActionButton from "@/components/UI/ActionButton";
import BlankButton from "@/components/UI/BlankButton";
import DropDownInput from "@/components/UI/DropDown";
import Input from "@/components/UI/Input";
import ModelBackup from "@/components/UI/ModelBackup";
import {
  addChapterAmount,
  cancelAddOperation,
  setSelectedProgram,
} from "@/store/reducers/budgetReducer";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddAmount() {
  const [chapterAmount, setChapterAmount] = useState("");
  const [error, setError] = useState("");
  const selectedProgram = useSelector((state) => state.budget.selectedProgram);
  const dispatch = useDispatch();
  const addHandler = (event) => {
    event.preventDefault();
    if (
      selectedProgram &&
      parseFloat(chapterAmount) < 50000000 &&
      parseFloat(chapterAmount) > 1000
    ) {
      dispatch(addChapterAmount({ selectedProgram, chapterAmount }));
      // dispatch(setSelectedProgram(null));
    } else {
      // dynamique :amount shouldn't be greater then the black box
      setError("Enter a valid title and amount.");
    }
  };

  const cancelAddHandler = () => {
    setError("");
  };

  return (
    <ModelBackup>
      <form className=" w-full space-y-10 flex-col z-40" onSubmit={addHandler}>
        <div className=" space-y-5">
          <DropDownInput />
          <Input
            type="number"
            id="number"
            label="Amount"
            onChange={(event) => setChapterAmount(event.target.value)}
            value={chapterAmount}
          />
        </div>
        <div className=" w-full flex gap-2 justify-end ">
          <div onClick={cancelAddHandler}>
            {" "}
            <BlankButton value={"cancel"} />
          </div>
          <ActionButton value={"add"} />
        </div>
        {error && <div className="text-red-600 text-center">{error}</div>}
      </form>
    </ModelBackup>
  );
}

export default AddAmount;
