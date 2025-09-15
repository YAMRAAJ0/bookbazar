// EditProfile.tsx
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from "react-native";

export default function EditProfile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@email.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    Alert.alert("✅ Profile Updated", "Your changes have been saved!");
  };

  return (
    <ScrollView className="flex-1 bg-white p-5">
      {/* Profile Header */}
      <View className="items-center my-6">
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          className="w-28 h-28 rounded-full border-4 border-green-600"
        />
        <TouchableOpacity className="mt-3 bg-orange-700 px-4 py-2 rounded-full">
          <Text className="text-white font-semibold">Change Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View className="space-y-4">
        <View>
          <Text className="text-gray-600 mb-1">Full Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="black"
            className="border border-gray-300 rounded-lg p-3"
          />
        </View>

        <View>
          <Text className="text-gray-600 mb-1">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="black"
            keyboardType="email-address"
            className="border border-gray-300 rounded-lg p-3"
          />
        </View>

        <View>
          <Text className="text-gray-600 mb-1">Phone</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter phone number"
            placeholderTextColor="black"
            keyboardType="phone-pad"
            className="border border-gray-300 rounded-lg p-3"
          />
        </View>

        <View>
          <Text className="text-gray-600 mb-1">Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter new password"
            placeholderTextColor="black"
            secureTextEntry
            className="border border-gray-300 rounded-lg p-3"
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        onPress={handleSave}
        className="bg-green-700 py-3 rounded-xl items-center mt-8"
      >
        <Text className="text-white font-semibold text-lg">Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
