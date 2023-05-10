import AuthForm from "@/components/Auth-components/AuthForm";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const email = useSelector((state) => state.user.email);

  // if token

  if (email) {
    router.replace("/programmes");
    return null;
  }
  return (
    <div className=" flex bg-white/80 justify-center items-center w-full h-[100vh]">
      <AuthForm />
    </div>
  );
}
