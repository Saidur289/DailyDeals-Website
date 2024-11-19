// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbrvLWeTEt_zHaWBWMbcumqoA-Liaztwg",
  authDomain: "dailydeals-project.firebaseapp.com",
  projectId: "dailydeals-project",
  storageBucket: "dailydeals-project.firebasestorage.app",
  messagingSenderId: "586871090682",
  appId: "1:586871090682:web:9ef1f67b6ef24a41084843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);