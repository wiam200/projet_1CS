import ActionButton from "@/components/UI/ActionButton";
import ActionLoading from "@/components/UI/ActionLoading";
import BlankButton from "@/components/UI/BlankButton";
import Input from "@/components/UI/Input";
import ModelBackup from "@/components/UI/ModelBackup";
import {
  setModelAddProgramIsVisible,
  setModelAddSubProgramIsVisible,
} from "@/store/reducers/uiReducer";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddSubProgram() {
  const dispatch = useDispatch();
  const [subProgramTitle, setSubProgramTitle] = useState("");
  const [subDescription, setSubDescription] = useState("");
  const [subAmount, setSUbAmount] = useState("");
  const [error, setError] = useState("");
  const id = useSelector((state) => state.programs.programId);

  const addSubProgramHandler = async (event) => {
    event.preventDefault();
    console.log(id);
    if (subDescription && subAmount && subProgramTitle.trim().length > 5) {
      try {
        console.log(id);
        const response = await axios.post(
          "http://esi-social.azurewebsites.net/api/oeuvres/create",
          {
            programmeId: id,
            titre: subProgramTitle,
            description: subDescription,
            amount: subAmount,
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
        dispatch(setModelAddSubProgramIsVisible(false));
        toast.success("Sub Program added successfully!");
      } catch (error) {
        setError("sub chapter not added");
        console.log(error.response);
      }
    } else {
      setError("Something went wrong.");
    }
  };

  // const cancelAddProgramHandler = () => {
  //   setError("");
  //   dispatch(setModelAddProgramIsVisible(false));
  // };

  return (
    <ModelBackup>
      <form
        className=" w-full space-y-10 flex-col"
        onSubmit={addSubProgramHandler}
      >
        <div className=" space-y-5">
          <Input
            type="text"
            id="text"
            label="Title"
            onChange={(event) => setSubProgramTitle(event.target.value)}
            value={subProgramTitle}
          />
          <Input
            type="text"
            id="text2"
            label="Description"
            onChange={(event) => setSubDescription(event.target.value)}
            value={subDescription}
          />
          <Input
            type="number"
            id="number"
            label="Amount"
            onChange={(event) => setSUbAmount(event.target.value)}
            value={subAmount}
          />
        </div>
        <div className=" w-full flex gap-2 justify-end ">
          <div>
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

export default AddSubProgram;
