import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

const initialState = {
  userEmail: null,
  userName: null,
  token: null,
  role: null,
  isLoading: false,
  error: null,
  passwordResetSuccess: false,
  passwordResetError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
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
    setPasswordResetError: (state, action) => {
      state.passwordResetError = action.payload;
    },
  },
});

// THUNK :action creators  : functions which return functions

export const login = ({ useremail, password }) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await axios.post(
        // "https://projet-1cs-5133b-default-rtdb.firebaseio.com/user.json",
        "http://192.168.129.1/QuantumLeap/BackEnd/public/api/login",
        {
          email,
          password,
        }
      );

      const { token, role, userName } = response.data;
      dispatch(setToken(token));
      // dispatch(setEmail(email));
      dispatch(setRole(role));
      dispatch(setUserName(userName));
      dispatch(setError(null));

      // const { email,password}=res.data
      // Store the token in a cookie
      Cookies.set("token", "mehal wiam hihihiihi", { expires: 1, path: "/" });
    } catch (error) {
      dispatch(setToken(null));
      dispatch(setError(error));
    }

    dispatch(setLoading(false));
  };
};

// log out

export const logOut = () => async (dispatch) => {
  dispatch(setToken(null));
};

// Action creator for resetting the password of the user
export const resetPassword = (email) => async (dispatch) => {
  dispatch(setLoading(true));

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
    dispatch(setPasswordResetError(error));
  }

  dispatch(setLoading(false));
};

// Action creator for changing password of the user from profile

export const changePassword =
  ({ email, oldPassword, newPassword }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post("/api/change-password", {
        email,
        oldPassword,
        newPassword,
      });

      const data = await response.data;
      if (data.ok) {
        // Password  sent successfully
        dispatch(setPasswordResetSuccess(true));
      }
    } catch (error) {
      // Password  failed to change
      dispatch(setPasswordResetError(error));
    }
  };

export const {
  setLoading,
  setToken,
  setEmail,
  setRole,
  setError,
  setUserName,
  setPasswordResetError,
  setPasswordResetSuccess,
} = userSlice.actions;

export default userSlice.reducer;
