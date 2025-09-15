// BuyPage.tsx
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { books } from "../data/books";
import { Ionicons } from "@expo/vector-icons";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useNotifications } from "../context/NotificationContext";
import { useState, useRef } from "react";

const { width } = Dimensions.get("window");
const IMAGE_HEIGHT = 320;

const BuyPage = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const book = route.params?.book;

  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addNotification } = useNotifications();

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const images = [book.cover, book.backImage, book.frontImage, book.image].filter(Boolean);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleAddToCart = () => {
    addToCart(book); 
    addNotification(`Added "${book.title}" to cart`);
  };

  const buyNow = () => {
    navigation.navigate("Checkout", { book });
  };

  const suggestedBooks = books.filter((b) => b.id !== book.id);

  return (
    <ScrollView className="flex-1 bg-white">
      
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} className="px-4 py-2">
        <Text className="text-purple-700 font-semibold">⬅ Back</Text>
      </TouchableOpacity>

      {/* Image Slider */}
      <View className="relative">
      <FlatList
  ref={flatListRef}
  horizontal
  pagingEnabled
  nestedScrollEnabled
  showsHorizontalScrollIndicator={false}
  onScroll={handleScroll}
  scrollEventThrottle={16}
  data={images}
  keyExtractor={(_, index) => index.toString()}
  renderItem={({ item }) => (
    <Image
      source={{ uri: item }} // must be a valid URL
      style={{ width, height: IMAGE_HEIGHT }}
      resizeMode="cover"
    />
  )}
/>

        {/* Wishlist Heart */}
        <TouchableOpacity
          onPress={() => toggleWishlist(book)}
          className="absolute top-4 right-4 bg-white/70 p-2 rounded-full"
        >
          <Ionicons
            name={isInWishlist(book.id) ? "heart" : "heart-outline"}
            size={24}
            color="red"
          />
        </TouchableOpacity>

        {/* Bottom Dots */}
        <View className="absolute bottom-2 w-full flex-row justify-center">
          {images.map((_, index) => (
            <View
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"}`}
            />
          ))}
        </View>
      </View>

      {/* Book Info */}
      <View className="px-4 mt-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-800 flex-1 mr-2">{book.title}</Text>
          <Text className="text-yellow-500 text-lg">
            {"★".repeat(Math.floor(book.rating))}
            {"☆".repeat(5 - Math.floor(book.rating))}
          </Text>
        </View>
        <Text className="text-gray-600 mt-1 text-lg mb-2">by {book.author}</Text>

        {/* Price */}
        <View className="flex-row items-center mb-4">
          <Text className="text-orange-700 font-bold text-xl mr-2">{book.price}</Text>
          {book.originalPrice && (
            <Text className="text-gray-500 line-through mr-2">{book.originalPrice}</Text>
          )}
          {book.discount && (
            <Text className="text-green-600 font-semibold">{book.discount}</Text>
          )}
        </View>

        {/* Book Details */}
        <View className="bg-gray-100 p-4 rounded-xl mb-6">
          <Text className="text-base text-gray-800">
            <Text className="font-semibold">Category: </Text>{book.category}
          </Text>
          <Text className="text-base text-gray-800">
            <Text className="font-semibold">Publisher: </Text>{book.publisher || "Unknown"}
          </Text>
          <Text className="text-base text-gray-800">
            <Text className="font-semibold">Language: </Text>{book.language || "N/A"}
          </Text>
          <Text className="text-base text-gray-800 mt-2">
            <Text className="font-semibold">Description: </Text>{book.description || "No description available."}
          </Text>
        </View>

        {/* Buy / Add to Cart Buttons */}
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            onPress={buyNow}
            className="bg-green-600 flex-1 py-3 mr-2 rounded-xl items-center"
          >
            <Text className="text-white font-semibold text-lg">Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAddToCart}
            className="bg-purple-600 flex-1 py-3 ml-2 rounded-xl items-center"
          >
            <Text className="text-white font-semibold text-lg">Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Suggested Books */}
      <View className="px-4 mb-6">
        <Text className="text-xl font-bold mb-3">📚 You may also like</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={suggestedBooks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="w-40 bg-white rounded-xl shadow mx-2 p-2"
              onPress={() => navigation.navigate("BuyPage", { book: item })}
            >
              <Image
                source={{ uri: item.cover }}
                className="w-full h-48 rounded-lg mb-2"
                resizeMode="cover"
              />

              {/* Offer Badge */}
              {item.discount && (
                <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded">
                  <Text className="text-white text-xs">{item.discount}</Text>
                </View>
              )}

              {/* Title & Author */}
              <Text className="text-base font-semibold" numberOfLines={1}>{item.title}</Text>
              <Text className="text-sm text-gray-600" numberOfLines={1}>{item.author}</Text>
              <Text className="text-xs text-gray-500" numberOfLines={1}>
                {item.publisher || "Unknown"} • {item.language || "N/A"}
              </Text>

              {/* Price Section */}
              <View className="flex-row items-center mt-1">
                <Text className="text-orange-700 font-bold mr-1">{item.price}</Text>
                {item.originalPrice && (
                  <Text className="text-gray-500 line-through text-xs mr-1">{item.originalPrice}</Text>
                )}
                {item.discount && <Text className="text-green-600 text-xs">{item.discount}</Text>}
              </View>

              {/* Rating */}
              <Text className="text-yellow-500 text-sm">
                {"★".repeat(Math.floor(item.rating || 0))}
                {"☆".repeat(5 - Math.floor(item.rating || 0))}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

    </ScrollView>
  );
};

export default BuyPage;
