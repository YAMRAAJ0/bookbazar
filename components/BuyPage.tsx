import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { books } from "../data/books";

const BuyPage = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const book = route.params?.book;

  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
      Alert.alert("Added to cart", `${book.title} added to your cart!`);
    } else {
      Alert.alert("Already in cart", `${book.title} is already in your cart.`);
    }
  };

  const buyNow = (id: number) => {
    Alert.alert(
      "Purchase Successful",
      `🎉 You bought ${book.title} for ${book.price}`
    );
  };

  const suggestedBooks = books.filter((b) => b.id !== book.id);

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="px-4 py-2"
      >
        <Text className="text-purple-700 font-semibold">⬅ Back</Text>
      </TouchableOpacity>

      {/* Book Cover */}
      <View className="items-center px-4">
        <Image
          source={{ uri: book.cover }}
          className="w-64 h-80 rounded-xl mb-4"
          resizeMode="cover"
        />
      </View>

      {/* Book Info */}
      <View className="px-4">
        <Text className="text-2xl font-bold text-gray-800">{book.title}</Text>
        <Text className="text-lg text-gray-600 mb-2">By {book.author}</Text>
        <Text className="text-orange-700 font-bold text-xl">{book.price}</Text>

        {/* Offer Section */}
        <View className="bg-green-50 p-3 rounded-lg mt-2 mb-4 border border-green-200">
          <Text className="text-green-700 font-semibold">
            🎁 Limited Time Offer
          </Text>
          <Text className="text-gray-700">
            Get 20% off your first order + Free Delivery
          </Text>
        </View>

        {/* Extra Details */}
        <View className="mb-4">
          <Text className="text-base text-gray-700">
            ⭐ Rating: {book.rating || "4.5/5"}
          </Text>
          <Text className="text-base text-gray-700">
            📖 Pages: {book.pages || "320"}
          </Text>
          <Text className="text-base text-gray-700">
            🏢 Publisher: {book.publisher || "Penguin Publishing"}
          </Text>
          <Text className="text-base text-gray-700">
            🌍 Language: {book.language || "English"}
          </Text>
          <Text className="text-base text-gray-700">
            📅 Published: {book.year || "2023"}
          </Text>
        </View>

        {/* Description */}
        <Text className="text-gray-700 mb-6">{book.description}</Text>

        {/* Preview Images */}
        <View className="mb-6">
          <Text className="text-lg font-bold mb-2">📷 Preview</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={book.images || []}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                className="w-32 h-40 rounded-lg mr-3"
                resizeMode="cover"
              />
            )}
          />
        </View>

        {/* Buy / Add to Cart Buttons */}
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            onPress={() => navigation.navigate("Checkout", { book })}
            className="bg-orange-700 flex-1 py-3 mr-2 rounded-xl items-center"
          >
            <Text className="text-white font-semibold text-lg">Buy Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => addToCart(book.id)}
            className="bg-purple-600 flex-1 py-3 ml-2 rounded-xl items-center"
          >
            <Text className="text-white font-semibold text-lg">
              Add to Cart
            </Text>
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
              <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded">
                <Text className="text-white text-xs">20% OFF</Text>
              </View>
              <Text
                numberOfLines={1}
                className="text-base font-semibold text-gray-800"
              >
                {item.title}
              </Text>
              <Text className="text-sm text-gray-600">{item.author}</Text>
              <Text className="text-orange-700 font-bold">{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default BuyPage;
