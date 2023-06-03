import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

import uiReducer from "./reducers/uiReducer";
import budgetReducer from "./reducers/budgetReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    budget: budgetReducer,
  },
});

export default store;
