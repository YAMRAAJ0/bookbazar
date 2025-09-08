import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

export default function CartScreen() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      price: 12.99,
      qty: 1,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
      price: 9.99,
      qty: 2,
    },
  ]);

  const updateQty = (id: number, type: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

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
            <Image source={{ uri: item.cover }} className="w-16 h-24 rounded-md" />
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold">{item.title}</Text>
              <Text className="text-gray-600">{item.author}</Text>
              <Text className="text-green-700 font-semibold mt-1">${item.price}</Text>

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
      <View className="p-4 border-t border-gray-200">
        <Text className="text-lg font-bold">Total: ${total}</Text>
        <TouchableOpacity className="bg-green-600 py-3 rounded-xl items-center mt-3">
          <Text className="text-white font-semibold text-lg">Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
