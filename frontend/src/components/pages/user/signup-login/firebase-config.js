import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHZMTqI_FK9kQQ2CA2T-QRMc-te835oIQ",
  authDomain: "resme-development.firebaseapp.com",
  projectId: "resme-development",
  storageBucket: "resme-development.appspot.com",
  messagingSenderId: "278920833644",
  appId: "1:278920833644:web:157f6b248d6700fb024649"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);