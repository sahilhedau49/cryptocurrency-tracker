import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUfO13ZD361rl-xL1365UAzWvKrrvGCA8",
  authDomain: "crypto-tracker-auth-b12d0.firebaseapp.com",
  projectId: "crypto-tracker-auth-b12d0",
  storageBucket: "crypto-tracker-auth-b12d0.appspot.com",
  messagingSenderId: "300789638714",
  appId: "1:300789638714:web:5d18dfd6fce64fe453b703",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
