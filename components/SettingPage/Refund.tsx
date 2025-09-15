import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function Refund() {
  const [selected, setSelected] = useState("bank"); // default
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [upiId, setUpiId] = useState("");

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-green-700 mb-6">
        Refund & Payout Preferences
      </Text>

      {/* Bank Transfer Option */}
      <TouchableOpacity
        onPress={() => setSelected("bank")}
        className={`flex-row items-center justify-between p-4 mb-4 rounded-xl border ${
          selected === "bank" ? "border-green-600 bg-green-50" : "border-gray-300"
        }`}
      >
        <Text className="text-lg font-semibold">Bank Transfer</Text>
        <View
          className={`w-6 h-6 rounded-full border-2 ${
            selected === "bank" ? "border-green-600 bg-green-600" : "border-gray-400"
          }`}
        />
      </TouchableOpacity>

      {selected === "bank" && (
        <View className="mb-4">
          <TextInput
            value={accountNumber}
            onChangeText={setAccountNumber}
            placeholder="Account Number"
            placeholderTextColor="black"
            className="border border-gray-300 rounded-lg px-3 py-2 mb-3"
          />
          <TextInput
            value={ifsc}
            onChangeText={setIfsc}
            placeholder="IFSC Code"
            placeholderTextColor="black"
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
        </View>
      )}

      {/* UPI Option */}
      <TouchableOpacity
        onPress={() => setSelected("upi")}
        className={`flex-row items-center justify-between p-4 mb-4 rounded-xl border ${
          selected === "upi" ? "border-green-600 bg-green-50" : "border-gray-300"
        }`}
      >
        <Text className="text-lg font-semibold">UPI</Text>
        <View
          className={`w-6 h-6 rounded-full border-2 ${
            selected === "upi" ? "border-green-600 bg-green-600" : "border-gray-400"
          }`}
        />
      </TouchableOpacity>

      {selected === "upi" && (
        <View className="mb-4">
          <TextInput
            value={upiId}
            onChangeText={setUpiId}
            placeholder="Enter UPI ID"
            placeholderTextColor="black"
            className="border border-gray-300 rounded-lg px-3 py-2"
          />
        </View>
      )}

      {/* Wallet Option */}
      <TouchableOpacity
        onPress={() => setSelected("wallet")}
        className={`flex-row items-center justify-between p-4 mb-4 rounded-xl border ${
          selected === "wallet" ? "border-green-600 bg-green-50" : "border-gray-300"
        }`}
      >
        <Text className="text-lg font-semibold">Wallet Balance</Text>
        <View
          className={`w-6 h-6 rounded-full border-2 ${
            selected === "wallet" ? "border-green-600 bg-green-600" : "border-gray-400"
          }`}
        />
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity className="bg-orange-700 py-3 rounded-xl items-center mt-6">
        <Text className="text-white font-semibold text-lg">Save Preferences</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
