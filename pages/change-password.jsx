import ResetPassword from "@/components/Auth_components/Reset-password";
import React from "react";

function changePassword() {
  return (
    <div className=" flex bg-white/80 justify-center items-center w-full h-[100vh]">
      <ResetPassword />
    </div>
  );
}

export default changePassword;
