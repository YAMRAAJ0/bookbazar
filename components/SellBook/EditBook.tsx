import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function EditBook() {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const { book } = route.params; // ✅ Get book data

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [price, setPrice] = useState(book.price);

  const handleSave = () => {
    // Here you’d call API or update context/state
    console.log("Updated Book:", { title, author, price });
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-white px-4 py-6">
      <Text className="text-2xl font-bold text-orange-700 mb-6">
        ✏️ Edit Book
      </Text>

      <Text className="text-gray-700 mb-1">Title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Enter book title"
        placeholderTextColor="black"
      />

      <Text className="text-gray-700 mb-1">Author</Text>
      <TextInput
        value={author}
        onChangeText={setAuthor}
        className="border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Enter author name"
        placeholderTextColor="black"
      />

      <Text className="text-gray-700 mb-1">Price</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        className="border border-gray-300 rounded-lg p-3 mb-6"
        placeholder="Enter price"
        placeholderTextColor="black"
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={handleSave}
        className="bg-orange-600 py-4 rounded-xl items-center"
      >
        <Text className="text-white text-lg font-semibold">💾 Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}
