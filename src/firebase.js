// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD66C-hvG4bP00LS0VEe4nL-817wS2qK8E",
    authDomain: "airbus-2110.firebaseapp.com",
    projectId: "airbus-2110",
    storageBucket: "airbus-2110.appspot.com",
    messagingSenderId: "744430483656",
    appId: "1:744430483656:web:423bb0b437a0d09e724dfd",
    measurementId: "G-FZVM8227JY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth , provider , db };