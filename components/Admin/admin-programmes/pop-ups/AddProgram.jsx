import ActionButton from "@/components/UI/ActionButton";
import BlankButton from "@/components/UI/BlankButton";
import Input from "@/components/UI/Input";
import ModelBackup from "@/components/UI/ModelBackup";
import axios from "axios";
import { useState } from "react";

function AddAmount() {
  const [error, setError] = useState("");

  const addProgramHandler = (event) => {
    event.preventDefault();
    if (programTitle && programTitle.trim().length > 5) {
      setError("");
      const response = axios.post("", programTitle);
    } else {
      // dynamique :amount shouldn't be greater then the black box
      setError("Enter a valid title.");
    }
  };

  //   const cancelAddProgramHandler = () => {
  //     setError("");
  //     dispatch(cancelAddOperation());
  //   };

  return (
    <ModelBackup>
      <form
        className=" w-full space-y-10 flex-col"
        onSubmit={addProgramHandler}
      >
        <div className=" space-y-5">
          <Input
            type="text"
            id="text"
            label="Title"
            onChange={(event) => setProgramTitle(event.target.value)}
            value={programTitle}
          />
        </div>
        <div className=" w-full flex gap-2 justify-end ">
          <div onClick={cancelAddProgramHandler}>
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
