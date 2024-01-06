// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOM0eGnI9Ye_UawELNOMbxuCwUatck5Gk",
  authDomain: "digilabs-c3c52.firebaseapp.com",
  projectId: "digilabs-c3c52",
  storageBucket: "digilabs-c3c52.appspot.com",
  messagingSenderId: "1046494238000",
  appId: "1:1046494238000:web:3789de5be92b00df3a24f5",
  measurementId: "G-WLK07X51T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);