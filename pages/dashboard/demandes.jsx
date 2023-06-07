import Layout from "@/components/Admin/Layout/Layout";
import Demandes from "@/components/Admin/admin-demandes/Demandes";
import Title from "@/components/UI/Title";
import React from "react";

function demandes() {
  return (
    <Layout>
      <section className=" w-full h-screen  py-10 pt-14 space-y-10">
        <Title title="All Quantum leap requests" />
        <Demandes />
      </section>
    </Layout>
  );
}

export default demandes;

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

  return {
    props: {},
  };
}
