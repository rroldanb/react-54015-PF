import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
