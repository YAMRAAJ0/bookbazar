import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Modal,
  TextInput,
  FlatList,
} from "react-native";

// ⭐ Sample Data
const authorsList = [
  "J.K. Rowling",
  "George R.R. Martin",
  "Chetan Bhagat",
  "Paulo Coelho",
  "Agatha Christie",
];
const publishersList = [
  "Penguin",
  "HarperCollins",
  "Bloomsbury",
  "Oxford Press",
  "Macmillan",
];
const languages = ["English", "Hindi", "French", "Spanish", "German"];

const Category = () => {
  const [showFilters, setShowFilters] = useState(false);

  // categories
  const categories = ["Fiction", "Self-help", "Romance", "History", "Sci-Fi", "Mystery"];

  // filter states
  const [author, setAuthor] = useState("");
  const [filteredAuthors, setFilteredAuthors] = useState(authorsList);
  const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);

  const [publisher, setPublisher] = useState("");
  const [filteredPublishers, setFilteredPublishers] = useState(publishersList);
  const [showPublisherDropdown, setShowPublisherDropdown] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [language, setLanguage] = useState("");

  // 🔍 Author search
  const handleAuthorSearch = (text) => {
    setAuthor(text);
    setShowAuthorDropdown(true);
    const results = authorsList.filter((a) =>
      a.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredAuthors(results);
  };

  // 🔍 Publisher search
  const handlePublisherSearch = (text) => {
    setPublisher(text);
    setShowPublisherDropdown(true);
    const results = publishersList.filter((p) =>
      p.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPublishers(results);
  };

  const applyFilters = () => {
    const filters = { author, minPrice, maxPrice, rating, language, publisher };
    console.log("Applied Filters:", filters);
    setShowFilters(false);
  };

  return (
    <View className="mt-6 flex-row items-center px-4">
      {/* Scrollable Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-1">
        {categories.map((cat, i) => (
          <TouchableOpacity key={i} className="bg-orange-100 px-4 py-2 rounded-full mr-3">
            <Text className="text-orange-700 font-medium">{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Filter Button */}
      <TouchableOpacity
        onPress={() => setShowFilters(true)}
        className="bg-gray-200 px-4 py-2 rounded-full ml-2"
      >
        <Text className="text-gray-700 font-medium">⚙️ Filter</Text>
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal visible={showFilters} transparent animationType="slide">
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="bg-white w-11/12 rounded-xl p-6">
            {/* Close */}
            <TouchableOpacity
              onPress={() => setShowFilters(false)}
              className="self-end bg-gray-200 px-3 py-1 rounded-full mb-4"
            >
              <Text className="text-gray-700 font-bold text-lg">✕</Text>
            </TouchableOpacity>

            <Text className="text-xl font-bold mb-4">Filter Options</Text>

            {/* 🔍 Author Search + Dropdown */}
            <TextInput
              placeholder="Search Author"
              value={author}
              onChangeText={handleAuthorSearch}
              className="bg-gray-100 px-4 py-2 rounded-lg mb-2"
            />
            {showAuthorDropdown && author.length > 0 && (
              <FlatList
                data={filteredAuthors}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setAuthor(item);
                      setShowAuthorDropdown(false); // ✅ close dropdown
                    }}
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                style={{ maxHeight: 100, backgroundColor: "#f9f9f9" }}
              />
            )}

            {/* 💰 Price Range */}
            <View className="flex-row justify-between">
              <TextInput
                placeholder="Min Price"
                value={minPrice}
                onChangeText={setMinPrice}
                keyboardType="numeric"
                className="bg-gray-100 px-4 py-2 rounded-lg mb-2 w-[48%]"
              />
              <TextInput
                placeholder="Max Price"
                value={maxPrice}
                onChangeText={setMaxPrice}
                keyboardType="numeric"
                className="bg-gray-100 px-4 py-2 rounded-lg mb-2 w-[48%]"
              />
            </View>

{/* ⭐ Star Rating */}
<View className="flex-row mb-3">
  {[1, 2, 3, 4, 5].map((star) => (
    <TouchableOpacity key={star} onPress={() => setRating(star)}>
      <Text
        style={{
          fontSize: 30,
          marginHorizontal: 2,
          color: rating >= star ? "gold" : "gray", 
        }}
      >
        {rating >= star ? "★" : "☆"} 
      </Text>
    </TouchableOpacity>
  ))}
</View>



            {/* 🌐 Language Dropdown */}
            <ScrollView horizontal className="flex-row mb-3">
              {languages.map((lang, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setLanguage(lang)}
                  className={`px-4 py-2 mr-2 rounded-full ${
                    language === lang ? "bg-purple-600" : "bg-gray-200"
                  }`}
                >
                  <Text className={`${language === lang ? "text-white" : "text-gray-700"}`}>
                    {lang}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* 🔍 Publisher Search + Dropdown */}
            <TextInput
              placeholder="Search Publisher"
              value={publisher}
              onChangeText={handlePublisherSearch}
              className="bg-gray-100 px-4 py-2 rounded-lg mb-2"
            />
            {showPublisherDropdown && publisher.length > 0 && (
              <FlatList
                data={filteredPublishers}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setPublisher(item);
                      setShowPublisherDropdown(false); // ✅ close dropdown
                    }}
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                style={{ maxHeight: 100, backgroundColor: "#f9f9f9" }}
              />
            )}

            {/* ✅ Apply Filters */}
            <TouchableOpacity
              onPress={applyFilters}
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
