/* eslint-disable no-undef */
// public/firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBAePUfASka7W7TUuTe6iBfGF8PIn8Z_Wk",
  authDomain: "babarkat-dee4b.firebaseapp.com",
  projectId: "babarkat-dee4b",
  storageBucket: "babarkat-dee4b.firebasestorage.app",
  messagingSenderId: "826610864093",
  appId: "1:826610864093:web:0895a974ec8681ac067034",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  const notificationTitle = payload.notification?.title || "Background Message Title";
  const notificationOptions = {
    body: payload.notification?.body,
    icon: "/plasmic/babarkat/images/image78.svg",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
