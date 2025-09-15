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

const authorsList = ["J.K. Rowling", "George R.R. Martin", "Chetan Bhagat", "Paulo Coelho", "Agatha Christie"];
const publishersList = ["Penguin", "HarperCollins", "Bloomsbury", "Oxford Press", "Macmillan"];
const languages = ["English", "Hindi", "French", "Spanish", "German"];

const Category = ({ selectedCategory, setSelectedCategory, setFilters }: any) => {
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Romance",
    "Sci-Fi",
    "History",
    "Thriller",
    "Self-Help",
    "Philosophy",
  ];

  // Local states for modal
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [filteredAuthors, setFilteredAuthors] = useState(authorsList);
  const [filteredPublishers, setFilteredPublishers] = useState(publishersList);
  const [showAuthorDropdown, setShowAuthorDropdown] = useState(false);
  const [showPublisherDropdown, setShowPublisherDropdown] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [language, setLanguage] = useState("");

  // Search filters
  const handleAuthorSearch = (text: string) => {
    setAuthor(text);
    setShowAuthorDropdown(true);
    setFilteredAuthors(authorsList.filter((a) => a.toLowerCase().includes(text.toLowerCase())));
  };
  const handlePublisherSearch = (text: string) => {
    setPublisher(text);
    setShowPublisherDropdown(true);
    setFilteredPublishers(publishersList.filter((p) => p.toLowerCase().includes(text.toLowerCase())));
  };

  const applyFilters = () => {
    setFilters({ author, minPrice, maxPrice, rating, language, publisher });
    setShowFilters(false);
  };

  return (
    <View className="mt-6 flex-row items-center px-4">
      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-1">
        {categories.map((cat, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full mr-3 ${
              selectedCategory === cat ? "bg-orange-600" : "bg-orange-100"
            }`}
          >
            <Text
              className={`font-medium ${
                selectedCategory === cat ? "text-white" : "text-orange-700"
              }`}
            >
              {cat}
            </Text>
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
              placeholderTextColor="black"
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
                placeholderTextColor="black"
                value={minPrice}
                onChangeText={setMinPrice}
                keyboardType="numeric"
                className="bg-gray-100 px-4 py-2 rounded-lg mb-2 w-[48%]"
              />
              <TextInput
                placeholder="Max Price"
                placeholderTextColor="black"
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
              placeholderTextColor="black"
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
