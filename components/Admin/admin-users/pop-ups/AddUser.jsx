import ActionButton from "@/components/UI/ActionButton";
import BlankButton from "@/components/UI/BlankButton";
import Input from "@/components/UI/Input";
import ModelBackup from "@/components/UI/ModelBackup";
import { setModelAddUserIsVisible } from "@/store/reducers/uiReducer";
import { createUser } from "@/store/reducers/usersReducer";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [password, setPassword] = useState("");
  const user = {
    firstName,
    lastName,
    email,
    job,
    password,
  };

  const dispatch = useDispatch();
  const sucessAdd = useSelector((state) => state.users.addUserSuccess);
  const failedAdd = useSelector((state) => state.users.addUserError);
  console.log(failedAdd, sucessAdd);
  const router = useRouter();

  const addUserHandler = async (event) => {
    event.preventDefault();
    //verification
    dispatch(createUser(user));
    // router.replace("/dashboard/users");
  };

  const cancelAddHandler = () => {
    setError("");
  };

  return (
    <ModelBackup>
      <form
        className=" w-[380px]   space-y-8 flex-col"
        onSubmit={addUserHandler}
      >
        <div className=" space-y-4">
          <Input
            type="text"
            id="text"
            label="First name"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />

          <Input
            type="text"
            id="text1"
            label="Last name"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
          <Input
            type="email"
            id="email"
            label="Email address"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />

          <Input
            type="text"
            id="text5"
            label="Job"
            onChange={(event) => setJob(event.target.value)}
            value={job}
          />
        </div>

        <div className=" w-full flex gap-2 justify-end ">
          <div>
            {" "}
            <BlankButton value={"cancel"} />
          </div>
          <ActionButton value={"add"} />
        </div>
        {failedAdd && (
          <div className="text-red-600 text-center">{failedAdd}</div>
        )}
        {sucessAdd && (
          <div className=" text-green-500 text-center">{sucessAdd}</div>
        )}
      </form>
    </ModelBackup>
  );
}

export default AddUser;
