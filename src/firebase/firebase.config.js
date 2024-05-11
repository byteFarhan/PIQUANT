// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7KGGciTnuI8c-LqbD7UUfqWGMUNKtH6E",
  authDomain: "piquant-b9a11.firebaseapp.com",
  projectId: "piquant-b9a11",
  storageBucket: "piquant-b9a11.appspot.com",
  messagingSenderId: "461281419096",
  appId: "1:461281419096:web:64b7c675379239035e4f2d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
