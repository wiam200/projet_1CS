import React from "react";

const DUMMY_BILAN = [
  {
    id: "b1",
    amount: "7743,000 Da",
    title: "initial amount",
    date: "03/05/2023",
  },
  {
    id: "b2",
    amount: "53,000 Da",
    title: "remaining amount",
    date: "03/05/2023",
  },
  {
    id: "b3",
    amount: "722,000 Da",
    title: "revenue amount",
    date: "03/05/2023",
  },
  {
    id: "b4",
    amount: "820,00 Da",
    title: "expenses amount",
    date: "03/05/2023",
  },
];

function BudgetAnalyticts() {
  return (
    <div className=" w-full  lg:h-[150px]">
      <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
        {DUMMY_BILAN.map((item) => {
          return (
            <li
              key={item.id}
              className=" bg-[var(--primary-color-light)]  h-full center flex-col rounded-[10px] shadow-md space-y-1 py-6 lg:py-0"
            >
              <h2 className=" text-[25px] text-[#023047]/80 font-semibold">
                {item.amount}{" "}
              </h2>
              <h5 className=" text-[18px] text-[#023047]/70 font-medium">
                {item.title}
              </h5>
              <h6 className=" text-[14px] text-[#023047]/60 font-medium">
                {item.date}
              </h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BudgetAnalyticts;
