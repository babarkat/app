// firebase.ts
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBAePUfASka7W7TUuTe6iBfGF8PIn8Z_Wk",
  authDomain: "babarkat-dee4b.firebaseapp.com",
  projectId: "babarkat-dee4b",
  storageBucket: "babarkat-dee4b.firebasestorage.app",
  messagingSenderId: "826610864093",
  appId: "1:826610864093:web:0895a974ec8681ac067034",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };
