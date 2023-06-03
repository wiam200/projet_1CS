import React from "react";
import Header from "./Header";
import BudgetAnalyticts from "./BudgetAnalyticts";
import GeneralAnalytics from "./GeneralAnalytics";
import Charts from "./Charts";
import Title from "@/components/UI/Title";

const DUMMY_GENERAL = [
  {
    id: "g1",
    amount: "23.5k",
    title: "all requests",
  },
  {
    id: "g2",
    amount: "+5",
    title: "all  programs",
  },
  {
    id: "g3",
    amount: "+73",
    title: "all announcements",
  },
];

function OverView() {
  return (
    <section className=" space-y-12 pt-20 pb-8">
      <Header />
      <BudgetAnalyticts />
      <Title title={"More analytics"} />
      <GeneralAnalytics data={DUMMY_GENERAL} />
      <Charts />
    </section>
  );
}

export default OverView;
