// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjq__cQqLkR8aBu00HZu6bQt2seUIgdao",
  authDomain: "tasklist-3d8b1.firebaseapp.com",
  projectId: "tasklist-3d8b1",
  storageBucket: "tasklist-3d8b1.appspot.com",
  messagingSenderId: "236809328758",
  appId: "1:236809328758:web:4bff6878071dcfd8456757",
  measurementId: "G-XKGCL5Z6KC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;