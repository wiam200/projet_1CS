import Users from "@/components/Admin/admin-users/Users";
import { setUsersList } from "@/store/reducers/usersReducer";
import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";

function User(props) {
  const dispatch = useDispatch();

  dispatch(setUsersList(props.usersList));
  return <Users />;
}

export default User;

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
    "http://192.168.129.1/QuantumLeap/public/api/users",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const usersList = await response.data.data;
  return {
    props: {
      usersList,
    },
  };
}
