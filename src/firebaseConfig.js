// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEfTrABxwe_xbkr1tvQiTKtbu418GHjT8",
  authDomain: "sunday-school-46907.firebaseapp.com",
  projectId: "sunday-school-46907",
  storageBucket: "sunday-school-46907.appspot.com",
  messagingSenderId: "248570334073",
  appId: "1:248570334073:web:68671fe7b29ad232693da8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
