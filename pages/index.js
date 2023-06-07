import AuthForm from "@/components/Auth_components/AuthForm";
import { useSelector } from "react-redux";

export default function Home(props) {
  const token = useSelector((state) => state.user.token);
  const role = useSelector((state) => state.user.role);

  if (token && role === "admin") {
    window.location.href = "/dashboard";
  } else if (token && role === "user") {
    window.location.href = "/client";
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
  const role = req.cookies.role;
  const isAuthenticated = !!token;

  if (isAuthenticated && role === "user") {
    return {
      redirect: {
        destination: "/client",
        permanent: false,
      },
    };
  }

  if (isAuthenticated && role === "admin") {
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
