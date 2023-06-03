import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import Spinner from "../UI/Spinner";
import Input from "../UI/Input";
import Button from "../UI/Button";
<<<<<<< HEAD
import { resetPassword } from "../../store/reducers/userReducer";
=======
import { resetPassword } from "@/store/reducers/userReducer";
>>>>>>> 3cbdea4 (overview and budget pages with some other changes)

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  const ResetPasswordHandler = async (event) => {
    event.preventDefault();

    if (newPassword !== ConfirmPassword)
      dispatch(setError("The passwords don't match "));
    if (newPassword.trim().length < 6)
      dispatch(setError("The password must be more then 6 chars."));

    dispatch(resetPassword({ email }));
    // console.log(newPassword);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className=" w-full h-full  flex justify-center items-center">
      <div className=" flex flex-col w-[98%] h-[70%] md:w-[60%]  lg:w-[40%]   lg:h-[85%] space-y-4">
        <div className=" w-full h-[10px] bg-[#023047]/80  rounded-md"></div>

        <form
          onSubmit={ResetPasswordHandler}
          className=" bg-gray-50 py-8 px-6 md:px-14 space-y-12 w-full h-full rounded-[16px] shadow-xl"
        >
          <div className=" w-full flex justify-center">
            <Image
              src="/images/esi.png"
              alt="esi sba logo"
              width={140}
              height={180}
            />
          </div>
          <div className=" space-y-6 flex flex-col">
            <div className=" w-full space-y-6">
              <Input
                type="password"
                id="password"
                label="New password"
                onChange={(event) => setNewPassword(event.target.value)}
                value={newPassword}
              />
              <Input
                type="password"
                id="password"
                label="Confirm password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                value={ConfirmPassword}
              />
            </div>
            <Button value="Reset password" />

            {error && (
              <div className=" h-2 text-center text-red-600 ">
                {error.toString()}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
