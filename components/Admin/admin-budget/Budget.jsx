import React, { Fragment, useEffect } from "react";
import GeneralAnalytics from "../admin-ov/GeneralAnalytics";
import Title from "@/components/UI/Title";
import Chapters from "./Chapters";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Budget() {
  const init = useSelector((state) => state.budget.initialBudget);
  const expenses = useSelector((state) => state.budget.expensesBudget);
  const curr = useSelector((state) => state.budget.currentBudget);
  const blackBox = useSelector((state) => state.budget.blackBox);
  const chapters = useSelector((state) => state.budget.chaptersAmounts);
  return (
    <Fragment>
      <section className=" space-y-10 mt-16">
        <GeneralAnalytics data={[init, curr, expenses]} />
        <Title title={"All chapters amount"} />
        <Chapters data={chapters} />
        <Footer blackBox={blackBox} />
      </section>
    </Fragment>
  );
}

export default Budget;
