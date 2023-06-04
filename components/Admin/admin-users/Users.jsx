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
