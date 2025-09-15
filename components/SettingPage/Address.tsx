// Address.tsx
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import * as Location from "expo-location";

export default function Address() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  const handleSave = () => {
    if (!name || !phone || !street || !city || !pincode) {
      Alert.alert("All fields required", "Please fill all the details.");
      return;
    }
    Alert.alert("✅ Address Saved", `${name}, ${street}, ${city} - ${pincode}`);
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "Enable location permission in settings.");
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation({ lat: loc.coords.latitude, lon: loc.coords.longitude });
    Alert.alert("📍 Location Captured", `Lat: ${loc.coords.latitude}, Lon: ${loc.coords.longitude}`);
  };

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold text-green-700 mb-6">Add Address</Text>

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
          <Text className="text-gray-600 mb-1">Street</Text>
          <TextInput
            value={street}
            onChangeText={setStreet}
            placeholder="Enter street address"
            placeholderTextColor="black"
            className="border border-gray-300 rounded-lg p-3"
          />
        </View>

        <View>
          <Text className="text-gray-600 mb-1">City</Text>
          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="Enter city"
            placeholderTextColor="black"
            className="border border-gray-300 rounded-lg p-3"
          />
        </View>

        <View>
          <Text className="text-gray-600 mb-1">Pincode</Text>
          <TextInput
            value={pincode}
            onChangeText={setPincode}
            placeholder="Enter pincode"
            placeholderTextColor="black"
            keyboardType="numeric"
            className="border border-gray-300 rounded-lg p-3"
          />
        </View>
      </View>

      {/* GPS Location Button */}
      <TouchableOpacity
        onPress={getCurrentLocation}
        className="bg-orange-700 py-3 rounded-xl items-center mt-6"
      >
        <Text className="text-white font-semibold text-lg">Use Current Location</Text>
      </TouchableOpacity>

      {location && (
        <View className="mt-4 bg-gray-100 p-3 rounded-lg">
          <Text className="text-gray-700">Latitude: {location.lat}</Text>
          <Text className="text-gray-700">Longitude: {location.lon}</Text>
        </View>
      )}

      {/* Save Address Button */}
      <TouchableOpacity
        onPress={handleSave}
        className="bg-orange-700 py-3 rounded-xl items-center mt-6"
      >
        <Text className="text-white font-semibold text-lg">Save Address</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
