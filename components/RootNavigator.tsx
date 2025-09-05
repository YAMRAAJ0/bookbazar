import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import NotificationScreen from "./NotificationScreen";
import WishlistScreen from "./WishlistScreen";
import CartScreen from "./CartScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
