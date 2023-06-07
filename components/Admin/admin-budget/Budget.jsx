import React, { Fragment } from "react";
import GeneralAnalytics from "../admin-ov/GeneralAnalytics";
import Title from "@/components/UI/Title";
import Chapters from "./Chapters";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Budget() {
  const blackBox = useSelector((state) => state.budget.blackBox);
  const init = useSelector((state) => state.budget.initialBudget);
  const expenses = useSelector((state) => state.budget.expensesBudget);
  const curr = useSelector((state) => state.budget.currentBudget);

  return (
    <Fragment>
      <section className=" space-y-10 mt-16">
        <Title title={"All chapters amount"} />
        <GeneralAnalytics data={[init, curr, expenses]} />
        <Chapters />
        <Footer blackBox={blackBox} />
      </section>
    </Fragment>
  );
}

export default Budget;
