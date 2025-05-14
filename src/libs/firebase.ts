import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhd-jYP3WJySJorH5RY87Nn036KjxN09o",
  authDomain: "openlab-76b78.firebaseapp.com",
  projectId: "openlab-76b78",
  storageBucket: "openlab-76b78.firebasestorage.app",
  messagingSenderId: "111736824451",
  appId: "1:111736824451:web:495cc866447fe06ba3f1b6",
  measurementId: "G-2C58Y2QXDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
const db = getFirestore(app);

function gitHubLogIn() {
  signInWithPopup(auth, githubProvider);
}

export { app, analytics, auth, gitHubLogIn, db };
