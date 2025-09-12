// BottomTabs.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeHero from "../../pages/Home";
import ProfileScreen from "../../pages/ProfileScreen";
import BrowseScreen from "../../pages/BrowseScreen";
import CartScreen from "../../pages/CartScreen";
import NotificationScreen from "../NotificationScreen";
import WishlistScreen from "../WishlistScreen";
import SellScreen from "../SellBook/SellScreen"; 
import AddBook from "../SellBook/AddBook";
import BuyPage from "../BuyPage";
import CheckoutScreen from "../CheckoutScreen";
import CustomTabBar from "./CustomTabBar";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileStack({ onLogout }: any) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen">
        {(props) => <ProfileScreen {...props} onLogout={onLogout} />}
      </Stack.Screen>
      <Stack.Screen name="BuyPage" component={BuyPage} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
    </Stack.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeHero" component={HomeHero} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="BuyPage" component={BuyPage} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Sell" component={SellScreen} />
      <Stack.Screen name="AddBook" component={AddBook} />
    </Stack.Navigator>
  );
}


function BrowseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BrowseScreen" component={BrowseScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="BuyPage" component={BuyPage} />
    </Stack.Navigator>
  );
}


function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
    </Stack.Navigator>
  );
}




export default function BottomTabs({ onLogout }: { onLogout: () => void }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { position: "absolute", backgroundColor: "transparent", elevation: 0 },
        tabBarIcon: ({ focused }) => {
      
          return (
            <Ionicons
              name="home-outline"
              size={24}
              color={focused ? "#f97316" : "#6b7280"}
            />
          );
        },
      })}
      tabBar={(props) => <CustomTabBar {...props} />}


    >
      <Tab.Screen name="Home" component={HomeStack} />
  <Tab.Screen name="Browse" component={BrowseStack} />
  <Tab.Screen name="Sell" component={SellScreen} />
  <Tab.Screen name="Cart" component={CartStack} />
  <Tab.Screen name="Profile">
    {() => <ProfileStack onLogout={onLogout} />}
  </Tab.Screen>
    </Tab.Navigator>
  );
}

