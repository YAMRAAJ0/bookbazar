// screens/HelpCenterScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// enable smooth animation for Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HelpCenterScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Buying a Book",
      answer:
        "Browse books, add them to your cart, and complete checkout using COD or RazorPay.",
    },
    {
      question: "Selling a Book",
      answer:
        "Upload details of your book, set a price, and buyers can purchase directly.",
    },
    {
      question: "Donating a Book",
      answer:
        "You can donate books by selecting the donate option in the Sell/Donate section.",
    },
    {
      question: "Payments & Refunds",
      answer:
        "We support COD and RazorPay. Refunds will be processed within 5-7 business days.",
    },
    {
      question: "Delivery & Shipping",
      answer:
        "Delivery usually takes 3-5 working days depending on your location.",
    },
  ];

  const toggleExpand = (index: number) => {
    LayoutAnimation.easeInEaseOut();
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold mb-6">❓ Help Center</Text>

      {/* FAQs Section with dropdowns */}
      <View className="mb-6">
        <Text className="text-lg font-semibold mb-2">FAQs</Text>
        {faqs.map((faq, index) => (
          <View key={index} className="mb-2 bg-white rounded-lg shadow">
            <TouchableOpacity
              onPress={() => toggleExpand(index)}
              className="flex-row justify-between items-center p-4"
            >
              <Text className="text-gray-800 font-medium">{faq.question}</Text>
              <Ionicons
                name={expandedIndex === index ? "chevron-up" : "chevron-down"}
                size={20}
                color="#f97316"
              />
            </TouchableOpacity>

            {expandedIndex === index && (
              <View className="px-4 pb-4">
                <Text className="text-gray-600">{faq.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Contact Support */}
      <View className="mb-6">
        <Text className="text-lg font-semibold mb-2">Contact Support</Text>
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow mb-2">
          <Text className="text-gray-700">Chat with Support</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow">
          <Text className="text-gray-700">Call helpline</Text>
        </TouchableOpacity>
      </View>

      {/* Report an Issue */}
      <View className="mb-6">
        <Text className="text-lg font-semibold mb-2">Report an Issue</Text>
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow">
          <Text className="text-gray-700">With Order</Text>
        </TouchableOpacity>
      </View>

      {/* Policies & Info */}
      <View className="mb-6">
        <Text className="text-lg font-semibold mb-2">Policies & Info</Text>
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow mb-2">
          <Text className="text-gray-700">Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow mb-2">
          <Text className="text-gray-700">Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-lg shadow">
          <Text className="text-gray-700">Return / Refund Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HelpCenterScreen;
