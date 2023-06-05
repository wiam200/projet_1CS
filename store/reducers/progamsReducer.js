import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  programsList: [],
  addProgramError: null,
  programId: null,
};

const programSlice = createSlice({
  name: "programs",
  initialState,
  reducers: {
    setProgramsList: (state, action) => {
      state.programsList = action.payload;
    },
    setAddProgramError: (state, action) => {
      state.addProgramError = action.payload;
    },
    setProgramId: (state, action) => {
      state.programId = action.payload;
    },
  },
});

export const addProgram = (title) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/programs/add`, {
      title,
    });
    dispatch(setAddProgramError(null));
    // return old + new program
    dispatch(setProgramsList(response.data));
  } catch (error) {
    dispatch(setAddProgramError(error.response.data.error));
  }
};

export const { setProgramsList, setAddProgramError, setProgramId } =
  programSlice.actions;

export default programSlice.reducer;
