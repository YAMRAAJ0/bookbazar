import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, Image, ScrollView } from "react-native";
import { getUsers, User } from "./storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
const LOGIN_TOKEN_KEY = "user_token";

export default function LoginScreen({ onLogin, onRegisterPage }: { onLogin: () => void; onRegisterPage: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    const users: User[] = await getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      // Save token (can be user email or a random string)
      await AsyncStorage.setItem(LOGIN_TOKEN_KEY, email);
      onLogin();
    } else {
      Alert.alert("Invalid Credentials", "Please enter correct email & password");
    }
  };

  // Optional: auto-login if token exists
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem(LOGIN_TOKEN_KEY);
      if (token) {
        onLogin(); // auto-login
      }
    };
    checkToken();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground source={{ uri: "https://images.unsplash.com/photo-1508780709619-79562169bc64" }} className="flex-1" resizeMode="cover">
          <View className="absolute inset-0 bg-purple-900/70" />
          <View className="flex-1 justify-center px-8">
          
            <View className="bg-white text-black rounded-2xl p-6 shadow-lg">
              <Text className="text-2xl font-bold text-orange-700 text-center mb-6">BookMarket</Text>
              <Text className="text-gray-600 text-sm mb-2">Enter your email address</Text>
              <TextInput placeholder="Enter Email" placeholderTextColor="black" value={email} onChangeText={setEmail} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" keyboardType="email-address" />
             
              <Text className="text-gray-600 text-sm mb-2">Enter your password</Text>           
              <View className="flex-row items-center border border-gray-300 rounded-lg px-4 mb-6">
              <TextInput placeholder="Enter Password" placeholderTextColor="black" value={password} onChangeText={setPassword} className="flex-1 py-3" secureTextEntry={!showPassword} />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={22}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

              <TouchableOpacity onPress={handleLogin} className="bg-orange-600 py-3 rounded-xl items-center mb-4">
                <Text className="text-white font-semibold text-lg">Login</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onRegisterPage} className="items-center">
                <Text className="text-orange-700 font-semibold">Don't have an account? Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
