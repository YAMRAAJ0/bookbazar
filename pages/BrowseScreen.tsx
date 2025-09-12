import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { books } from "../data/books";
import { useNavigation } from "@react-navigation/native";
import { useWishlist } from "../context/WishlistContext";
import { useState } from "react";
import Category from "../components/HomeComponents/Category";

export default function BrowseScreen() {
  const navigation = useNavigation();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // state for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  

  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Romance",
    "Sci-Fi",
    "History",
    "Thriller",
    "Self-Help",
    "Philosophy",
  ];

  // filter books by category + search
  const filteredBooks = books.filter((b) => {
    const matchesCategory =
      selectedCategory === "All" || b.category === selectedCategory;

    const matchesSearch =
      b.title.toLowerCase().includes(searchText.toLowerCase()) ||
      b.author.toLowerCase().includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="p-4 bg-orange-50">
        <Text className="text-2xl font-bold text-orange-700">Browse Books</Text>
        <TextInput
          placeholder="Search books, authors..."
          value={searchText}
          onChangeText={setSearchText}
          className="bg-gray-100 mt-3 px-4 py-2 rounded-full"
        />
      </View>

      {/* Categories */}
      <View className="mt-3">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center", paddingHorizontal: 16 }}
        >
          {categories.map((cat, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full mr-3 ${
                selectedCategory === cat ? "bg-orange-600" : "bg-orange-100"
              }`}
            >
              <Text
                className={`font-medium ${
                  selectedCategory === cat ? "text-white" : "text-orange-700"
                }`}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Book List */}
      <ScrollView className="mt-4">
        <View className="flex-wrap flex-row justify-between px-4">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => {
              const isWished = isInWishlist(item);
              return (
                <View
                  key={item.id}
                  className="w-[48%] bg-white rounded-xl shadow mb-4 p-3"
                >
                  {/* Book Cover with Wishlist */}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("BuyPage", { book: item })
                    }
                  >
                    <View className="relative">
                      <Image
                        source={{ uri: item.cover }}
                        className="w-full h-48 rounded-lg"
                        resizeMode="cover"
                      />
                      <TouchableOpacity
                        onPress={() => toggleWishlist(item)}
                        className="absolute top-2 right-2 bg-black/80 rounded-full p-1"
                      >
                        <Text className="text-lg">
                          {isWished ? "❤️" : "🤍"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>

                  {/* Book Details */}
                  <Text className="text-base font-semibold mt-2">
                    {item.title}
                  </Text>
                  <Text className="text-sm text-gray-600">{item.author}</Text>
                  <Text className="text-orange-700 font-bold mt-1">
                    {item.price}
                  </Text>
                </View>
              );
            })
          ) : (
            <Text className="text-center text-gray-500 mt-10">
              No books found 📚
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
