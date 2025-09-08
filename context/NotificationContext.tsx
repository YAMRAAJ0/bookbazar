// context/NotificationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import * as Notifications from "expo-notifications";

type NotificationItem = {
  id: number;
  message: string;
  timestamp: string;
};

type NotificationContextType = {
  notifications: NotificationItem[];
  addNotification: (message: string) => void;
  clearNotifications: () => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const addNotification = async (message: string) => {
    const newNotification = {
      id: Date.now(),
      message,
      timestamp: new Date().toLocaleTimeString(),
    };

    setNotifications((prev) => [newNotification, ...prev]);

    // 👇 Send actual local notification to mobile
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "📢 BookMarket",
        body: message,
        sound: true,
      },
      trigger: null, // send immediately
    });
  };

  const clearNotifications = () => setNotifications([]);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, clearNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotifications must be used within provider");
  return context;
};
