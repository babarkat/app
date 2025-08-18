import "@/styles/globals.css";
import "@/styles/date-picker.css";

import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";

import { useEffect } from "react";
import { requestPermission, onMessageListener } from "../firebase/notifications"; // مسیر درست فایل notifications.ts

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // درخواست دسترسی و گرفتن FCM Token
    requestPermission().then((token) => {
      if (token) {
        // ذخیره در localStorage یا ارسال به n8n
        localStorage.setItem("fcmToken", token);
        console.log("User FCM Token:", token);
      }
    });

    // گوش دادن به پیام‌ها وقتی تب فعال است
    onMessageListener().then((payload) => {
      console.log("Message received: ", payload);
      alert(`Notification: ${payload.notification?.title}`);
    });
  }, []);

  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
