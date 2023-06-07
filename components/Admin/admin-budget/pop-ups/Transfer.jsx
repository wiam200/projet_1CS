import ActionButton from "@/components/UI/ActionButton";
import BlankButton from "@/components/UI/BlankButton";
import DropDownInput from "@/components/UI/DropDown";
import DropDownDestination from "@/components/UI/DropDownDestination";
import Input from "@/components/UI/Input";
import ModelBackup from "@/components/UI/ModelBackup";
import {
  cancelTransferOperation,
  transferAmount,
} from "@/store/reducers/budgetReducer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Transfer() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const source = useSelector((state) => state.budget.selectedProgram);
  const destination = useSelector(
    (state) => state.budget.selectedProgramDestination
  );
  const dispatch = useDispatch();

  const transferAmountHandler = (event) => {
    event.preventDefault();

    dispatch(transferAmount({ source, destination, amount }));
  };

  const cancelHandler = () => {
    dispatch(cancelTransferOperation());
  };

  return (
    <ModelBackup>
      <form
        className=" w-full space-y-10 flex-col"
        onSubmit={transferAmountHandler}
      >
        <div className=" space-y-5">
          <DropDownInput />
          <DropDownDestination />

          <Input
            type="number"
            id="number"
            label="Amount"
            onChange={(event) => setAmount(event.target.value)}
            value={amount}
          />
        </div>
        <div className=" w-full flex gap-2 justify-end ">
          <div onClick={cancelHandler}>
            <BlankButton value={"cancel"} />
          </div>
          <ActionButton value={"transfer"} />
        </div>
        {error && <div className="text-red-600 text-center">{error}</div>}
      </form>
    </ModelBackup>
  );
}

export default Transfer;
