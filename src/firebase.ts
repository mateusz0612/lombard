import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "lombard-502a7.firebaseapp.com",
  projectId: "lombard-502a7",
  storageBucket: "lombard-502a7.appspot.com",
  messagingSenderId: "573590973909",
  appId: "1:573590973909:web:7c06bde3618229659ca15c",
  measurementId: "G-JYTL6ETT6T",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
