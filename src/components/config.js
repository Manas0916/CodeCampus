import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD7wzuuXVN50mSMKbMyIcENPeO9vhlpzTY",
  authDomain: "codecampus363.firebaseapp.com",
  projectId: "codecampus363",
  storageBucket: "codecampus363.appspot.com",
  messagingSenderId: "611795349298",
  appId: "1:611795349298:web:7db01bf17be11d2db1f12b",
  measurementId: "G-MV33N8NY62"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export {auth, provider};