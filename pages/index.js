import AuthForm from "@/components/Auth_components/AuthForm";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  const token = useSelector((state) => state.user.token);
  const role = useSelector((state) => state.user.role);

  // if  token &&

  if (role === "admin") {
    router.push("/dashboard");
    return null;
  } else if (role === "user") {
    router.push("/client");
    return null;
  }
  return (
    <div className=" flex bg-white/80 justify-center items-center w-full h-[100vh]">
      <AuthForm />
    </div>
  );
}
