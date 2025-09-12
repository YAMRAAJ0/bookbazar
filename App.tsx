// App.tsx
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Header from "components/Header";
import LoginScreen from "components/Auth/LoginScreen";
import RegisterScreen from "components/Auth/RegisterScreen";
import WelcomeConsentScreen from "components/welcome-consent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "components/SplashScreen";
import './global.css';
import AppNavigator from "./components/AppNavigator";
import { WishlistProvider } from "./context/WishlistContext";
import { NotificationProvider } from "./context/NotificationContext";
import * as Notifications from "expo-notifications";
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";
const LOGIN_TOKEN_KEY = "user_token";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, 
    shouldPlaySound: true,  
    shouldSetBadge: false,  
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    // Ask user for permission to show notifications
    const requestPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission for notifications not granted!");
      }
    };
    requestPermission();
  }, []);

  // Check token when app loads
  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem(LOGIN_TOKEN_KEY);
      if (token) setIsLoggedIn(true);
    };
    checkLogin();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem(LOGIN_TOKEN_KEY);
    setIsLoggedIn(false);
  };

  // Show splash first
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
     <NotificationProvider>
      <SearchProvider>
      <WishlistProvider>
      <CartProvider>
     
      <NavigationContainer>
        {!isLoggedIn ? (
          !hasSeenWelcome ? (
            // Show welcome screen if not seen
            <WelcomeConsentScreen onContinue={() => setHasSeenWelcome(true)} />
          ) : showRegister ? (
            // Show registration if user clicks register
            <RegisterScreen onRegister={() => setShowRegister(false)} />
          ) : (
            // Show login screen
            <LoginScreen
              onLogin={() => setIsLoggedIn(true)}
              onRegisterPage={() => setShowRegister(true)}
            />
          )
        ) : (
          // Logged in
          <>
            <Header />
            <AppNavigator onLogout={handleLogout} />
            
          </>
        )}
      </NavigationContainer>
      </CartProvider>      
      </WishlistProvider>
      </SearchProvider>
      </NotificationProvider>
      <StatusBar style="auto" />
    </>
  );
}
