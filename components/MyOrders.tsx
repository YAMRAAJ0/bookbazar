// MyOrders.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Linking } from "react-native";

const sampleOrders = {
  purchased: [
    {
      id: "ORD12345",
      title: "Atomic Habits",
      author: "James Clear",
      price: "₹499",
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
      status: "Delivered",
      date: "2025-01-22",
      address: "123, MG Road, Bangalore, 560001",
      tracking: "https://www.delhivery.com/tracking/ORD12345",
    },
  ],
  sold: [
    {
      id: "ORD98765",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: "₹399",
      image: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
      status: "Shipped",
      date: "2025-02-01",
      address: "456, Park Street, Kolkata, 700016",
      tracking: "https://www.bluedart.com/tracking/ORD98765",
    },
  ],
  donated: [
    {
      id: "DON123",
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      price: "Donated",
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
      status: "Pending",
      date: "2025-02-05",
      address: "NGO Library, Delhi",
      tracking: "",
    },
  ],
};

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState<"purchased" | "sold" | "donated">("purchased");

  const renderOrder = ({ item }: { item: any }) => (
    <View className="bg-white p-4 mb-4 rounded-xl shadow-sm border border-gray-200">
      {/* Book Info */}
      <View className="flex-row">
        <Image source={{ uri: item.image }} className="w-20 h-28 rounded-lg" resizeMode="cover" />
        <View className="flex-1 ml-4">
          <Text className="text-lg font-semibold text-gray-900">{item.title}</Text>
          <Text className="text-sm text-gray-500">by {item.author}</Text>
          <Text className="text-orange-600 font-bold mt-1">{item.price}</Text>
          <Text className="text-xs text-gray-400 mt-1">Order ID: {item.id}</Text>
        </View>
      </View>

      {/* Status & Date */}
      <View className="mt-3">
        <Text className="text-sm text-gray-700">
          Status: <Text className="font-semibold">{item.status}</Text>
        </Text>
        <Text className="text-sm text-gray-500">Date: {item.date}</Text>
        <Text className="text-sm text-gray-500">Delivery: {item.address}</Text>
        {item.tracking ? (
          <TouchableOpacity onPress={() => Linking.openURL(item.tracking)}>
            <Text className="text-sm text-blue-600 underline mt-1">Track Order</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Action Buttons */}
      <View className="flex-row mt-4">
        {item.status === "Pending" && (
          <TouchableOpacity className="bg-red-100 px-3 py-2 rounded-lg mr-2">
            <Text className="text-red-600 text-sm font-medium">Cancel Order</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity className="bg-orange-100 px-3 py-2 rounded-lg mr-2">
          <Text className="text-orange-600 text-sm font-medium">Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-green-100 px-3 py-2 rounded-lg">
          <Text className="text-green-600 text-sm font-medium">Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <Text className="text-2xl font-bold text-orange-700 mb-4">🛒 My Orders</Text>

      {/* Tabs */}
      <View className="flex-row justify-around mb-6">
        {["purchased", "sold", "donated"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab as any)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab ? "bg-orange-600" : "bg-gray-200"
            }`}
          >
            <Text
              className={`font-semibold ${
                activeTab === tab ? "text-white" : "text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Orders List */}
      <FlatList
        data={sampleOrders[activeTab]}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyOrders;
