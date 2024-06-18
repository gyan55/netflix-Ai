// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ll4G5s0Mm3tZScKXtsSYOQ-dk2t40ys",
  authDomain: "netflixai-3ebc9.firebaseapp.com",
  projectId: "netflixai-3ebc9",
  storageBucket: "netflixai-3ebc9.appspot.com",
  messagingSenderId: "470253583289",
  appId: "1:470253583289:web:6d222ff37efca1041f5468",
  measurementId: "G-2V3THRP5LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();