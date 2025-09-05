// components/Header.tsx
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between p-4 bg-white shadow">
        <Text className="text-xl font-bold text-orange-700">BookMarket</Text>

        <View className="flex-row items-center space-x-3">
          <TextInput
            placeholder="Search books, authors, genres..."
            className="bg-gray-100 px-3 py-2 rounded-full w-48"
          />

          {/* Notification Button */}
          <TouchableOpacity
            className="p-2"
            onPress={() => navigation.navigate("Notification" as never)}
          >
            <Text>🔔</Text>
          </TouchableOpacity>

          {/* Wishlist Button */}
          <TouchableOpacity
            className="p-2"
            onPress={() => navigation.navigate("Wishlist" as never)}
          >
            <Text>❤️</Text>
          </TouchableOpacity>

          {/* Cart Button */}
          <TouchableOpacity
            className="p-2"
            onPress={() => navigation.navigate("Cart" as never)}
          >
            <Text>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
