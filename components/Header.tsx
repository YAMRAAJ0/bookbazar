// Header.tsx
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWishlist } from "../context/WishlistContext";
import { useNotifications } from "../context/NotificationContext";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";

const Header = () => {
  const navigation = useNavigation();
  const { wishlist } = useWishlist();
  const { notifications } = useNotifications();
  const { cart } = useCart();
  const { searchQuery, setSearchQuery } = useSearch(); // ✅

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigation.navigate("Browse" as never); 
    }
  };

  const notificationCount = notifications.length;
  const cartCount = cart.length;

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between p-4 bg-white shadow">
        {/* Logo / Back */}
        <View className="flex-row items-center">
          {navigation.canGoBack() ? (
            <TouchableOpacity className="mr-2" onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#f97316" />
            </TouchableOpacity>
          ) : null}
          <Text className="text-xl font-bold text-orange-700">BookMarket</Text>
        </View>

        {/* Search + Icons */}
        <View className="flex-row items-center space-x-3">
          
        <TextInput
            placeholder="Search books, authors, genres..."
            value={searchQuery}
            onChangeText={setSearchQuery} 
            onSubmitEditing={handleSearch}
            className="bg-gray-100 px-3 py-2 rounded-full w-48"
          />

          <TouchableOpacity
            className="p-2 relative"
            onPress={() => navigation.navigate("Notification" as never)}
          >
            <Text>🔔</Text>
            {notificationCount > 0 && (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-xs font-bold">{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            className="p-2 relative"
            onPress={() => navigation.navigate("Wishlist" as never)}
          >
            <Text>❤️</Text>
            {wishlist.length > 0 && (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-xs font-bold">{wishlist.length}</Text>
              </View>
            )}
          </TouchableOpacity>

          {/* <TouchableOpacity
            className="p-2 relative"
            onPress={() => navigation.navigate("Cart" as never)}
          >
            <Text>🛒</Text>
            {cartCount > 0 && (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-xs font-bold">{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
