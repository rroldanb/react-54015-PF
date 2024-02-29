import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgrTfshB2HCiW34eBEYYavLgjQM43pV-A",
  authDomain: "rrgrillsrore.firebaseapp.com",
  projectId: "rrgrillsrore",
  storageBucket: "rrgrillsrore.appspot.com",
  messagingSenderId: "686398710205",
  appId: "1:686398710205:web:024c7fd028064b12f432d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);