import React, { Fragment, useEffect, useState } from "react";
import { Collapse } from "antd";
import ActionButton from "@/components/UI/ActionButton";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import AddProgram from "./pop-ups/AddProgram";
import AddSubProgram from "./pop-ups/AddSubProgram";
import { setModelAddSubProgramIsVisible } from "@/store/reducers/uiReducer";
import { setProgramId, setProgramsList } from "@/store/reducers/progamsReducer";
import { DeleteFilled } from "@ant-design/icons";
import Cookies from "js-cookie";
import axios from "axios";
const { Panel } = Collapse;
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const editProgram = () => {
//   <EditOutlined
//     className=" text-[#686868]"
//     onClick={async (event) => {
//       event.stopPropagation();
//     }}
//   />;
// };

const genExtraSubProgram = (id) => (
  <DeleteFilled
    className=" text-[#686868]"
    onClick={async (event) => {
      event.stopPropagation();
      try {
        const response = await axios.post(
          "http://esi-social.azurewebsites.net/api/oeuvres/delete/" + id,
          {},
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
      toast.success("Sub Program Deleted Successfully.");
    }}
  />
);

const genExtraProgram = (id) => (
  <DeleteFilled
    className=" text-[#686868]"
    onClick={async (event) => {
      event.stopPropagation();
      try {
        const response = await axios.post(
          "http://esi-social.azurewebsites.net/api/programmes/delete/" + id,
          {},
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
      toast.success("Program Deleted Successfully.");
    }}
  />
);

const Programmes = () => {
  const dispatch = useDispatch();
  const addProgram = useSelector((state) => state.ui.modelAddProgramIsVisible);
  const addSubProgram = useSelector(
    (state) => state.ui.modelAddSubProgramIsVisible
  );

  const programsList = useSelector((state) => state.programs.programsList);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://esi-social.azurewebsites.net/api/programmes",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );
        const programms = await response.data.data;
        dispatch(setProgramsList(programms));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Fragment>
      <section className=" space-y-10 mt-16">
        <Header />
        <Collapse onChange={onChange}>
          {programsList.map((programme) => {
            return (
              <Panel
                header={programme.titre}
                key={programme.id}
                extra={genExtraProgram(programme.id)}
                className=" py-2 px-6 text-xl"
              >
                <Collapse defaultActiveKey="1">
                  {programme.oeuvres.map((oeuvre) => {
                    return (
                      <Panel
                        header={oeuvre.titre}
                        key={oeuvre.id}
                        className=" text-lg"
                        extra={genExtraSubProgram(oeuvre.id)}
                      >
                        <div className="flex justify-between px-8">
                          <p className=" w-[70%] text-base text-gray-600 ">
                            {oeuvre.description}
                          </p>
                          <h3 className=" text-base font-semibold text-[#023047]">
                            {oeuvre.amount}
                          </h3>
                        </div>
                      </Panel>
                    );
                  })}
                </Collapse>
                <div
                  className=" py-6 center"
                  onClick={() => {
                    dispatch(setModelAddSubProgramIsVisible(true));
                    dispatch(setProgramId(programme.id));
                  }}
                >
                  <ActionButton value={"New chapter"} />{" "}
                </div>
              </Panel>
            );
          })}
        </Collapse>
        {addProgram && <AddProgram />}
      </section>
      {addSubProgram && <AddSubProgram />}
    </Fragment>
  );
};
export default Programmes;
