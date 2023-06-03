import ActionButton from "@/components/UI/ActionButton";
import BlankButton from "@/components/UI/BlankButton";
import Input from "@/components/UI/Input";
import ModelBackup from "@/components/UI/ModelBackup";
import {
  cancelTransferOperation,
  transferAmount,
} from "@/store/reducers/budgetReducer";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Transfer() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const transferAmountHandler = (event) => {
    event.preventDefault();

    if (
      source.length > 0 &&
      destination.length > 0 &&
      parseFloat(amount) > 1000 &&
      parseFloat(amount) < 50000
    ) {
      dispatch(transferAmount({ source, destination, amount }));
    } else {
      setError("Please enter a valid amount");
    }
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
          <Input
            type="text"
            id="text"
            label="Source"
            onChange={(event) => setSource(event.target.value)}
            value={source}
          />
          <Input
            type="text"
            id="text2"
            label="Destination"
            onChange={(event) => setDestination(event.target.value)}
            value={destination}
          />

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
