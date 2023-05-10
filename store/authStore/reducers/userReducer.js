import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  email: null,
  password: null,
  token: null,
  role: null,
  isLoading: false,
  error: null,
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
    setPasswordResetSuccess: (state, action) => {
      state.passwordResetSuccess = action.payload;
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

      const { token, role, userName } = response.data;
      // verifie
      dispatch(setToken(response.data.id));
      dispatch(setEmail(email));
      dispatch(setRole(role));
      dispatch(setError(null));

      // const { email,password}=res.data

      localStorage.setItem("jwt", token);
    } catch (error) {
      dispatch(setToken(null));
      dispatch(setError(error));
    }

    dispatch(setLoading(false));
  };
};

// // Action creator for resetting the password of the user
// // export const resetPassword = (email) => async (dispatch) => {
// //   dispatch(setLoading(true));
// //   dispatch(setPasswordResetError(null));

// //   try {
// //     await firebase.auth().sendPasswordResetEmail(email);
// //     const response = await axios.get(
// //       "https://projet-1cs-5133b-default-rtdb.firebaseio.com/user.json"
// //     );

// //     const [users] = await response.data;

// //     const existingUser = users.filter((user) => user.email == email);
// //     console.log(existingUser);
// //     // Mettre à jour le mot de passe de l'utilisateur en utilisant le lien de réinitialisation de mot de passe envoyé par e-mail
// //     await firebase.auth().confirmPasswordReset(actionCode, newPassword);
// //     // Password reset email sent successfully
// //     dispatch(setPasswordResetSuccess(true));
// //   } catch (error) {
// //     // Password reset email failed to send
// //   }

//   dispatch(setLoading(false));
// };

export const {
  logoutSuccess,
  setLoading,
  setToken,
  setEmail,
  setUser,
  setRole,
  setError,
  // setPasswordResetError,
} = userSlice.actions;

export default userSlice.reducer;
