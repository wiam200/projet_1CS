import Budget from "@/components/Admin/admin-budget/Budget";
import {
  setBlackBox,
  setChaptersAmounts,
  setCurrentBudget,
  setExpensesBudget,
  setInitialBudget,
} from "@/store/reducers/budgetReducer";
import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";

// const token = Cookies.get("token");
function Budgete(props) {
  console.log(props);
  const dispatch = useDispatch();
  const {
    initialBudget,
    currentBudget,
    expensesBudget,
    blackBox,
    chaptersAmounts,
  } = props;
  dispatch(setInitialBudget(initialBudget));
  dispatch(setCurrentBudget(currentBudget));
  dispatch(setExpensesBudget(expensesBudget));
  dispatch(setBlackBox(blackBox));
  dispatch(setChaptersAmounts(chaptersAmounts));

  return <Budget budgetdata={props.initialBudget} />;
}

export default Budgete;

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.token; // Get the token from the request cookies
  // const isAuthenticated = !!token;

  // if (!isAuthenticated) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  const response = await axios.get(
    "http://192.168.129.1/QuantumLeap/public/api/budget",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  // const responseTwo = await axios.get(
  //   "https://projet-1cs-5133b-default-rtdb.firebaseio.com/budget.json",
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  // );

  const dataOne = await response.data.data;
  // const dataTwo = await responseTwo.data;

  const {
    initialBudget,
    currentBudget,
    expensesBudget,
    blackBox,
    //chaptersAmounts,
  } = dataOne;
  // const { chaptersAmounts } = responseTwo.data;
  return {
    props: {
      initialBudget,
      currentBudget,
      expensesBudget,
      blackBox,
      chaptersAmounts: [{ chapterTitle: "wiam", chapterAmount: "2000" }],
    },
  };
}
