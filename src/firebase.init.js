// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm24l3TxTl-FXFbNInGhR-P4cxhxLbOms",
  authDomain: "the-summit-gear.firebaseapp.com",
  projectId: "the-summit-gear",
  storageBucket: "the-summit-gear.appspot.com",
  messagingSenderId: "765634140613",
  appId: "1:765634140613:web:d62feab4f2d76e90f8d3ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;