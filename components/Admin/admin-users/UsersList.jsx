import Image from "next/image";
import React, { Fragment, useState } from "react";
import ListHead from "./ListHead";
import ActionButton from "@/components/UI/ActionButton";
import { useDispatch, useSelector } from "react-redux";
import { setModelAddUserIsVisible } from "@/store/reducers/uiReducer";
import AddUser from "./pop-ups/AddUser";
import axios from "axios";

const DUMMY_USERS = [
  {
    id: 1,
    name: "Belagha ayoub",
    email: "ah.belagha@esi-sba.dz",
    job: "Laravel Developer ",
    role: "admin",
  },
  {
    id: 2,
    name: "Mehal wiam",
    email: "w.mehal@esi-sba.dz",
    job: "NextJs Developer ",

    role: "employee",
  },
  {
    id: 3,
    name: "Yahiaoui meriem",
    email: "m.yahiaoui@esi-sba.dz",
    job: "Vue JS Developer ",

    role: "employee",
  },
  {
    id: 4,
    name: "Meddad merouane",
    email: "m.meddad@esi-sba.dz",
    job: " UI/UX designer ",

    role: "employee",
  },
  {
    id: 5,
    name: "Rouha nesrine",
    email: "nr.rouha@esi-sba.dz",
    job: "Laravel Developer",

    role: "employee",
  },
  {
    id: 6,
    name: "Chelaoua naila",
    email: "n.chelaoua@esi-sba.dz",
    job: "Laravel Developer",

    role: "employee",
  },
];

function UsersList() {
  const dispatch = useDispatch();
  const modelAddUserIsVisible = useSelector(
    (state) => state.ui.modelAddUserIsVisible
  );
  const [users, setUsers] = useState(DUMMY_USERS);
  const deleteUserHandler = async (Id) => {
    // // send request with the id of user and waiting for the updated array to setUsers with
    // const response = await axios.post('url', Id);
    // const { updatedUsers } = response.data;
    // setUsers(updatedUsers);
    const newUsers = users.filter((user) => user.id !== Id);
    setUsers(newUsers);
  };
  return (
    <Fragment>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-8">
        <table className="w-full text-sm text-left text-gray-500  ">
          <ListHead />
          <tbody>
            {users.map((user) => {
              return (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image
                      width={40}
                      height={40}
                      className=" mr-3"
                      src="/images/esi.png"
                      alt="Jese image"
                    />
                    <div className="pl-3">
                      <div className="text-base font-semibold">{user.name}</div>
                      <div className="font-normal text-gray-500">
                        {user.email}{" "}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{user.job}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {user.role}
                    </a>
                  </td>{" "}
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => deleteUserHandler(user.id)}
                    >
                      Delete user
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        className=" w-full center  "
        onClick={() => {
          dispatch(setModelAddUserIsVisible(true));
        }}
      >
        <ActionButton value={"+ add user"} />
      </div>
      {modelAddUserIsVisible && <AddUser />}
    </Fragment>
  );
}

export default UsersList;
