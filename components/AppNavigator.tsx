// AppNavigator.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import BuyPage from "./BuyPage";
import NotificationScreen from "./NotificationScreen";
import WishlistScreen from "./WishlistScreen";
import CartScreen from "./CartScreen";
import CheckoutScreen from "./CheckoutScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator({ onLogout }: { onLogout: () => void }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs">
        {(props) => <BottomTabs {...props} onLogout={onLogout} />}
      </Stack.Screen>
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="BuyPage" component={BuyPage} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
