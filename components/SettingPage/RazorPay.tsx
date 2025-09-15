import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function RazorPay() {
  const [selected, setSelected] = useState("razorpay"); // default

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-green-700 mb-6">
        Payment Settings
      </Text>

      {/* Razorpay Option */}
      <TouchableOpacity
        onPress={() => setSelected("razorpay")}
        className={`flex-row items-center justify-between p-4 mb-4 rounded-xl border ${
          selected === "razorpay" ? "border-green-600 bg-green-50" : "border-gray-300"
        }`}
      >
        <Text className="text-lg font-semibold">Razorpay (UPI / Card / NetBanking)</Text>
        <View
          className={`w-6 h-6 rounded-full border-2 ${
            selected === "razorpay" ? "border-green-600 bg-green-600" : "border-gray-400"
          }`}
        />
      </TouchableOpacity>

      {/* COD Option */}
      <TouchableOpacity
        onPress={() => setSelected("cod")}
        className={`flex-row items-center justify-between p-4 mb-4 rounded-xl border ${
          selected === "cod" ? "border-green-600 bg-green-50" : "border-gray-300"
        }`}
      >
        <Text className="text-lg font-semibold">Cash on Delivery (COD)</Text>
        <View
          className={`w-6 h-6 rounded-full border-2 ${
            selected === "cod" ? "border-green-600 bg-green-600" : "border-gray-400"
          }`}
        />
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity className="bg-orange-700 py-3 rounded-xl items-center mt-6">
        <Text className="text-white font-semibold text-lg">Save Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
}
