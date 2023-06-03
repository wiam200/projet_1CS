import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
  userEmail: "",
  userName: null,
  // password: null,
  token: null,
  role: null,
  isLoading: false,
  error: null,
  passwordResetSuccess: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setPasswordResetSuccess: (state, action) => {
      state.passwordResetSuccess = action.payload;
    },
  },
});

// THUNK :action creators  : functions which return functions

export const login = ({ userEmail, password }) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await axios.post(
        // "https://projet-1cs-5133b-default-rtdb.firebaseio.com/user.json",
        "http://192.168.129.1/QuantumLeap/BackEnd/public/api/login",
        {
          userEmail,
          password,
        }
      );

      const { token, role, userName, email } = response.data.data;
      console.log(response.data.data.token);
      // verifie
      dispatch(setToken(token));
      dispatch(setUserEmail(email));
      dispatch(setRole(role));
      dispatch(setUserName(userName));
      dispatch(setError(null));

      // const { email,password}=res.data

      Cookies.set("token", token, { expires: 1, path: "/" });
    } catch (error) {
      dispatch(setToken(null));
      dispatch(setError(error));
    }

    dispatch(setLoading(false));
  };
};

// // Action creator for resetting the password of the user
export const resetPassword = (email) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setPasswordResetError(null));

  try {
    const response = await axios.post("/api/reset-password", {
      newPassword,
      confirmPassword,
    });

    const data = await response.data;
    if (data.ok) {
      // Password reset email sent successfully
      dispatch(setPasswordResetSuccess(true));
    }
  } catch (error) {
    // Password reset email failed to send
    dispatch(setError(error));
  }

  dispatch(setLoading(false));
};

export const {
  logoutSuccess,
  setLoading,
  setToken,
  setUserEmail,
  setRole,
  setUserName,
  setError,
  setPasswordResetError,
} = userSlice.actions;

export default userSlice.reducer;
