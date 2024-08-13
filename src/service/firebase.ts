// import {} from 

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDMJfmjvHDHPJPpxowDAu_1TzpqQLdKY1Q",
  authDomain: "rsud-7acc5.firebaseapp.com",
  projectId: "rsud-7acc5",
  storageBucket: "rsud-7acc5.appspot.com",
  messagingSenderId: "147347665733",
  appId: "1:147347665733:web:c12849c9eaa0b884f9042c",
  measurementId: "G-H3TJFEXK8C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db } 