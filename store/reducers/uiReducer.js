import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modelAddIsVisible: false,
  modelTransferIsVisible: false,
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
  },
});
export const { setModelAddIsVisible, setModelTransferIsVisible } =
  uiSlice.actions;
export default uiSlice.reducer;
