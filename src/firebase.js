import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD1F6lbyRDeejP8wJY-wrYCwfY3cQ4jIxU",
    authDomain: "food-app-a9263.firebaseapp.com",
    projectId: "food-app-a9263",
    storageBucket: "food-app-a9263.appspot.com",
    messagingSenderId: "424971672222",
    appId: "1:424971672222:web:a211848c895c01bd7e398f",
    measurementId: "G-HDDV01BVD8"
  };

  const  app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  