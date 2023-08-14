// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';//imported getAuth


const firebaseConfig = {
  apiKey: "AIzaSyDi77TdSe6fo5DBUw_Ask4Tee511JX1H-g",
  authDomain: "email-authentication-db0e4.firebaseapp.com",
  projectId: "email-authentication-db0e4",
  storageBucket: "email-authentication-db0e4.appspot.com",
  messagingSenderId: "820850164829",
  appId: "1:820850164829:web:0dc3f86ff13324f26ef9b4",
  measurementId: "G-0MS04LFFRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth();//creating variable

const database=getAuth(app);
export {app,auth,database};


//google-auth

// const gfirebaseConfig = {
//   apiKey: "AIzaSyDSHn44FPQkLgMu4eAFlU8shRSGQ-6gdng",
//   authDomain: "auth-yt-8bb9a.firebaseapp.com",
//   projectId: "auth-yt-8bb9a",
//   storageBucket: "auth-yt-8bb9a.appspot.com",
//   messagingSenderId: "726300881956",
//   appId: "1:726300881956:web:8b9c23edce2af01fcd94b1"
// };

// // Initialize Firebase
// const gapp = initializeApp(gfirebaseConfig);
// export const gauth = getAuth(gapp);