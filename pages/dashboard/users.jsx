import Layout from "@/components/Admin/Layout/Layout";
import Users from "@/components/Admin/admin-users/Users";
import { setUsersList } from "@/store/reducers/usersReducer";
import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";

function User(props) {
  const dispatch = useDispatch();

  dispatch(setUsersList(props.usersList));
  return (
    <Layout>
      <Users />
    </Layout>
  );
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
    "http://esi-social.azurewebsites.net/api/users",
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
