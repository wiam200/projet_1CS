import { createSlice } from "@reduxjs/toolkit";
import { setModelAddIsVisible, setModelTransferIsVisible } from "./uiReducer";
import axios from "axios";

const initialState = {
  initialBudget: null,
  currentBudget: null,
  expensesBudget: null,
  blackBox: null,
  chaptersAmounts: [],
};

/***********************************************************************************/

const uiSlice = createSlice({
  name: "budget",
  initialState,

  reducers: {
    setInitialBudget: (state, action) => {
      state.initialBudget = action.payload;
    },
    setCurrentBudget: (state, action) => {
      state.currentBudget = action.payload;
    },
    setExpensesBudget: (state, action) => {
      state.expensesBudget = action.payload;
    },
    setBlackBox: (state, action) => {
      state.blackBox = action.payload;
    },
    setChaptersAmounts: (state, action) => {
      state.chaptersAmounts = action.payload;
    },
  },
});

/***********************************************************************************/

// add chapter amount action creator

export const addChapterAmount =
  ({ chapterTitle, chapterAmount }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "https://projet-1cs-5133b-default-rtdb.firebaseio.com/budget/chaptersAmounts.json",
        { chapterTitle, chapterAmount }
      );
      dispatch(setModelAddIsVisible(false));
    } catch (error) {
      //dispatch(setBudgetError(error));
    }
  };

/***********************************************************************************/

export const cancelAddOperation = () => async (dispatch) => {
  dispatch(setModelAddIsVisible(false));
};

export const cancelTransferOperation = () => async (dispatch) => {
  dispatch(setModelTransferIsVisible(false));
};

/***********************************************************************************/

// transaction action creator

export const transferAmount =
  ({ source, destination, amount }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "https://projet-1cs-5133b-default-rtdb.firebaseio.com/transaction.json",
        { source, destination, amount }
      );
      dispatch(setModelTransferIsVisible(false));
    } catch (error) {
      //dispatch(setBudgetError(error));
    }
  };

/***********************************************************************************/

export const {
  setInitialBudget,
  setCurrentBudget,
  setExpensesBudget,
  setBlackBox,
  setChaptersAmounts,
} = uiSlice.actions;
export default uiSlice.reducer;
