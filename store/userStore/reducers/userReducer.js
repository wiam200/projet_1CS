import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {
    email: null,
    password: null,
  },
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
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

export const login = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await axios.post(
        "https://projet-1cs-5133b-default-rtdb.firebaseio.com/user.json",
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;
      dispatch(setToken(response.data.token));
      dispatch(setUser(user));
      dispatch(setError(null));
      dispatch(setIsAuthenticated(true));

      // const { email,password}=res.data

      localStorage.setItem("jwt", token);
    } catch (error) {
      dispatch(setToken(null));
      dispatch(setError(error));
    }

    dispatch(setLoading(false));
  };
};

// Action creator for resetting the password of the user
export const resetPassword = (email) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setPasswordResetError(null));

  try {
    await firebase.auth().sendPasswordResetEmail(email);

    // Mettre à jour le mot de passe de l'utilisateur en utilisant le lien de réinitialisation de mot de passe envoyé par e-mail
    await firebase.auth().confirmPasswordReset(actionCode, newPassword);
    // Password reset email sent successfully
    dispatch(setPasswordResetSuccess(true));
  } catch (error) {
    // Password reset email failed to send
    dispatch(setPasswordResetError(error.message));
  }

  dispatch(setLoading(false));
};

export const {
  logoutSuccess,
  setLoading,
  setToken,
  setUser,
  setError,
  setIsAuthenticated,
  setPasswordResetError,
} = userSlice.actions;

export default userSlice.reducer;
