import AuthForm from "@/components/Auth_components/AuthForm";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Home(props) {
  const token = useSelector((state) => state.user.token);
  const role = useSelector((state) => state.user.role);

  // if  token &&
<<<<<<< HEAD
  console.log(role);
  if (role === "admin") {
    router.push("/dashboard");
    return null;
  } else if (role === "user") {
    router.push("/client");
    return null;
=======

  if (token && role === "admin") {
    window.location.href = "/dashboard";
  } else if (token && role === "user") {
    window.location.href = "/dashboard";
>>>>>>> 3cbdea4 (overview and budget pages with some other changes)
  }
  return (
    <div className=" center  bg-white/80 w-full h-[100vh]">
      <AuthForm />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.token; // Get the token from the request cookies
  const isAuthenticated = !!token;

  if (isAuthenticated) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
