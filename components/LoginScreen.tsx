import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image } from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "tio@gmail.com" && password === "1234") {
      navigation.replace("BottomTabs");
    } else {
      Alert.alert("Invalid Credentials", "Please enter correct email & password");
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1508780709619-79562169bc64" }}
      className="flex-1"
      resizeMode="cover"
    >
      {/* Overlay */}
      <View className="absolute inset-0 bg-purple-900/70" />

      {/* Content */}
      <View className="flex-1 justify-center px-8">
        {/* Logo */}
        <View className="items-center mb-8">
          <Image
            source={{ uri: "https://img.icons8.com/color/96/000000/react-native.png" }}
            className="w-20 h-20 mb-3"
          />
          <Text className="text-2xl font-bold text-white">MyApp</Text>
        </View>

        {/* Card */}
        <View className="bg-white rounded-2xl p-6 shadow-lg">
          <Text className="text-2xl font-bold text-purple-700 text-center mb-6">
            Welcome Back 👋
          </Text>

          {/* Email */}
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base"
            keyboardType="email-address"
            placeholderTextColor="#999"
          />

          {/* Password */}
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            className="border border-gray-300 rounded-lg px-4 py-3 mb-6 text-base"
            secureTextEntry
            placeholderTextColor="#999"
          />

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-purple-600 py-3 rounded-xl items-center"
          >
            <Text className="text-white font-semibold text-lg">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
