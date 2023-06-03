import { useRouter } from "next/router";
import NavBar from "../Navigation/NavBar";
import TopBar from "../Navigation/TopBar";

const Layout = ({ children }) => {
  // Check if the current page is the login page
  const router = useRouter();
  const isLoginPage =
    router.pathname === "/" || router.pathname === "/change-password";

  // Render the layout with or without the navbar based on the login page condition
  return (
    <div className=" flex flex-col md:flex md:flex-row px-4   w-full h-full ">
      {!isLoginPage && <NavBar />}
      <main className=" w-full md:w-[93%]  py-4 md:px-14 md:absolute md:left-24">
        {!isLoginPage && <TopBar />}
        {children}
      </main>
    </div>
  );
};

export default Layout;
