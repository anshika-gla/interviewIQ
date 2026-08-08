import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-35d63.firebaseapp.com",
  projectId: "interviewiq-35d63",
  storageBucket: "interviewiq-35d63.firebasestorage.app",
  messagingSenderId: "380365806107",
  appId: "1:380365806107:web:bfc9a5a3b701ef11ba36be",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});




export { auth, provider };
