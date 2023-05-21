import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Layout from "@/components/Admin/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {" "}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
