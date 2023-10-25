// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7WdAG-Jx0xS1T7TzFHBiWLQYGHslpIqw",
  authDomain: "dimple-firebase-fa568.firebaseapp.com",
  projectId: "dimple-firebase-fa568",
  storageBucket: "dimple-firebase-fa568.appspot.com",
  messagingSenderId: "648482856600",
  appId: "1:648482856600:web:221d3733d2f62fc8a8baed",
  measurementId: "G-YTGBEJJZT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth  = getAuth();
export default app;