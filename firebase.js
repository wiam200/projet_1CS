// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";

import "firebase/auth";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDlepmIcTBLGoxFU8AFB4SrEa7QWG5OaE",
  authDomain: "projet-1cs-5133b.firebaseapp.com",
  projectId: "projet-1cs-5133b",
  storageBucket: "projet-1cs-5133b.appspot.com",
  messagingSenderId: "358719636221",
  appId: "1:358719636221:web:24f6bd3ed30083f5e27494",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
var provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//works for signInWithPopup and signInWithRedirect

export const signInWithGoogle = () => auth.signInWithPopup(provider);
const signInWithRedirect = () => auth.signInWithRedirect(provider);
