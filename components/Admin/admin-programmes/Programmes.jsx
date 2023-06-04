import Title from "@/components/UI/Title";
import React from "react";
import { Collapse } from "antd";
import ActionButton from "@/components/UI/ActionButton";
import Header from "./Header";
import { useSelector } from "react-redux";
import AddAmount from "../admin-budget/pop-ups/AddAmount";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const programmesList = [
  {
    id: "p1",
    title: "Social assistance",
    items: [
      {
        id: "e1",
        title: "retirement",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "8000 da",
      },
      {
        id: "e2",
        title: "mariage",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "20.000 da",
      },
      {
        id: "e3",
        title: "mariage",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "20.000 da",
      },
      {
        id: "e4",
        title: "new born",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "7900 da",
      },
    ],
  },
  {
    id: "p2",
    title: "Health services",
    items: [
      {
        id: "h1",
        title: "surgeries",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "150.000 da",
      },
      {
        id: "h2",
        title: "iron bath",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "50.000 da",
      },
    ],
  },
  {
    id: "p3",
    title: "Solidarty",
    items: [
      {
        id: "s2",
        title: "accidents and disasters",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "50.000 da",
      },
      {
        id: "s3",
        title: "social & health",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "50.000 da",
      },
    ],
  },

  {
    id: "p4",
    title: "lending",
    items: [
      {
        id: "l1",
        title: "exceptionals ",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "50.000 da",
      },
    ],
  },
  {
    id: "p5",
    title: "Cultural activities",
    items: [
      {
        id: "c1",
        title: "sports activities",
        description:
          "  dog is a type of domesticated animal Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.",
        amount: "50.000 da",
      },
    ],
  },
];
const Programmes = () => {
  const addIsVisible = useSelector((state) => state.ui.modelAddIsVisible);

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <section className=" space-y-10 mt-16">
      <Header />
      <Collapse onChange={onChange}>
        {programmesList.map((programme) => {
          return (
            <Panel
              header={programme.title}
              key={programme.id}
              className=" py-2 px-6 text-xl"
            >
              <Collapse defaultActiveKey="1">
                {programme.items.map((item) => {
                  return (
                    <Panel
                      header={item.title}
                      key={item.id}
                      className=" text-lg"
                    >
                      <div className="flex justify-between px-8">
                        <p className=" w-[70%] text-base text-gray-600 ">
                          {item.description}
                        </p>
                        <h3 className=" text-base font-semibold text-[#023047]">
                          {item.amount}
                        </h3>
                      </div>
                    </Panel>
                  );
                })}
              </Collapse>
              <div className=" py-6 center">
                <ActionButton value={"New chapter"} />{" "}
              </div>
            </Panel>
          );
        })}
      </Collapse>
      {addIsVisible && <AddAmount />}
    </section>
  );
};
export default Programmes;
