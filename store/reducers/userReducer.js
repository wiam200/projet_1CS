import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";
import Cookies from "js-cookie";
const initialState = {
<<<<<<< HEAD
  userEmail: "",
  userName: null,
  // password: null,
=======
  email: null,
  userName: null,
>>>>>>> 3cbdea4 (overview and budget pages with some other changes)
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
    setPasswordResetError: (state, action) => {
      state.passwordResetError = action.payload;
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

<<<<<<< HEAD
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
=======
      const { token, role, userName, email } = response.data;
      dispatch(setToken("sdcscnfivnwWTRYBVOScnscscnsv"));
      dispatch(setEmail(email));
      dispatch(setRole("admin"));
      dispatch(setUserName("mehal wiam"));
      dispatch(setError(null));

      // const { email,password}=res.data
      // Store the token in a cookie
      Cookies.set("token", "mehal wiam hihihiihi", { expires: 1, path: "/" });
      // localStorage.setItem("jwt", "sdcscnfivnwWTRYBVOScnscscnsv");
>>>>>>> 3cbdea4 (overview and budget pages with some other changes)
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
  setUserEmail,
  setRole,
  setUserName,
  setError,
  setUserName,
  setPasswordResetError,
  setPasswordResetSuccess,
} = userSlice.actions;

export default userSlice.reducer;
