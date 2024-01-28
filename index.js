// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4v-Yv7nlH0TmZtXYDgBnVAl2GdUdxv3E",
  authDomain: "test-a52c8.firebaseapp.com",
  projectId: "test-a52c8",
  storageBucket: "test-a52c8.appspot.com",
  messagingSenderId: "363918519979",
  appId: "1:363918519979:web:b59731edaa7f3a4e1b11ee",
  measurementId: "G-RL5PZ4WJSV"
};
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
