import Programmes from "@/components/Admin/admin-programmes/Programmes";
import { setChaptersAmounts } from "@/store/reducers/budgetReducer";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";

function Programs(props) {
  const dispatch = useDispatch();
  const { chaptersAmounts } = props;

  dispatch(setChaptersAmounts(chaptersAmounts));
  return (
    <div>
      <Programmes />
    </div>
  );
}

export default Programs;

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.token; // Get the token from the request cookies
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const response = await axios.get(
    "https://projet-1cs-5133b-default-rtdb.firebaseio.com/budget.json"
  );
  //programmes
  const { chaptersAmounts } = response.data;
  return {
    props: {
      chaptersAmounts,
    },
  };
}
