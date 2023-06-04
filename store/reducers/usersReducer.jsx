import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const initialState = {
  usersList: [],
  addUserSuccess: null,
  addUserError: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersList: (state, action) => {
      state.usersList = action.payload;
    },
    setAddUserSuccess: (state, action) => {
      state.addUserSuccess = action.payload;
    },
    setAddUserError: (state, action) => {
      state.addUserError = action.payload;
    },
  },
});

export const createUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://192.168.129.1/QuantumLeap/public/api/users",
      user,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    if (response.status === 200) {
      dispatch(setAddUserError(null));
      dispatch(setAddUserSuccess(response.data.message));
      dispatch(setModelAddUserIsVisible(false));
    }
  } catch (error) {
    if (
      error.response &&
      error.response.data &&
      error.response.data.errors &&
      error.response.data.errors.email
    ) {
      dispatch(setAddUserError(error.response.data.errors.email));
      dispatch;
    } else {
      dispatch(setAddUserError("Inputs length must be at least 8 characters."));
    }
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://192.168.129.1/QuantumLeap/public/api/users/delete/" + id,
      {},
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  } catch (error) {}
};

export const { setUsersList, setAddUserError, setAddUserSuccess } =
  usersSlice.actions;

export default usersSlice.reducer;
