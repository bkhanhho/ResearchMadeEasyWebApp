// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHZMTqI_FK9kQQ2CA2T-QRMc-te835oIQ",
  authDomain: "resme-development.firebaseapp.com",
  projectId: "resme-development",
  storageBucket: "resme-development.appspot.com",
  messagingSenderId: "278920833644",
  appId: "1:278920833644:web:157f6b248d6700fb024649",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
