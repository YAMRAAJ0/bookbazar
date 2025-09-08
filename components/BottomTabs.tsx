// BottomTabs.tsx
import { View, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeHero from "../pages/Home";
import ProfileScreen from "./ProfileScreen";
import BrowseScreen from "./BrowseScreen";
import CartScreen from "./CartScreen";
import NotificationScreen from "./NotificationScreen";
import WishlistScreen from "./WishlistScreen";
import SellScreen from "./SellScreen"; 
import BuyPage from "./BuyPage";
import CheckoutScreen from "./CheckoutScreen";

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



// Middle Sell Button
const TabBarSellButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    className="bg-orange-700 w-16 h-16 rounded-full justify-center items-center -mt-8 shadow-lg"
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

export default function BottomTabs({ onLogout }: { onLogout: () => void }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e5e7eb",
          height: 60,
        },
        tabBarIcon: ({ focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Browse":
              iconName = focused ? "book" : "book-outline";
              break;
            case "Cart":
              iconName = focused ? "cart" : "cart-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            case "buy":
              iconName = focused ? "book" : "book-outline";
              break;
            default:
              iconName = "ellipse";
          }

          return (
            <Ionicons
              name={iconName}
              size={24}
              color={focused ? "#f97316" : "#6b7280"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Browse" component={BrowseStack} />

      {/* Middle Sell Button */}
      <Tab.Screen
        name="Sell"
        component={SellScreen}
        options={{
          tabBarButton: (props) => (
            <TabBarSellButton {...props}>
              <Text className="text-white text-center text-2xl">Sell</Text>
            </TabBarSellButton>
          ),
        }}
      />

      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile">
        {() => <ProfileStack onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

