import Programmes from "@/components/Admin/admin-programmes/Programmes";
import { setProgramsList } from "@/store/reducers/progamsReducer";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const tokenUser = Cookies.get("token");
function Programs() {
  const dispatch = useDispatch();

  return (
    <div>
      <Programmes />
    </div>
  );
}

export default Programs;

export async function getServerSideProps(context) {
  // const { req } = context;
  // const token = req.cookies.token; // Get the token from the request cookies
  // const isAuthenticated = !!token;

  // if (!isAuthenticated) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }
  // const response = await axios.get(
  //   "https://projet-1cs-5133b-default-rtdb.firebaseio.com/programmes.json"
  // );

  // const programsList = response.data;
  // if (!response.ok) console.log(response.data);

  return {
    props: {
      // programsList,
    },
  };
}
