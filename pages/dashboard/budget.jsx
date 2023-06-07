import Budget from "@/components/Admin/admin-budget/Budget";

import React from "react";
import { useDispatch } from "react-redux";
import {
  setBlackBox,
  setChaptersAmounts,
  setCurrentBudget,
  setExpensesBudget,
  setInitialBudget,
} from "@/store/reducers/budgetReducer";
import axios from "axios";
import Layout from "@/components/Admin/Layout/Layout";
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

  return (
    <Layout>
      <Budget />
    </Layout>
  );
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
    "http://esi-social.azurewebsites.net/api/budget",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const dataOne = await response.data.data;
  const {
    initialBudget,
    currentBudget,
    expensesBudget,
    blackBox,
    chaptersAmounts,
  } = dataOne;

  return {
    props: {
      initialBudget,
      currentBudget,
      expensesBudget,
      blackBox,
      chaptersAmounts: chaptersAmounts,
    },
  };
}
