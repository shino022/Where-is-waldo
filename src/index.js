import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANi3u7p3b5gRUyJMEJew-PDdBk44htmxk",
  authDomain: "where-is-waldo-3c348.firebaseapp.com",
  projectId: "where-is-waldo-3c348",
  storageBucket: "where-is-waldo-3c348.appspot.com",
  messagingSenderId: "649649006676",
  appId: "1:649649006676:web:e0943540982d19b8c965c1",
  measurementId: "G-JHPFFZ6LLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// Saves a new message to Cloud Firestore.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App db={db}/>
);

