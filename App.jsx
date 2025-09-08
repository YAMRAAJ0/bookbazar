// // App.tsx
// import { StatusBar } from "expo-status-bar";
// import "./global.css";
// import { NavigationContainer } from "@react-navigation/native";
// import BottomTabs from "components/BottomTabs";
// import Header from "components/Header";

// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <Header />
//         <BottomTabs />
//       </NavigationContainer>
//       <StatusBar style="auto" />
//     </>
//   );
// }


import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import IntroSlider from './screens/IntroSlider';
import LoginScreen from './screens/Auth/LoginScreen';
import RegisterScreen from './screens/Auth/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SellScreen from './screens/SellScreen';
import { getToken } from './utils/auth';
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();


export default function App(){
const [loading, setLoading] = useState(true);
const [initialRoute, setInitialRoute] = useState('Intro');


useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      if (token) {
        setInitialRoute('Home');
      }
      setLoading(false);
    };
    checkAuth();
  }, []);
  


  if (loading) {
    return <SplashScreen />;
  }


return (
    <SafeAreaView className="flex-1 bg-white">
<NavigationContainer>
<Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRoute}
    >
<Stack.Screen name="Intro" component={IntroSlider} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="Register" component={RegisterScreen} />
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Sell" component={SellScreen} />
</Stack.Navigator>
</NavigationContainer>
</SafeAreaView>
);
}