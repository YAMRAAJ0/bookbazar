// AppNavigator.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomNavigation/BottomTabs";
import BuyPage from "./BuyPage";
import NotificationScreen from "./NotificationScreen";
import WishlistScreen from "./WishlistScreen";
import CartScreen from "../pages/CartScreen";
import CheckoutScreen from "./CheckoutScreen";
import SellScreen from "./SellBook/SellScreen";
import AddBook from "./SellBook/AddBook";
import DonateBook from "./SellBook/DonateBook";
import ProfileScreen from "../pages/ProfileScreen";
import SettingsScreen from "./SettingPage/SettingsScreen";
import HelpCenterScreen from "./HelpCenterScreen";
import BrowseScreen from "../pages/BrowseScreen";
import EditProfile from "./SettingPage/EditPrpfile";  
import MyOrders from "./MyOrders";
import Address from "./SettingPage/Address";
import RazorPay from "./SettingPage/RazorPay";
import Refund from "./SettingPage/Refund";
import '../global.css';
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
      <Stack.Screen name="Sell" component={SellScreen} />
      <Stack.Screen name="AddBook" component={AddBook} />
      <Stack.Screen name="Donate" component={DonateBook} />
      <Stack.Screen name="Browse" component={BrowseScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile">
        {(props) => <ProfileScreen {...props} onLogout={onLogout} />}
      </Stack.Screen>
      <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="RazorPay" component={RazorPay} />
      <Stack.Screen name="Refund" component={Refund} />
    </Stack.Navigator>
  );
}
