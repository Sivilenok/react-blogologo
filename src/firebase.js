// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZCgfoOxDoSewpR6IwieZVLNWVaxV8rNw",
  authDomain: "fe-34-5fa28.firebaseapp.com",
  projectId: "fe-34-5fa28",
  storageBucket: "fe-34-5fa28.appspot.com",
  messagingSenderId: "460456437221",
  appId: "1:460456437221:web:a56eed3bf8ac9356663b0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
