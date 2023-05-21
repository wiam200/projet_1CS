import React from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, setError } from "@/store/reducers/userReducer";
import Link from "next/link";
import Image from "next/image";
import Spinner from "../UI/Spinner";
import Input from "../UI/Input";
import Button from "../UI/Button";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const loginHandler = async (event) => {
    event.preventDefault();

    if (
      email &&
      email.includes("@") &&
      password &&
      password.trim().length > 6
    ) {
      dispatch(login({ email, password }));
    } else {
      dispatch(setError("invalid email or password !"));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className=" w-full h-full  flex justify-center items-center">
      <div className=" flex flex-col w-[98%] h-[70%] md:w-[60%]  lg:w-[40%]   lg:h-[85%] space-y-4">
        <div className=" w-full h-[10px] bg-[#023047]/80  rounded-md"></div>

        <form
          onSubmit={loginHandler}
          className=" bg-gray-50 py-8 px-6 md:px-14 space-y-12 center flex-col  w-full h-full rounded-[16px] shadow-xl"
        >
          <div className=" w-full flex justify-center">
            <Image
              src="/images/esi.png"
              alt="esi sba logo"
              width={140}
              height={180}
            />
          </div>
          <div className=" space-y-6 w-full h-full flex flex-col">
            <div className=" w-full space-y-6">
              <Input
                type="email"
                id="email"
                label="Email"
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
            <div className=" text-center flex flex-col gap-4">
              <Button value="Sign in" />
              <Link href="/change-password" legacyBehavior>
                <a className=" underline text-[#356AAE] hover:text-[#023047]">
                  {" "}
                  forgot password ?
                </a>
              </Link>
            </div>
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

export default AuthForm;
