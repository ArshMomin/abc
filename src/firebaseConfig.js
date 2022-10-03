import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAblR3vD2vhc_F0HdvLuzTWHNQKL8TyWyc",
  authDomain: "todo-fd5d2.firebaseapp.com",
  projectId: "todo-fd5d2",
  storageBucket: "todo-fd5d2.appspot.com",
  messagingSenderId: "462293415146",
  appId: "1:462293415146:web:e8d56b7a31ccae25ca1393",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);
export const firestore = getFirestore();
