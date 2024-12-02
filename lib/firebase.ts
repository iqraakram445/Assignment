import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9kWFhD2wklKX7Tru8oPaY9ygWo_tkG88",
  authDomain: "smashsquad-uk.firebaseapp.com",
  projectId: "smashsquad-uk",
  storageBucket: "smashsquad-uk.firebasestorage.app",
  messagingSenderId: "27074205109",
  appId: "1:27074205109:web:ad92da106f4ef2080d35fc",
  measurementId: "G-0SS0F05MVZ",
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
