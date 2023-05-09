import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userStore/reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
