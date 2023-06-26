import Layout from "@/components/Admin/Layout/Layout";
import Paiements from "@/components/Admin/admin-Paiement/Paiement";
import Title from "@/components/UI/Title";
import React from "react";

function payments() {
  return (
    <Layout>
      <section className=" w-full h-screen  py-10 pt-14 space-y-10">
        <Title title="Paiement des demandes" />
        <Paiements />
      </section>
    </Layout>
  );
}

export default payments;

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
