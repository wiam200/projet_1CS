import ActionButton from "@/components/UI/ActionButton";
import ActionLoading from "@/components/UI/ActionLoading";
import BlankButton from "@/components/UI/BlankButton";
import Input from "@/components/UI/Input";
import ModelBackup from "@/components/UI/ModelBackup";
import { setModelAddProgramIsVisible } from "@/store/reducers/uiReducer";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProgram() {
  const dispatch = useDispatch();
  const [programTitle, setProgramTitle] = useState("");
  const [error, setError] = useState("");

  const addProgramHandler = async (event) => {
    event.preventDefault();
    if (programTitle && programTitle.trim().length > 5) {
      try {
        const response = await axios.post(
          "http://esi-social.azurewebsites.net/api/programmes/create",
          { titre: programTitle },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
        dispatch(setModelAddProgramIsVisible(false));
        toast.success("Program added successfully!");
      } catch (error) {
        setError(error.response.data.errors.titre);
      }
    } else {
      setError("Something went wrong.");
    }
  };

  const cancelAddProgramHandler = () => {
    setError("");
    dispatch(setModelAddProgramIsVisible(false));
  };

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

export default AddProgram;
