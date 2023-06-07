import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [],
  method: null,
};

const paymentSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setMethod: (state, action) => {
      state.method = action.payload;
    },
  },
});

export const createUser = () => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://esi-social.azurewebsites.net/api/users",
      user,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    if (response.status === 200) {
      //dispatch
    }
  } catch (error) {}
};

export const { setMethod } = paymentSlice.actions;

export default paymentSlice.reducer;
