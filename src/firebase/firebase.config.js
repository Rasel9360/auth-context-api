// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDo_iLMbA-xrEpks0DEPOHFDL0Elrqq0OY",
    authDomain: "name-of-your-project-f3628.firebaseapp.com",
    projectId: "name-of-your-project-f3628",
    storageBucket: "name-of-your-project-f3628.appspot.com",
    messagingSenderId: "573699014342",
    appId: "1:573699014342:web:f73346d67aef7eab2521c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;