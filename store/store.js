import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
<<<<<<< HEAD

=======
import uiReducer from "./reducers/uiReducer";
import budgetReducer from "./reducers/budgetReducer";
>>>>>>> 3cbdea4 (overview and budget pages with some other changes)
const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    budget: budgetReducer,
  },
});

export default store;
