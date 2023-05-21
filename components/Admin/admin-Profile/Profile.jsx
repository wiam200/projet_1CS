import Input from "@/components/UI/Input";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  passwordResetSuccess,
  setError,
} from "@/store/reducers/userReducer";
import Button from "@/components/UI/Button";

function Profile() {
  const userName = useSelector((state) => state.user.userName);
  const email = useSelector((state) => state.user.email);

  const changePasswordSuccess = useSelector(
    (state) => state.user.passwordResetSuccess
  );

  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePasswordHandler = (event) => {
    event.preventDefault();

    if (
      oldPassword &&
      oldPassword.trim().length >= 6 &&
      newPassword &&
      confirmPassword &&
      newPassword.trim().length >= 6 &&
      confirmPassword.trim().length >= 6 &&
      newPassword === confirmPassword
    ) {
      dispatch(changePassword({ email, oldPassword, newPassword }));
    } else {
      dispatch(setError("Something went wrong ."));
    }
  };

  return (
    <div className=" w-full lg:h-[85vh] center items-end mt-10 lg:mt-0">
      <div className="center flex-col lg:flex-row justify-around bg-gray-50 w-[90%] py-12 px-14 rounded-[10px] shadow-lg mb-6 ">
        {" "}
        <div className=" flex flex-col center  gap-8 lg:w-[35%] ">
          <div className=" w-[180px]  h-[180px]  rounded-full overflow-hidden outline-double">
            <Image
              src="/images/no-profile-picture.jpg"
              alt="profile picture"
              width={180}
              height={180}
            />
          </div>
          <div className=" flex flex-col space-y-1">
            <h3 className=" text-2xl font-medium">Mehal wiam</h3>
            <div className=" text-base font-medium text-gray-600">
              {" "}
              w.mehal@esi-sba.dz
            </div>
          </div>{" "}
        </div>
        <div className=" w-full lg:w-[45%] space-y-10 mt-16 lg:mt-0">
          <h1 className=" text-2xl font-medium ">Reset password :</h1>
          <form
            className=" space-y-4 w-full lg:w-[80%] h-[80%] z-10"
            onSubmit={changePasswordHandler}
          >
            <Input
              type="password"
              id="oldpassword"
              label="Old password"
              onChange={(event) => setOldPassword(event.target.value)}
              value={oldPassword}
            />
            <Input
              type="password"
              id="newpassword"
              label="New password"
              onChange={(event) => setNewPassword(event.target.value)}
              value={newPassword}
            />
            <Input
              type="password"
              id="confirmnewpassword"
              label="Confirm password"
              onChange={(event) => setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />
            <Button value="reset password" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
