// components/DonateBook/DonateBook.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const DonateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [edition, setEdition] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [condition, setCondition] = useState("Good");
  const [quantity, setQuantity] = useState("1");
  const [location, setLocation] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("Pickup");
  const [recipient, setRecipient] = useState("Anyone");
  const [notes, setNotes] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission required to upload images!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setCoverImage(result.assets[0].uri);
    }
  };

  const handleDonate = () => {
    const donationData = {
      title,
      author,
      publisher,
      edition,
      genre,
      language,
      condition,
      quantity,
      location,
      deliveryOption,
      recipient,
      notes,
      coverImage,
    };
    console.log("📚 Donation Submitted:", donationData);
    alert("Thank you for donating! 🎉");
  };

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold text-orange-700 mb-6">📖 Donate a Book</Text>

      {/* Book Details */}
      <TextInput placeholder="Book Title" value={title} onChangeText={setTitle} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Author" value={author} onChangeText={setAuthor} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Publisher" value={publisher} onChangeText={setPublisher} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Edition / Year" value={edition} onChangeText={setEdition} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Genre / Category" value={genre} onChangeText={setGenre} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
      <TextInput placeholder="Language" value={language} onChangeText={setLanguage} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />

      {/* Condition */}
      <Text className="text-gray-700 font-semibold mb-2">Book Condition</Text>
      <View className="flex-row mb-4">
        {["Like New", "Good", "Fair"].map((c) => (
          <TouchableOpacity
            key={c}
            onPress={() => setCondition(c)}
            className={`px-4 py-2 mr-2 rounded-lg ${condition === c ? "bg-orange-600" : "bg-gray-200"}`}
          >
            <Text className={`${condition === c ? "text-white" : "text-gray-700"}`}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Image Upload */}
      <Text className="text-gray-700 font-semibold mb-2">Upload Cover Image</Text>
      <TouchableOpacity onPress={pickImage} className="bg-orange-100 py-3 rounded-lg mb-4 items-center">
        <Text className="text-orange-700 font-medium">📷 Choose Image</Text>
      </TouchableOpacity>
      {coverImage && <Image source={{ uri: coverImage }} className="w-32 h-48 rounded-lg mb-4" />}

      {/* Quantity */}
      <TextInput placeholder="Quantity" value={quantity} onChangeText={setQuantity} keyboardType="numeric" className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />

      {/* Location */}
      <TextInput placeholder="Pickup Location / Pincode" value={location} onChangeText={setLocation} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />

      {/* Delivery Options */}
      <Text className="text-gray-700 font-semibold mb-2">Delivery Options</Text>
      <View className="flex-row mb-4">
        {["Pickup", "Ship"].map((opt) => (
          <TouchableOpacity
            key={opt}
            onPress={() => setDeliveryOption(opt)}
            className={`px-4 py-2 mr-2 rounded-lg ${deliveryOption === opt ? "bg-orange-600" : "bg-gray-200"}`}
          >
            <Text className={`${deliveryOption === opt ? "text-white" : "text-gray-700"}`}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Preferred Recipient */}
      <Text className="text-gray-700 font-semibold mb-2">Preferred Recipient</Text>
      <View className="flex-row mb-4">
        {["Anyone", "Students", "NGOs", "Libraries"].map((opt) => (
          <TouchableOpacity
            key={opt}
            onPress={() => setRecipient(opt)}
            className={`px-4 py-2 mr-2 rounded-lg ${recipient === opt ? "bg-orange-600" : "bg-gray-200"}`}
          >
            <Text className={`${recipient === opt ? "text-white" : "text-gray-700"}`}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Notes */}
      <TextInput
        placeholder="Additional Notes (e.g. 'For school kids')"
        value={notes}
        onChangeText={setNotes}
        multiline
        className="border border-gray-300 rounded-lg px-4 py-3 mb-4 h-24"
      />

      {/* Donate Button */}
      <TouchableOpacity onPress={handleDonate} className="bg-orange-600 py-4 rounded-xl items-center mb-8">
        <Text className="text-white text-lg font-semibold">🙏 Donate Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DonateBook;
