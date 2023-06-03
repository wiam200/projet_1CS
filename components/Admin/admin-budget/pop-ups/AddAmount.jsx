import ActionButton from "@/components/UI/ActionButton";
import BlankButton from "@/components/UI/BlankButton";
import Input from "@/components/UI/Input";
import ModelBackup from "@/components/UI/ModelBackup";
import {
  addChapterAmount,
  cancelAddOperation,
} from "@/store/reducers/budgetReducer";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddAmount() {
  const [chapterTitle, setChapterTitle] = useState("");
  const [chapterAmount, setChapterAmount] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const addHandler = (event) => {
    event.preventDefault();
    if (
      chapterTitle &&
      parseFloat(chapterAmount) < 50000000 &&
      parseFloat(chapterAmount) > 1000
    ) {
      dispatch(addChapterAmount({ chapterTitle, chapterAmount }));
    } else {
      // dynamique :amount shouldn't be greater then the black box
      setError("Enter a valid title and amount.");
    }
  };

  const cancelAddHandler = () => {
    setError("");
    dispatch(cancelAddOperation());
  };

  return (
    <ModelBackup>
      <form className=" w-full space-y-10 flex-col" onSubmit={addHandler}>
        <div className=" space-y-5">
          <Input
            type="text"
            id="text"
            label="Title"
            onChange={(event) => setChapterTitle(event.target.value)}
            value={chapterTitle}
          />

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
