//RegisterScreen.tsx
import  { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, ImageBackground } from "react-native";
import { saveUser, getUsers } from "./storage";
import { Picker } from "@react-native-picker/picker";
import * as Notifications from "expo-notifications";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function RegisterScreen({
  onRegister,
  onLoginPage,
}: {
  onRegister: () => void;
  onLoginPage: () => void;
}) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Generate OTP and send notification
  const handleGenerateOtp = async () => {
    if (!mobile || !email) {
      Alert.alert("Info required", "Please enter Email and Mobile first.");
      return;
    }

    // Generate 4-digit random OTP
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);

    // Send as notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Your OTP Code",
        body: `Your OTP is ${newOtp}`,
      },
      trigger: null, // send immediately
    });

    Alert.alert("OTP Sent", "Check your notifications for the OTP.");
  };

  // Verify OTP and complete registration
  const handleRegister = async () => {
    if (!name || !mobile || !email || !gender || !password || !confirmPassword || !otp) {
      Alert.alert("All fields required", "Please fill all fields");
      return;
    }

    const users = await getUsers();
    if (users.some((u) => u.email === email)) {
      Alert.alert("Email already registered", "Use another email");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password mismatch", "Passwords do not match");
      return;
    }

    if (otp !== generatedOtp) {
      Alert.alert("Invalid OTP", "Please enter the correct OTP.");
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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingHorizontal: 32,
        }}
      >
        <View className="bg-white rounded-2xl p-6 shadow-lg mt-12">
          <Text className="text-2xl font-bold text-orange-700 text-center mb-6">
            Create Account
          </Text>

          <TextInput
            placeholder="Full Name"
            placeholderTextColor="black"
            value={name}
            onChangeText={setName}
            className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
          />
 
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            value={email}
            onChangeText={setEmail}
            className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
            keyboardType="email-address"
          />
 
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="black"
            value={mobile}
            onChangeText={setMobile}
            className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
            keyboardType="phone-pad"
          />
 
          <View className="border border-gray-300 rounded-lg mb-4">
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              className="h-12 px-2"
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
 
          {/* OTP Input + Generate Button */}
          <View className="flex-row items-center mb-6">
            <TextInput
              placeholder="Enter OTP"
              placeholderTextColor="black"
                value={otp}
              onChangeText={setOtp}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 mr-2"
              keyboardType="numeric"
              maxLength={4}
            />
            <TouchableOpacity
              onPress={handleGenerateOtp}
              className="bg-orange-700 px-4 py-3 rounded-lg"
            >
              <Text className="text-white font-semibold">Generate OTP</Text>
            </TouchableOpacity>
          </View>
    

                {/* Password Field with Eye Button */}
          <View className="flex-row items-center border border-gray-300 rounded-lg px-4 mb-6">
            <TextInput
              placeholder="Password"
              placeholderTextColor="black"  
              value={password}
              onChangeText={setPassword}
              className="flex-1 py-3"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={22}
                color="gray"
              />
            </TouchableOpacity>
          </View>
   
          {/* Confirm Password Field with Eye Button */}
          <View className="flex-row items-center border border-gray-300 rounded-lg px-4 mb-6">
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="black"    
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              className="flex-1 py-3"
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons
                name={showConfirmPassword ? "eye-off" : "eye"}
                size={22}
                color="gray"
              />
            </TouchableOpacity>
          </View>
     

          <TouchableOpacity
            onPress={handleRegister}
            className="bg-orange-700 py-3 rounded-xl items-center"
          >
            <Text className="text-white font-semibold text-lg">Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onLoginPage} className="items-center mt-4">
  <Text className="text-orange-700 font-semibold">
    Already have an account? Sign In
  </Text>
</TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>
  );
}
