import Programmes from "@/components/Admin/admin-programmes/Programmes";
import Layout from "@/components/Admin/Layout/Layout";
import Cookies from "js-cookie";
import React from "react";

const tokenUser = Cookies.get("token");
function Programs() {
  return (
    <Layout>
      <Programmes />
    </Layout>
  );
}

export default Programs;

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
  // const response = await axios.get(
  //   "https://projet-1cs-5133b-default-rtdb.firebaseio.com/programmes.json"
  // );

  // const programsList = response.data;
  // if (!response.ok) console.log(response.data);

  return {
    props: {},
  };
}
