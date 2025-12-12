import { getApps, initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBabHf0aRd-DA6sUkEdkEGA8L4OmIj0lOk",
  authDomain: "profebego-web.firebaseapp.com",
  projectId: "profebego-web",
  storageBucket: "profebego-web.firebasestorage.app",
  messagingSenderId: "87787947711",
  appId: "1:87787947711:web:41cd26af81638990cde80a",
  measurementId: "G-9T4Y7YZWNF"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);