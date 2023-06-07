import { createSlice } from "@reduxjs/toolkit";
import { setModelAddIsVisible, setModelTransferIsVisible } from "./uiReducer";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
  initialBudget: null,
  currentBudget: null,
  expensesBudget: null,
  blackBox: null,
  chaptersAmounts: [],
  selectedProgram: null,
  selectedProgramDestination: null,
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
    setSelectedProgram: (state, action) => {
      state.selectedProgram = action.payload;
    },
    setSelectedProgramDestination: (state, action) => {
      state.selectedProgramDestination = action.payload;
    },
  },
});

/***********************************************************************************/

// add chapter amount action creator

export const addChapterAmount =
  ({ selectedProgram, chapterAmount }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "http://esi-social.azurewebsites.net/api/programmes/destribute",
        { selectedProgram, chapterAmount },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
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
        "http://esi-social.azurewebsites.net/transaction.json",
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
  setSelectedProgram,
  setSelectedProgramDestination,
} = uiSlice.actions;
export default uiSlice.reducer;
