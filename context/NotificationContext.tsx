// context/NotificationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type Notification = {
  id: number;
  message: string;
  timestamp: string;
};

type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string) => void;
  clearNotifications: () => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setNotifications((prev) => [newNotification, ...prev]); // newest on top
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotifications must be used inside NotificationProvider");
  return context;
};
