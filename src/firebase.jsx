import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDswTMiG76Ebjd4hxpgfaEAFwbGXM57dQ",
  authDomain: "bro-rizz-dccc0.firebaseapp.com",
  projectId: "bro-rizz-dccc0",
  storageBucket: "bro-rizz-dccc0.appspot.com",
  messagingSenderId: "683400326588",
  appId: "1:683400326588:web:41d96dc0d0154a7ccb8fb9",
  measurementId: "G-DN5GJTNN00",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
