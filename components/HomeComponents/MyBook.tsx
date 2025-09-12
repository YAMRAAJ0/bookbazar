// MyBook.tsx
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { books } from "../../data/books";
import { useWishlist } from "../../context/WishlistContext";

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
              {/* Image container with relative position */}
              <View className="relative">
                <Image
                  source={{ uri: item.cover }}
                  className="w-full h-48 rounded-lg"
                  resizeMode="cover"
                />
          
                {/* Wishlist Icon */}
                <TouchableOpacity
                  onPress={() => toggleWishlist(item)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                >
                  <Text style={{ fontSize: 18 }}>{inWishlist ? "💔" : "❤️"}</Text>
                </TouchableOpacity>
              </View>
          
              {/* Book Info */}
              <Text className="text-base font-semibold mt-2" numberOfLines={1}>
                {item.title}
              </Text>
              <Text className="text-sm text-gray-600" numberOfLines={1}>
                {item.author}
              </Text>
              <Text className="text-xs text-gray-500" numberOfLines={1}>
                {item.publisher || "Unknown"} • {item.language || "N/A"}
              </Text>
          
              {/* Price Section */}
              <View className="flex-row items-center mt-1">
                <Text className="text-orange-700 font-bold mr-1">{item.price}</Text>
                {item.originalPrice && (
                  <Text className="text-gray-500 line-through text-xs mr-1">
                    {item.originalPrice}
                  </Text>
                )}
                {item.discount && (
                  <Text className="text-green-600 text-xs">{item.discount}</Text>
                )}
              </View>
          
              {/* Rating */}
              <Text className="text-yellow-500 text-sm">
                {"★".repeat(Math.floor(item.rating || 0))}
                {"☆".repeat(5 - Math.floor(item.rating || 0))}
              </Text>
            </TouchableOpacity>
          </View>
          
          );
        }}
      />
    </View>
  );
};

export default MyBook;
