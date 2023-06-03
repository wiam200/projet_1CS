import ActionButton from "@/components/UI/ActionButton";
import BlankButton from "@/components/UI/BlankButton";
import Input from "@/components/UI/Input";
import ModelBackup from "@/components/UI/ModelBackup";
import axios from "axios";
import React, { useState } from "react";

function AddUser() {
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [fullAddress, setFullAddress] = useState("");

  const user = {
    firstName,
    lastName,
    email,
    phoneNumber,
    job,
    salary,
    birthDay,
    birthPlace,
    password,
    role,
    fullAddress,
  };

  const addUserHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://projet-1cs-5133b-default-rtdb.firebaseio.com/users.json",
        user
      );

      console.log("User added to the database successfully");
    } catch (error) {
      setError(error.message);
    }
  };
  const cancelAddHandler = () => {
    setError("");
  };

  return (
    <ModelBackup>
      <form
        className=" w-[380px] md:w-[430px]  space-y-3 flex-col"
        onSubmit={addUserHandler}
      >
        <div className=" space-y-2">
          <div className="flex gap-1">
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
          </div>
          <div className="flex gap-1">
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
          </div>
          <div className="flex gap-1">
            <Input
              type="tel"
              id="tel"
              label="Phone "
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={phoneNumber}
            />
            <Input
              type="text"
              id="text2"
              label="Role"
              onChange={(event) => setRole(event.target.value)}
              value={role}
            />
          </div>
          <div className="flex gap-1 ">
            <Input
              type="date"
              id="date"
              label=""
              onChange={(event) => setBirthDay(event.target.value)}
              value={birthDay}
            />
            <Input
              type="text"
              id="text3"
              label="Birth place"
              onChange={(event) => setBirthPlace(event.target.value)}
              value={birthPlace}
            />
          </div>
          <Input
            type="text"
            id="text4"
            label="Full address"
            onChange={(event) => setFullAddress(event.target.value)}
            value={fullAddress}
          />
          <div className="flex gap-1">
            <Input
              type="text"
              id="text5"
              label="Job"
              onChange={(event) => setJob(event.target.value)}
              value={job}
            />
            <Input
              type="number"
              id="text6"
              label="Salary"
              onChange={(event) => setSalary(event.target.value)}
              value={salary}
            />
          </div>
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

export default AddUser;
