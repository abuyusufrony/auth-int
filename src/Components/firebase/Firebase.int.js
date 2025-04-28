// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeRRow8yXNM69SUM4S-Agqjp212UEwJWQ",
    authDomain: "auth-int.firebaseapp.com",
    projectId: "auth-int",
    storageBucket: "auth-int.firebasestorage.app",
    messagingSenderId: "1019707742142",
    appId: "1:1019707742142:web:f78d008a3a422b6cbc8bef",
    measurementId: "G-EEVHYEQXKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);