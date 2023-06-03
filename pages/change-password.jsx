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

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.token; // Get the token from the request cookies
  const isAuthenticated = !!token;

  if (isAuthenticated) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
