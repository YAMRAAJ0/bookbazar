import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const SellBookScreen = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [condition, setCondition] = useState("");
  const [notes, setNotes] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [sellingPrice, setSellingPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [negotiable, setNegotiable] = useState(false);
  const [quantity, setQuantity] = useState("1");
  const [location, setLocation] = useState("");
  const [extraNotes, setExtraNotes] = useState("");

  // Pick Image
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  const handleSubmit = () => {
    if (!title || !author || !sellingPrice) {
      alert("Please fill in required fields (Title, Author, Price)");
      return;
    }
    alert("✅ Book listed successfully!");
  };

  return (
    <ScrollView className="flex-1 bg-white px-4 py-6">
      <Text className="text-2xl font-bold text-orange-700 mb-4">📖 Sell a Book</Text>

      {/* Book Details */}
      <TextInput placeholder="Book Title *" placeholderTextColor="black" value={title} onChangeText={setTitle} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Author *" placeholderTextColor="black" value={author} onChangeText={setAuthor} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Publisher" placeholderTextColor="black" value={publisher} onChangeText={setPublisher} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Edition / Year of Publication" placeholderTextColor="black" value={year} onChangeText={setYear} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Genre / Category" placeholderTextColor="black" value={genre} onChangeText={setGenre} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Language" placeholderTextColor="black" value={language} onChangeText={setLanguage} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />

      {/* Condition */}
      <TextInput placeholder="Condition (New / Good / Fair / Old)" placeholderTextColor="black" value={condition} onChangeText={setCondition} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Notes (damages, highlights, etc.)" placeholderTextColor="black" value={notes} onChangeText={setNotes} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" multiline />

      {/* Images */}
      <TouchableOpacity onPress={pickImage} className="bg-orange-100 py-3 rounded-lg mb-4 items-center">
        <Text className="text-orange-700 font-semibold">📷 Upload Images</Text>
      </TouchableOpacity>
      <View className="flex-row flex-wrap mb-4">
        {images.map((img, idx) => (
          <Image key={idx} source={{ uri: img }} className="w-20 h-28 mr-2 mb-2 rounded-lg" />
        ))}
      </View>

      {/* Pricing */}
      <TextInput placeholder="Selling Price *" placeholderTextColor="black" value={sellingPrice} onChangeText={setSellingPrice} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" keyboardType="numeric" />
      <TextInput placeholder="Original Price (optional)" placeholderTextColor="black" value={originalPrice} onChangeText={setOriginalPrice} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" keyboardType="numeric" />

      <TouchableOpacity
        onPress={() => setNegotiable(!negotiable)}
        className={`py-3 rounded-lg mb-4 items-center ${negotiable ? "bg-green-200" : "bg-gray-200"}`}
      >
        <Text className="font-semibold">{negotiable ? "✅ Negotiable" : "❌ Not Negotiable"}</Text>
      </TouchableOpacity>

      {/* Availability */}
      <TextInput placeholder="Quantity" placeholderTextColor="black" value={quantity} onChangeText={setQuantity} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" keyboardType="numeric" />

      {/* Seller Info */}
      <TextInput placeholder="Location (City / Pincode)" placeholderTextColor="black" value={location} onChangeText={setLocation} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />

      {/* Additional Notes */}
      <TextInput placeholder="Additional Notes" placeholderTextColor="black" value={extraNotes} onChangeText={setExtraNotes} className="border border-gray-300 rounded-lg px-4 py-3 mb-6" multiline />

      {/* Submit */}
      <View className=" pb-16">
      <TouchableOpacity onPress={handleSubmit} className="bg-orange-600 py-4 rounded-xl items-center">
        <Text className="text-white text-lg font-semibold">📢 List Book for Sale</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SellBookScreen;
