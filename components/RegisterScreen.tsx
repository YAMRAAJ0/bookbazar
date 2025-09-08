import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, ImageBackground } from "react-native";
import { saveUser, User, getUsers } from "./storage";
import { Picker } from "@react-native-picker/picker";

export default function RegisterScreen({ onRegister }: { onRegister: () => void }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(""); 
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!name || !mobile || !email || !gender || !password) {
      Alert.alert("All fields required", "Please fill all fields");
      return;
    }

    const users = await getUsers();
    if (users.some(u => u.email === email)) {
      Alert.alert("Email already registered", "Use another email");
      return;
    }

    await saveUser({ name, mobile, email, gender, password });
    Alert.alert("Success", "Registration complete!");
    onRegister();
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1508780709619-79562169bc64" }}
      className="flex-1"
      resizeMode="cover"
    >
      <View className="absolute inset-0 bg-purple-900/70" />
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center", paddingHorizontal: 32 }}>
        <View className="bg-white rounded-2xl p-6 shadow-lg mt-12">
          <Text className="text-2xl font-bold text-purple-700 text-center mb-6">Create Account</Text>
          <TextInput placeholder="Full Name" value={name} onChangeText={setName} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" />
          <TextInput placeholder="Mobile Number" value={mobile} onChangeText={setMobile} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" keyboardType="phone-pad" />
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} className="border border-gray-300 rounded-lg px-4 py-3 mb-4" keyboardType="email-address" />
          <View className="border border-gray-300 rounded-lg mb-4">
            <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)} className="h-12 px-2">
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
          <TextInput placeholder="Password" value={password} onChangeText={setPassword} className="border border-gray-300 rounded-lg px-4 py-3 mb-6" secureTextEntry />
          <TouchableOpacity onPress={handleRegister} className="bg-purple-600 py-3 rounded-xl items-center">
            <Text className="text-white font-semibold text-lg">Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
