
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBQdW5F_CNu5zZioptEZEZk0kyCSslPHv0",
  authDomain: "hospital-50195.firebaseapp.com",
  projectId: "hospital-50195",
  storageBucket: "hospital-50195.appspot.com",
  messagingSenderId: "1081849517315",
  appId: "1:1081849517315:web:04e087e75bdef3bad70536",
  measurementId: "G-X4ZLLPFREN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();




export {app , auth}




