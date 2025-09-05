import { View, Text } from "react-native";

const WishlistScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">❤️ Wishlist</Text>
      <Text className="text-gray-600 mt-2">Your wishlist is empty</Text>
    </View>
  );
};

export default WishlistScreen;
