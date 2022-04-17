// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5y8MGOp8OK5j0rAD2DuJEIpbBDm_acC8",
  authDomain: "travel-web-9911a.firebaseapp.com",
  projectId: "travel-web-9911a",
  storageBucket: "travel-web-9911a.appspot.com",
  messagingSenderId: "199237945172",
  appId: "1:199237945172:web:aaa51985c9e44e180b2ac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;