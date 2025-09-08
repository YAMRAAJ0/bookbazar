import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useWishlist } from "../context/WishlistContext";

const WishlistScreen = () => {
  const navigation = useNavigation();
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <View className="flex-1 bg-white">
      <Text className="text-2xl font-bold px-4 mt-6 mb-4">❤️ Wishlist</Text>

      {wishlist.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-600">Your wishlist is empty</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <View className="flex-row bg-white rounded-xl shadow mb-4 p-3 items-center">
              {/* Book Cover */}
              <TouchableOpacity
                onPress={() => navigation.navigate("BuyPage" as never, { book: item } as never)}
              >
                <Image
                  source={{ uri: item.cover }}
                  className="w-20 h-28 rounded-lg"
                  resizeMode="cover"
                />
              </TouchableOpacity>

              {/* Book Details */}
              <View className="flex-1 ml-3">
                <Text className="text-lg font-semibold">{item.title}</Text>
                <Text className="text-sm text-gray-600">{item.author}</Text>
                <Text className="text-orange-700 font-bold mt-1">{item.price}</Text>

                {/* Remove from Wishlist */}
                <TouchableOpacity
                  onPress={() => toggleWishlist(item)}
                  className="bg-red-100 mt-2 py-1 px-3 rounded-lg self-start"
                >
                  <Text className="text-red-600 text-sm">💔 Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default WishlistScreen;
