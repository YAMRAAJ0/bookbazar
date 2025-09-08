import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { books } from "../data/books";
import BookDetails from "./BookDetails";

const MyBook = () => {
  const [selectedBook, setSelectedBook] = useState<typeof books | null>(null);

  if (selectedBook) {
    return <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />;
  }

  return (
    <View>
      <Text className="text-xl font-bold px-4 mt-6 mb-3">📚 My Books</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-40 bg-white rounded-xl shadow mx-2 p-3"
            onPress={() => setSelectedBook(item)}
          >
            <Image
              source={{ uri: item.cover }}
              className="w-full h-48 rounded-lg"
              resizeMode="cover"
            />
            <Text className="text-base font-semibold mt-2">{item.title}</Text>
            <Text className="text-sm text-gray-600">{item.author}</Text>
            <Text className="text-orange-700 font-bold mt-1">{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MyBook;
