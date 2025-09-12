// CartScreen.tsx

import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useCart } from "../context/CartContext";
export default function CartScreen() {
  const { cart, updateQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <View className="flex-1 bg-white">
      <Text className="text-2xl font-bold text-green-700 p-4">Your Cart</Text>

      <ScrollView className="px-4">
        {cart.map((item) => (
          <View
            key={item.id}
            className="flex-row items-center mb-4 p-3 bg-gray-50 rounded-xl shadow-sm"
          >
            <Image source={{ uri: item.cover }} className="w-20 h-28 rounded-md" />
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold">{item.title}</Text>
              <Text className="text-gray-600">{item.author}</Text>
              <Text className="text-gray-500 text-xs">
                {item.publisher} • {item.language} • {item.category}
              </Text>

              {/* Price Section */}
              <View className="flex-row items-center mt-1">
                <Text className="text-green-700 font-bold mr-2">{item.price}</Text>
                {item.originalPrice && (
                  <Text className="text-gray-500 line-through text-xs mr-2">
                    {item.originalPrice}
                  </Text>
                )}
                {item.discount && <Text className="text-orange-600 text-xs">{item.discount}</Text>}
              </View>

              {/* Rating */}
              <Text className="text-yellow-500 text-sm mt-1">
                {"★".repeat(Math.floor(item.rating))}
                {"☆".repeat(5 - Math.floor(item.rating))}
              </Text>

              {/* Quantity Controls */}
              <View className="flex-row items-center mt-2">
                <TouchableOpacity
                  onPress={() => updateQty(item.id, "dec")}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  <Text>-</Text>
                </TouchableOpacity>
                <Text className="mx-3">{item.qty}</Text>
                <TouchableOpacity
                  onPress={() => updateQty(item.id, "inc")}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View className="p-4 border-t pb-16 border-gray-200">
        <Text className="text-lg font-bold">Total: ₹{total}</Text>
        <TouchableOpacity className="bg-orange-700 py-3 rounded-xl items-center mt-3">
          <Text className="text-white font-semibold text-lg">Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
