// App.tsx
import { StatusBar } from "expo-status-bar";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "components/BottomTabs";
import Header from "components/Header";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Header />
        <BottomTabs />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
