// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApxhQ8hQaiYmAPXyHVwlL8F452OdlYj0M",
  authDomain: "assignment11-f5831.firebaseapp.com",
  projectId: "assignment11-f5831",
  storageBucket: "assignment11-f5831.appspot.com",
  messagingSenderId: "143638590875",
  appId: "1:143638590875:web:5c16932fcf14e32a4b5d3e",
  measurementId: "G-N15K9C0RYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth  = getAuth();
export default app;