// BookDetails.tsx
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Alert } from "react-native";
import { books } from "../data/books";

interface BookDetailsProps {
  book: typeof books;
  onBack: () => void; 
}

const BookDetails: React.FC<BookDetailsProps> = ({ book, onBack }) => {
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
    Alert.alert("Purchase Successful", `You bought ${book.title} for ${book.price}`);
  };

  const suggestedBooks = books.filter((b) => b.id !== book.id); // exclude current book

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Back Button */}
      <TouchableOpacity onPress={onBack} className="px-4 py-2">
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
        <Text className="text-lg text-gray-600 mb-2">{book.author}</Text>
        <Text className="text-orange-700 font-bold text-xl mb-4">{book.price}</Text>
        <Text className="text-gray-700 mb-6">{book.description}</Text>

        {/* Buy / Add to Cart Buttons */}
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            onPress={() => buyNow(book.id)}
            className="bg-green-600 flex-1 py-3 mr-2 rounded-xl items-center"
          >
            <Text className="text-white font-semibold text-lg">Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => addToCart(book.id)}
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
              onPress={() => Alert.alert(item.title, "Navigate to book details page")}
            >
              <Image
                source={{ uri: item.cover }}
                className="w-full h-48 rounded-lg mb-2"
                resizeMode="cover"
              />
              <Text className="text-base font-semibold">{item.title}</Text>
              <Text className="text-sm text-gray-600">{item.author}</Text>
              <Text className="text-orange-700 font-bold">{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default BookDetails;
