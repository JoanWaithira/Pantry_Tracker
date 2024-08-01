// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3RgE0qDhP0wNmpVM2Bog4B25sprwjux8",
  authDomain: "pantrytracker-a6001.firebaseapp.com",
  projectId: "pantrytracker-a6001",
  storageBucket: "pantrytracker-a6001.appspot.com",
  messagingSenderId: "118117851284",
  appId: "1:118117851284:web:50685774adbe03a0e31481",
  measurementId: "G-6MFRTP2J24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
