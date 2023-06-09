// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY ,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE ,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export Firebase auth instance
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);