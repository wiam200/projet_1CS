import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modelAddIsVisible: false,
  modelTransferIsVisible: false,
  modelAddUserIsVisible: false,
  modelAddProgramIsVisible: false,
  modelAddSubProgramIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setModelAddIsVisible: (state, action) => {
      state.modelAddIsVisible = action.payload;
    },
    setModelTransferIsVisible: (state, action) => {
      state.modelTransferIsVisible = action.payload;
    },
    setModelAddUserIsVisible: (state, action) => {
      state.modelAddUserIsVisible = action.payload;
    },
    setModelAddProgramIsVisible: (state, action) => {
      state.modelAddProgramIsVisible = action.payload;
    },
    setModelAddSubProgramIsVisible: (state, action) => {
      state.modelAddSubProgramIsVisible = action.payload;
    },
  },
});
export const {
  setModelAddIsVisible,
  setModelTransferIsVisible,
  setModelAddUserIsVisible,
  setModelAddProgramIsVisible,
  setModelAddSubProgramIsVisible,
} = uiSlice.actions;

export default uiSlice.reducer;
