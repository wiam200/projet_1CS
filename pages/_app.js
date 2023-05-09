import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // const user = useSelector((state) => state.user.user);

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, [user]);
  return (
    <Provider store={store}>
      {" "}
      <Component {...pageProps} />
    </Provider>
  );
}
