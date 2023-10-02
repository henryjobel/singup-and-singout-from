// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-6t7Mf_pBYFjwHJYLIjMqmtG18dAI1dk",
  authDomain: "fire-base-auth-2-20942.firebaseapp.com",
  projectId: "fire-base-auth-2-20942",
  storageBucket: "fire-base-auth-2-20942.appspot.com",
  messagingSenderId: "234706739660",
  appId: "1:234706739660:web:12a2c6ed44720e5d847d69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;