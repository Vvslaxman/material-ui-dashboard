// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'; 
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKLkk_LCS1TBtkQo3pPgbCIZV0kDYih4g",
  authDomain: "dashboard-12497.firebaseapp.com",
  projectId: "dashboard-12497",
  storageBucket: "dashboard-12497.appspot.com",
  messagingSenderId: "26600955335",
  appId: "1:26600955335:web:8b6aa945ebb9dd206c0de2",
  measurementId: "G-ZSZ0EVZ19D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const pImg=getStorage(app); 
export const db=getFirestore(app);
