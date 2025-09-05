// BottomTabs.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeHero from "./HomeHero";
import ProfileScreen from "./ProfileScreen";
import BrowseScreen from "./BrowseScreen";
import CartScreen from "./CartScreen";
import NotificationScreen from "./NotificationScreen";
import WishlistScreen from "./WishlistScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack for Home (with Notification + Wishlist inside)
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeHero" component={HomeHero} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
    </Stack.Navigator>
  );
}

function BrowseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BrowseScreen" component={BrowseScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      {/* <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} /> */}
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
    </Stack.Navigator>
  );
}



export default function BottomTabs() {
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
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
