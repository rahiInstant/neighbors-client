// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_KM0hsvoiWEgC8fwESTbUhGrsDUYq4_k",
  authDomain: "neighbors-48cfb.firebaseapp.com",
  projectId: "neighbors-48cfb",
  storageBucket: "neighbors-48cfb.appspot.com",
  messagingSenderId: "119422922707",
  appId: "1:119422922707:web:34ce2b3b5d265a97020926"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth