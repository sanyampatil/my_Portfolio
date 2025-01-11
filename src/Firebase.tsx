import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1:174398431968:we",
  measurementId: "G-"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);