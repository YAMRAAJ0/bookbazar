import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { books } from "../data/books";
import { useWishlist } from "../context/WishlistContext";

const MyBook = () => {
  const navigation = useNavigation();
  const { toggleWishlist, isInWishlist } = useWishlist();

  return (
    <View>
      <Text className="text-xl font-bold px-4 mt-6 mb-3">📚 My Books</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const inWishlist = isInWishlist(item.id);

          return (
            <View className="w-40 bg-white rounded-xl shadow mx-2 p-3">
              <TouchableOpacity
                onPress={() => navigation.navigate("BuyPage", { book: item })}
              >
                <Image
                  source={{ uri: item.cover }}
                  className="w-full h-48 rounded-lg"
                  resizeMode="cover"
                />
                <Text className="text-base font-semibold mt-2">
                  {item.title}
                </Text>
                <Text className="text-sm text-gray-600">{item.author}</Text>
                <Text className="text-orange-700 font-bold mt-1">
                  {item.price}
                </Text>
              </TouchableOpacity>

              {/* Wishlist Toggle Button */}
              <TouchableOpacity onPress={() => toggleWishlist(item)}>
                <Text>{isInWishlist(item) ? "💔 Remove from Wishlist" : "❤️ Add to Wishlist"}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyBook;
