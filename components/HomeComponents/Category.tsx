// Category.tsx
import { useState } from "react";
import { Text, TouchableOpacity, ScrollView, View, Modal } from "react-native";

const Category = () => {
  const [showFilters, setShowFilters] = useState(false);

  const categories = ["Fiction", "Self-help", "Romance", "History", "Sci-Fi", "Mystery"];
  const filters = ["Author", "Price", "Rating", "Category", "Year", "Language", "Publisher", "Format"];

  return (
    <View className="mt-6 flex-row items-center px-4">
      {/* Scrollable Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        className="flex-1"
      >
        {categories.map((cat, i) => (
          <TouchableOpacity
            key={i}
            className="bg-orange-100 px-4 py-2 rounded-full mr-3"
          >
            <Text className="text-orange-700 font-medium">{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Filter Button fixed */}
      <TouchableOpacity
        onPress={() => setShowFilters(true)}
        className="bg-gray-200 px-4 py-2 rounded-full ml-2"
      >
        <Text className="text-gray-700 font-medium">⚙️ Filter</Text>
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal
        visible={showFilters}
        transparent
        animationType="slide"
        onRequestClose={() => setShowFilters(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="bg-white w-11/12 rounded-xl p-6">
            {/* Close Button */}
            <TouchableOpacity
              onPress={() => setShowFilters(false)}
              className="self-end bg-gray-200 px-3 py-1 rounded-full mb-4"
            >
              <Text className="text-gray-700 font-bold text-lg">✕</Text>
            </TouchableOpacity>

            <Text className="text-xl font-bold mb-4">Filter Options</Text>

            {filters.map((filter, i) => (
              <TouchableOpacity
                key={i}
                className="bg-gray-100 px-4 py-2 rounded-full mb-2"
              >
                <Text className="text-gray-700">{filter}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              onPress={() => setShowFilters(false)}
              className="bg-purple-600 py-3 rounded-xl mt-4 items-center"
            >
              <Text className="text-white font-semibold">Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Category;
