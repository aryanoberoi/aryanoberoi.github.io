// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2582DqbeUPDZR3tO3Vy3jf1QL7Oe12DE",
  authDomain: "stylco-3dc2a.firebaseapp.com",
  projectId: "stylco-3dc2a",
  storageBucket: "stylco-3dc2a.appspot.com",
  messagingSenderId: "907092652132",
  appId: "1:907092652132:web:43a5d58fa9cdc1cca56f71",
  measurementId: "G-B65TQ5FDBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
