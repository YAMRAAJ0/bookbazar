// HomeHero.tsx
import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { books } from "../../data/books";

const Recommended = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((bookId) => bookId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <View>
      {/* Recommended Section */}
      <Text className="text-xl font-bold px-4 mt-6 mb-3">
        ⭐ Recommended For You
      </Text>

      <View className="flex-wrap flex-row justify-between px-4">
        {books.map((item) => {
          const isWished = wishlist.includes(item.id);
          return (
            <View
              key={item.id}
              className="w-[48%] bg-white rounded-xl shadow mb-4 p-3"
            >
              {/* Book Cover with Wishlist */}
              <View className="relative">
                <Image
                  source={{ uri: item.cover }}
                  className="w-full h-48 rounded-lg"
                  resizeMode="cover"
                />
                <TouchableOpacity
                  onPress={() => toggleWishlist(item.id)}
                  className="absolute top-2 right-2 bg-black/80 rounded-full p-1"
                >
                  <Text className="text-lg">{isWished ? "❤️" : "🤍"}</Text>
                </TouchableOpacity>
              </View>

              {/* Book Details */}
              <Text className="text-base font-semibold mt-2">{item.title}</Text>
              <Text className="text-sm text-gray-600">{item.author}</Text>
              <Text className="text-orange-700 font-bold mt-1">{item.price}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Recommended;
