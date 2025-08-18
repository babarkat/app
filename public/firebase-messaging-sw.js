// firebase-messaging-sw.js
import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

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

onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = payload.notification?.title || "Notification";
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: "/plasmic/babarkat/images/image78.svg",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
