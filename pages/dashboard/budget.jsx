import Budget from "@/components/Admin/admin-budget/Budget";
import {
  setBlackBox,
  setChaptersAmounts,
  setCurrentBudget,
  setExpensesBudget,
  setInitialBudget,
} from "@/store/reducers/budgetReducer";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";

function Budgete(props) {
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

  const {
    initialBudget,
    currentBudget,
    expensesBudget,
    blackBox,
    chaptersAmounts,
  } = response.data;
  return {
    props: {
      initialBudget,
      currentBudget,
      expensesBudget,
      blackBox,
      chaptersAmounts,
    },
  };
}
