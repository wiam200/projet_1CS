import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";
import budgetReducer from "./reducers/budgetReducer";
import usersReducer from "./reducers/usersReducer";
import progamsReducer from "./reducers/progamsReducer";
import paymentReducer from "./reducers/paymentReducer";
const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    budget: budgetReducer,
    users: usersReducer,
    programs: progamsReducer,
    payment: paymentReducer,
  },
});

export default store;
