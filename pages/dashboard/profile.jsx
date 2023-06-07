import Layout from "@/components/Admin/Layout/Layout";
import Profile from "@/components/Admin/admin-Profile/Profile";

function profile() {
  return (
    <Layout>
      {" "}
      <Profile />{" "}
    </Layout>
  );
}

export default profile;

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
