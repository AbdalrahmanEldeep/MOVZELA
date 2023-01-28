// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsNGPjvsd31sJd7PwDClw94-b2uuRZZ7M",
  authDomain: "movzila.firebaseapp.com",
  projectId: "movzila",
  storageBucket: "movzila.appspot.com",
  messagingSenderId: "47853476842",
  appId: "1:47853476842:web:46b869be2188962cc1f093",
  measurementId: "G-R1S9N6M7M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


