import Layout from "@/components/Admin/Layout/Layout";
import OverView from "@/components/Admin/admin-ov/OverView";
import React from "react";

function Index() {
  return (
    <Layout>
      <OverView />
    </Layout>
  );
}

export default Index;

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
