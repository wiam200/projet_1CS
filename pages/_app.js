import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Layout from "@/components/Admin/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {" "}
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}
