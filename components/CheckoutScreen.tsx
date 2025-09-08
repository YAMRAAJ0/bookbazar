// CheckoutScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const CheckoutScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const book = route.params?.book;

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [payment, setPayment] = useState("COD"); // Default Cash on Delivery

  const placeOrder = () => {
    if (!name || !mobile || !address || !pincode) {
      Alert.alert("Missing Info", "Please fill all the details!");
      return;
    }
    Alert.alert(
      "Order Placed 🎉",
      `Thank you ${name}! Your book "${book.title}" will be delivered to ${address}, Pincode: ${pincode}. Payment: ${payment}`
    );
    navigation.navigate("MainTabs");
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4 text-gray-800">
        Checkout
      </Text>

      {/* Order Summary */}
      <View className="p-3 bg-gray-100 rounded-lg mb-4">
        <Text className="text-lg font-semibold">{book.title}</Text>
        <Text className="text-gray-600">By {book.author}</Text>
        <Text className="text-orange-700 font-bold text-xl">{book.price}</Text>
      </View>

      {/* Delivery Info */}
      <Text className="text-lg font-semibold mb-2">Delivery Details</Text>
      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-3"
      />
      <TextInput
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-3"
      />
      <TextInput
        placeholder="Full Address"
        value={address}
        onChangeText={setAddress}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-3"
        multiline
      />
      <TextInput
        placeholder="Pincode"
        keyboardType="number-pad"
        value={pincode}
        onChangeText={setPincode}
        className="border border-gray-300 rounded-lg px-3 py-2 mb-5"
      />

      {/* Payment Options */}
      <Text className="text-lg font-semibold mb-2">Payment Method</Text>
      <View className="flex-row mb-5">
        <TouchableOpacity
          onPress={() => setPayment("COD")}
          className={`flex-1 p-3 mr-2 rounded-lg border ${
            payment === "COD" ? "bg-green-100 border-green-600" : "border-gray-300"
          }`}
        >
          <Text className="text-center">Cash on Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPayment("UPI")}
          className={`flex-1 p-3 ml-2 rounded-lg border ${
            payment === "UPI" ? "bg-green-100 border-green-600" : "border-gray-300"
          }`}
        >
          <Text className="text-center">UPI</Text>
        </TouchableOpacity>
      </View>

      {/* Place Order Button */}
      <TouchableOpacity
        onPress={placeOrder}
        className="bg-purple-600 py-3 rounded-xl items-center"
      >
        <Text className="text-white font-semibold text-lg">Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CheckoutScreen;
