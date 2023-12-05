// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx3jG1ohTJ8lkUIsmToSsND6KxL2pk1yw",
  authDomain: "netflixgpt-95b75.firebaseapp.com",
  projectId: "netflixgpt-95b75",
  storageBucket: "netflixgpt-95b75.appspot.com",
  messagingSenderId: "1062861951300",
  appId: "1:1062861951300:web:759d4d5e1c65166b554711",
  measurementId: "G-SHBFCY79HQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
