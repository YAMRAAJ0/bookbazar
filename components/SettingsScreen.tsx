// screens/SettingsScreen.tsx
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }: any) {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <Text className="text-2xl font-bold text-orange-600 mb-4">⚙️ Settings</Text>

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
        <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
          <Text className="text-gray-700">Dark / Light Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#d1d5db", true: "#f97316" }}
            thumbColor={darkMode ? "#fff" : "#f4f4f5"}
          />
        </View>
        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="language-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">Language Selection</Text>
        </TouchableOpacity>
      </View>

      {/* Security */}
      <View className="bg-white rounded-2xl p-4 mb-4 shadow">
        <Text className="text-lg font-semibold mb-2">🔒 Security</Text>
        <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-200">
          <Ionicons name="shield-checkmark-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">Two-Factor Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center py-3">
          <Ionicons name="time-outline" size={22} color="#f97316" />
          <Text className="ml-3 text-gray-700">Login History</Text>
        </TouchableOpacity>
      </View>

      {/* Log Out */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        className="bg-red-500 rounded-2xl p-4 items-center mt-4 mb-10"
      >
        <Text className="text-white font-semibold">🚪 Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
