import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";

import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {  // فقط در مرورگر اجرا میشه
      // 1️⃣ import دینامیک notifications
      import("../firebase/notifications").then(({ requestPermission, onMessageListener }) => {
        requestPermission().then((token) => {
          if (token) localStorage.setItem("fcmToken", token);
        });

        onMessageListener((payload) => {
          console.log("Message received: ", payload);
        });
      });

      // 2️⃣ ثبت Service Worker
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/firebase-messaging-sw.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(err => console.log('Service Worker registration failed:', err));
      }
    }
  }, []);

  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
