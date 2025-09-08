// HomeHero.tsx
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { books } from "../data/books";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import HomeHero from "../components/HomeHero";
import Category from "../components/Category";
import MyBook from "../components/MyBook";
import Recommended from "components/Recommended";
const Tab = createBottomTabNavigator();

const Home = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
 
        {/* Hero Section */}
      <HomeHero/>
        {/* Stats Section */}
        <View className="flex-row justify-around bg-gray-50 py-6 mt-4 rounded-xl mx-4 shadow">
          <View className="items-center">
            <Text className="text-2xl font-bold">10K+</Text>
            <Text className="text-gray-600">Books Available</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold">5K+</Text>
            <Text className="text-gray-600">Happy Readers</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold">4.8</Text>
            <Text className="text-gray-600">Avg. Rating</Text>
          </View>
          <View className="items-center">
            <Text className="text-2xl font-bold">50+</Text>
            <Text className="text-gray-600">New Daily</Text>
          </View>
        </View>

        {/* Category Chips */}
        <Text className="text-xl font-bold px-4 mt-6 mb-3">
          📚 Category
        </Text>
        <Category/>

        {/* Featured Books Slider */}
        <MyBook/>
        
       
        {/* Recommended Section */}
     <Recommended/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
