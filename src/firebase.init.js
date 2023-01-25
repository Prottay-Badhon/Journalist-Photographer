// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNCcVxVWMStURQ3QwvyQxdn9H5ieacj5w",
  authDomain: "journalist-photgrapher.firebaseapp.com",
  projectId: "journalist-photgrapher",
  storageBucket: "journalist-photgrapher.appspot.com",
  messagingSenderId: "642193206179",
  appId: "1:642193206179:web:23bc833e1a32052886c816"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;