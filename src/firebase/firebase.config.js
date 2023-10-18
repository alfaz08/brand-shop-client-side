
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB91EADZb1oJ94d-egV1tSb6_8cs_26Y94",
  authDomain: "brand-shop-c4c2e.firebaseapp.com",
  projectId: "brand-shop-c4c2e",
  storageBucket: "brand-shop-c4c2e.appspot.com",
  messagingSenderId: "654500664143",
  appId: "1:654500664143:web:1e4e2fbb055783bdac6b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
