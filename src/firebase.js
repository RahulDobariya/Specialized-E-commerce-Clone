// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';//imported getAuth


const firebaseConfig = {
  apiKey: "AIzaSyDYU73gR_goeBzix0UFwILxYAXc_Oft7vQ",
  authDomain: "specialized-app-f2748.firebaseapp.com",
  projectId: "specialized-app-f2748",
  storageBucket: "specialized-app-f2748.appspot.com",
  messagingSenderId: "792042899431",
  appId: "1:792042899431:web:086ff6abdb1af98c125f42"
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