// components/Header.tsx
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWishlist } from "../context/WishlistContext";
import { useNotifications } from "../context/NotificationContext";

const Header = () => {
  const navigation = useNavigation();
  const { wishlist } = useWishlist();
  const { notifications } = useNotifications();

  const notificationCount = notifications.length;
  const cartCount = 2;

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between p-4 bg-white shadow">
        <Text className="text-xl font-bold text-orange-700">BookMarket</Text>

        <View className="flex-row items-center space-x-3">
          {/* Search Bar */}
          <TextInput
            placeholder="Search books, authors, genres..."
            className="bg-gray-100 px-3 py-2 rounded-full w-48"
          />

          {/* Notification Button */}
          <TouchableOpacity
            className="p-2 relative"
            onPress={() => navigation.navigate("Notification" as never)}
          >
            <Text>🔔</Text>
            {notificationCount > 0 && (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-xs font-bold">
                  {notificationCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Wishlist Button */}
          <TouchableOpacity
            className="p-2 relative"
            onPress={() => navigation.navigate("Wishlist" as never)}
          >
            <Text>❤️</Text>
            {wishlist.length > 0 && (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-xs font-bold">
                  {wishlist.length}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Cart Button */}
          <TouchableOpacity
            className="p-2 relative"
            onPress={() => navigation.navigate("Cart" as never)}
          >
            <Text>🛒</Text>
            {cartCount > 0 && (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-xs font-bold">
                  {cartCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
