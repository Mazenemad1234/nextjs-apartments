import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSKFIP_faHRZFq1aveJ0D7ZPof8akYiBk",
  authDomain: "nextapartments.firebaseapp.com",
  projectId: "nextapartments",
  storageBucket: "nextapartments.firebasestorage.app",
  messagingSenderId: "280560536258",
  appId: "1:280560536258:web:95f418ac1c4830231309 5b",
};
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
export { auth, googleprovider };
