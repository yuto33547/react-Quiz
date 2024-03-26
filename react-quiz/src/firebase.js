// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvieaAj3hiTwrGayOI6CLqDiESKIL-Zqo",
  authDomain: "quiz-react-fd96a.firebaseapp.com",
  projectId: "quiz-react-fd96a",
  storageBucket: "quiz-react-fd96a.appspot.com",
  messagingSenderId: "1091705118263",
  appId: "1:1091705118263:web:91be258561c1daa86669b2",
  measurementId: "G-SYSVV0FN98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { app, db };
