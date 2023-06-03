import React, { Fragment } from "react";
import Header from "./Header";
import UsersList from "./UsersList";
import AddUser from "./pop-ups/AddUser";
function Users() {
  return (
    <Fragment>
      <section className=" w-full h-full space-y-8 mt-16">
        <Header />
        <UsersList />
      </section>
      <AddUser />
    </Fragment>
  );
}

export default Users;

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

  // const response = await axios.get("endpoint");

  // const {
  //   //user inputs
  // } = response.data;
  return {
    props: {
      // render it to the component
    },
  };
}
