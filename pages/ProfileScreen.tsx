import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "./types"; 
export default function ProfileScreen({ onLogout }: { onLogout: () => void }) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="items-center py-16 bg-orange-100">
        <Image
          source={{ uri: "https://img.freepik.com/premium-photo/vector-avatar-profile-icon_837074-8917.jpg" }}
          className="w-24 h-24 rounded-full mb-3"
        />
        <Text className="text-xl font-bold text-orange-700">User Name</Text>
        <Text className="text-gray-500">user@example.com</Text>
      </View>

      <View className="mt-6">
        <TouchableOpacity onPress={() => navigation.navigate("MyOrders")} className="flex-row items-center px-6 py-4 border-b border-gray-200">
          <Ionicons name="cart-outline" size={22} color="#6b7280" />
          <Text className="ml-3 text-gray-800 text-base">My Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Wishlist")} className="flex-row items-center px-6 py-4 border-b border-gray-200">
          <Ionicons name="heart-outline" size={22} color="#6b7280" />
          <Text className="ml-3 text-gray-800 text-base">Wishlist</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Settings")} className="flex-row items-center px-6 py-4 border-b border-gray-200">
          <Ionicons name="settings-outline" size={22} color="#6b7280" />
          <Text className="ml-3 text-gray-800 text-base">Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("HelpCenter")} className="flex-row items-center px-6 py-4 border-b border-gray-200">
          <Ionicons name="help-circle-outline" size={22} color="#6b7280" />
          <Text className="ml-3 text-gray-800 text-base">Help Center</Text>
        </TouchableOpacity>
      </View>

      <View className="px-6 mt-8">
        <TouchableOpacity
          onPress={onLogout}
          className="bg-orange-700 py-3 rounded-xl items-center"
        >
          <Text className="text-white font-semibold text-lg">Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
