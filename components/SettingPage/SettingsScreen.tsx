// screens/SettingsScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }: any) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <Text className="text-2xl font-bold text-orange-600 mb-4">
        ⚙️ Settings
      </Text>

      {/* Profile Settings */}
      <View className="bg-white rounded-2xl p-4 mb-4 shadow">
        <Text className="text-lg font-semibold mb-2">👤 Profile Settings</Text>

        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
          <Ionicons name="person-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="lock-closed-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">Change Password</Text>
        </TouchableOpacity>
      </View>

      {/* Address & Location */}
      <View className="bg-white rounded-2xl p-4 mb-4 shadow">
        <Text className="text-lg font-semibold mb-2">📍 Address & Location</Text>

        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="location-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">Manage Saved Addresses</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications */}
      <View className="bg-white rounded-2xl p-4 mb-4 shadow">
        <Text className="text-lg font-semibold mb-2">🔔 Notifications</Text>

        <View className="flex-row justify-between items-center py-3">
          <Text className="text-gray-700">Email / Push Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: "#d1d5db", true: "#f97316" }}
            thumbColor={notificationsEnabled ? "#fff" : "#f4f4f5"}
          />
        </View>
      </View>

      {/* Payment Settings */}
      <View className="bg-white rounded-2xl p-4 mb-4 shadow">
        <Text className="text-lg font-semibold mb-2">💳 Payment Settings</Text>

        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
          <Ionicons name="card-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">RazorPay / COD</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="cash-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">Refund & Payout Preferences</Text>
        </TouchableOpacity>
      </View>

      {/* App Preferences */}
      <View className="bg-white rounded-2xl p-4 mb-4 shadow">
        <Text className="text-lg font-semibold mb-2">⚡ App Preferences</Text>

        {/* Language Selection */}
        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
          <Ionicons name="language-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">Language Selection</Text>
        </TouchableOpacity>

        {/* Dark Mode */}
        <View className="flex-row justify-between items-center py-3">
          <View className="flex-row items-center">
            <Ionicons name="moon-outline" size={22} color="#f97316" />
            <Text className="ml-3 text-gray-700">Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#d1d5db", true: "#f97316" }}
            thumbColor={darkMode ? "#fff" : "#f4f4f5"}
          />
        </View>
      </View>

      {/* Help & Support */}
      <View className="bg-white rounded-2xl p-4 mb-4 shadow">
        <Text className="text-lg font-semibold mb-2">🛟 Help & Support</Text>

        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
          <Ionicons name="help-circle-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">FAQs</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="mail-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">Contact Support</Text>
        </TouchableOpacity>
      </View>

      {/* Log Out */}
      <TouchableOpacity
        onPress={() =>
          Alert.alert("Log Out", "Are you sure you want to log out?", [
            { text: "Cancel", style: "cancel" },
            { text: "Log Out", style: "destructive", onPress: () => navigation.navigate("Login") },
          ])
        }
        className="bg-red-500 rounded-2xl p-4 items-center mt-4 mb-10"
      >
        <Text className="text-white font-semibold">🚪 Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
