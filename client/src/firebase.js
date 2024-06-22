// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pos-grao.firebaseapp.com",
  projectId: "pos-grao",
  storageBucket: "pos-grao.appspot.com",
  messagingSenderId: "896333060319",
  appId: "1:896333060319:web:51b6049b318d809a12716a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
