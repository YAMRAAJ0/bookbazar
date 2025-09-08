// Category.tsx
import { useState } from "react";
import { Text, TouchableOpacity, ScrollView, View } from "react-native";

const Category = () => {
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "Fiction",
    "Self-help",
    "Romance",
    "History",
    "Sci-Fi",
    "Mystery",
  ];

  const filters = [
    "Author",
    "Price",
    "Rating",
    "Category",
    "Year",
    "Language",
    "Publisher",
    "Format",
  ];

  return (
    <View>
      {/* Category Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-6 px-4"
      >
        {categories.map((cat, i) => (
          <TouchableOpacity
            key={i}
            className="bg-orange-100 px-4 py-2 rounded-full mr-3"
          >
            <Text className="text-orange-700 font-medium">{cat}</Text>
          </TouchableOpacity>
        ))}

        {/* Filter Button */}
        <TouchableOpacity
          onPress={() => setShowFilters(!showFilters)}
          className="bg-gray-200 px-4 py-2 rounded-full"
        >
          <Text className="text-gray-700 font-medium">⚙️ Filter</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Filter Tags */}
      {showFilters && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-3 px-4"
        >
          {filters.map((filter, i) => (
            <TouchableOpacity
              key={i}
              className="bg-white border border-gray-300 px-4 py-2 rounded-full mr-3"
            >
              <Text className="text-gray-700">{filter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Category;
