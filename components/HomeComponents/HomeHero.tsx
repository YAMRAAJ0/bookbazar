import { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const images = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  "https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6",
  "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const navigation = useNavigation();

  // ✅ Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  // ✅ Update index on manual swipe
  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full h-64 mt-2 overflow-hidden">
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <ImageBackground
                source={{ uri: item }}
                style={{ width, height: 256 }} // force width to screen
              />
            )}
            getItemLayout={(_, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
            onMomentumScrollEnd={onMomentumScrollEnd} // ✅ manual swipe support
          />

          {/* Dark Overlay */}
          <View className="absolute inset-0 bg-black/50" />

          {/* Overlay Content */}
          <View className="absolute inset-0 justify-center px-6">
            <Text className="text-3xl font-bold text-white mb-2">
              Find Your Next <Text className="text-orange-400">Great Read</Text>
            </Text>
            <Text className="text-white mb-4">
              Discover thousands of books from fellow readers. Buy, sell, and
              share the stories that matter.
            </Text>
            <View className="flex-row space-x-4">
              <TouchableOpacity
                onPress={() => navigation.navigate("Sell" as never)}
                className="bg-orange-700 px-4 py-2 rounded-full"
              >
                <Text className="text-white font-semibold">+ Sell Your Books</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Donate" as never)}
                className="bg-white px-4 py-2 rounded-full"
              >
                <Text className="text-gray-800 font-semibold">Donate Your Books</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Pagination Dots */}
          <View className="absolute bottom-3 self-center flex-row space-x-2">
            {images.map((_, index) => (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 3,
                  backgroundColor:
                    index === currentIndex ? "#C2410C" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeHero;
