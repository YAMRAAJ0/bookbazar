import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { books } from "../data/books";

export default function BrowseScreen() {

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="p-4 bg-orange-50">
        <Text className="text-2xl font-bold text-orange-700">Browse Books</Text>
        <TextInput
          placeholder="Search books, authors..."
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
                {["All", "Fiction", "Non-Fiction", "Romance", "Sci-Fi", "History"].map((cat, idx) => (
                <TouchableOpacity
                    key={idx}
                    className="bg-orange-100 px-4 py-2 rounded-full mr-3"
                >
                    <Text className="text-orange-700 font-medium">{cat}</Text>
                </TouchableOpacity>
                ))}
            </ScrollView>
            </View>


      {/* Book List */}
      <ScrollView className="mt-4 px-4">
        {books.map((book) => (
          <View
            key={book.id}
            className="flex-row items-center mb-4 p-3 bg-gray-50 rounded-xl shadow-sm"
          >
            <Image source={{ uri: book.cover }} className="w-16 h-24 rounded-md" />
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold">{book.title}</Text>
              <Text className="text-gray-600">{book.author}</Text>
              <Text className="text-orange-700 font-semibold mt-1">{book.price}</Text>
            </View>
            <TouchableOpacity className="bg-orange-600 px-3 py-1 rounded-full">
              <Text className="text-white">Add</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
