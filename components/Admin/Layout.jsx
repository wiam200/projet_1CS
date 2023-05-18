import { useRouter } from "next/router";

const Layout = ({ children }) => {
  // Check if the current page is the login page
  const router = useRouter();
  //   const isLoginPage = router.pathname === "/";

  //   {!isLoginPage && <NavBar />}
  // Render the layout with or without the navbar based on the login page condition
  return (
    <div className=" flex w-full  h-screen ">
      <main className=" w-full h-screen">{children}</main>
    </div>
  );
};

export default Layout;
