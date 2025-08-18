import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

export const requestPermission = async (): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const currentToken = await getToken(messaging, {
        vapidKey: "BMf6ryVO3UrbQJ-_h-EFxHa3Gy8EQiwCOnmQGLFuY9W-POujf52qpJXiadtPYT2mhnQGxqQFvrmMYCqV5qMT5Ds",
      });
      localStorage.setItem("fcmToken", currentToken);
      console.log("Saved FCM Token:", currentToken);
      return currentToken;
    } else {
      console.log("Permission not granted");
      return null;
    }
  } catch (err) {
    console.error("Error getting token:", err);
    return null;
  }
};

// دریافت پیام هنگام فعال بودن تب
export const onMessageListener = (): Promise<any> =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
