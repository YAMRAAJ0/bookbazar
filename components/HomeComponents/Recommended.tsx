import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { books } from "../../data/books";
import { useNavigation } from "@react-navigation/native";
import { useWishlist } from "../../context/WishlistContext";
import { useState } from "react";
import Category from "../../components/HomeComponents/Category";
import MyBooks from "./MyBook";

export default function BrowseScreen() {
  const navigation = useNavigation();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Search + Filters
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // All filter states
  const [filters, setFilters] = useState({
    author: "",
    minPrice: "",
    maxPrice: "",
    rating: 0,
    language: "",
    publisher: "",
  });

  // ✅ Filter books
  const filteredBooks = books.filter((b) => {
    // Category
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;

    // Search
    const matchesSearch =
      b.title.toLowerCase().includes(searchText.toLowerCase()) ||
      b.author.toLowerCase().includes(searchText.toLowerCase());

    // Author
    const matchesAuthor =
      !filters.author || b.author.toLowerCase().includes(filters.author.toLowerCase());

    // Publisher (optional field on book)
    const matchesPublisher =
      !filters.publisher ||
      (b.publisher && b.publisher.toLowerCase().includes(filters.publisher.toLowerCase()));

    // Price
    const priceValue = parseFloat(b.price.replace("₹", ""));
    const matchesPrice =
      (!filters.minPrice || priceValue >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice || priceValue <= parseFloat(filters.maxPrice));

    // Language (optional field on book)
    const matchesLanguage =
      !filters.language ||
      (b.language && b.language.toLowerCase() === filters.language.toLowerCase());

    // Rating (optional field on book)
    const matchesRating = !filters.rating || (b.rating && b.rating >= filters.rating);

    return (
      matchesCategory &&
      matchesSearch &&
      matchesAuthor &&
      matchesPublisher &&
      matchesPrice &&
      matchesLanguage &&
      matchesRating
    );
  });

  return (
    <View className="flex-1 bg-white">


      {/* Categories + Filters */}
      <Category
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setFilters={setFilters}
      />
          
      <MyBooks/>

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
                  {/* Book Cover */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("BuyPage", { book: item })}
                  >
                    <View className="relative">
                      <Image
                        source={{ uri: item.cover }}
                        className="w-full h-48 rounded-lg"
                        resizeMode="cover"
                      />
                      {/* Wishlist */}
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

{/* Details */}
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

                </View>
              );
            })
          ) : (
            <Text className="text-center text-gray-500 mt-10">No books found 📚</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
