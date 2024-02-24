// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi3kwkBJjLcb94ntyuuuaiEW4Qq1yFEKk",
  authDomain: "netflixgpt-6211c.firebaseapp.com",
  projectId: "netflixgpt-6211c",
  storageBucket: "netflixgpt-6211c.appspot.com",
  messagingSenderId: "67036967979",
  appId: "1:67036967979:web:c712c2ac9e1731402b266e",
  measurementId: "G-MN3YGTHEMV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth();
