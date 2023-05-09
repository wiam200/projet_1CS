import AuthForm from "@/components/Auth-components/AuthForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (isAuthenticated) {
    router.replace("/programmes");
    return null;
  }
  return (
    <section className=" w-full h-screen flex justify-center items-center">
      Home page{" "}
    </section>
  );
}
