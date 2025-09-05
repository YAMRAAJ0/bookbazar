// HomeHero.tsx
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { books } from "../data/books";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeHero = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
 
        {/* Hero Section */}
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
          }}
          className="w-full h-64 justify-center px-6 mt-2"
          imageStyle={{ borderRadius: 12 }}
        >
          <Text className="text-3xl font-bold text-white mb-2">
            Find Your Next <Text className="text-orange-700">Great Read</Text>
          </Text>
          <Text className="text-white mb-4">
            Discover thousands of books from fellow readers. Buy, sell, and
            share the stories that matter.
          </Text>
          <View className="flex-row space-x-4">
            <TouchableOpacity className="bg-orange-700 px-4 py-2 rounded-full">
              <Text className="text-white font-semibold">+ Sell Your Books</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white px-4 py-2 rounded-full">
              <Text className="text-gray-800 font-semibold">
                Browse Collection
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-6 px-4"
        >
          {["Fiction", "Self-help", "Romance", "History", "Sci-Fi", "Mystery"].map(
            (cat, i) => (
              <TouchableOpacity
                key={i}
                className="bg-orange-100 px-4 py-2 rounded-full mr-3"
              >
                <Text className="text-orange-700 font-medium">{cat}</Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>

        {/* Featured Books Slider */}
        <Text className="text-xl font-bold px-4 mt-6 mb-3">
          📚 Featured Books
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="w-40 bg-white rounded-xl shadow mx-2 p-3">
              <Image
                source={{ uri: item.cover }}
                className="w-full h-48 rounded-lg"
                resizeMode="cover"
              />
              <Text className="text-base font-semibold mt-2">{item.title}</Text>
              <Text className="text-sm text-gray-600">{item.author}</Text>
              <Text className="text-orange-700 font-bold mt-1">
                {item.price}
              </Text>
            </View>
          )}
        />

        {/* Recommended Section */}
        <Text className="text-xl font-bold px-4 mt-6 mb-3">
          ⭐ Recommended For You
        </Text>
        <View className="flex-wrap flex-row justify-between px-4">
          {books.map((item) => (
            <View
              key={item.id}
              className="w-[48%] bg-white rounded-xl shadow mb-4 p-3"
            >
              <Image
                source={{ uri: item.cover }}
                className="w-full h-48 rounded-lg"
                resizeMode="cover"
              />
              <Text className="text-base font-semibold mt-2">
                {item.title}
              </Text>
              <Text className="text-sm text-gray-600">{item.author}</Text>
              <Text className="text-orange-700 font-bold mt-1">
                {item.price}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeHero;
