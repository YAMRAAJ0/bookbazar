import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

const books = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "₹399",
    image: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    price: "₹499",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: "3",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: "₹299",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
];

const SellScreen = () => {
  return (
    <View className="flex-1 bg-white px-4 py-6">
      {/* Header */}
      <Text className="text-2xl font-bold text-orange-700 mb-4">📚 My Books for Sale</Text>

      {/* Empty State */}
      {books.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-xl font-bold">❤️ Sell</Text>
          <Text className="text-gray-600 mt-2">You have no books listed yet</Text>
        </View>
      ) : (
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="flex-row items-center bg-gray-50 p-4 rounded-xl mb-4 shadow-sm">
              {/* Book Image */}
              <Image
                source={{ uri: item.image }}
                className="w-20 h-28 rounded-lg"
                resizeMode="cover"
              />

              {/* Details */}
              <View className="flex-1 ml-4">
                <Text className="text-lg font-semibold text-gray-900">{item.title}</Text>
                <Text className="text-sm text-gray-500">by {item.author}</Text>
                <Text className="text-orange-600 font-bold mt-1">{item.price}</Text>

                {/* Actions */}
                <View className="flex-row mt-2">
                  <TouchableOpacity className="bg-orange-100 px-3 py-1 rounded-lg mr-2">
                    <Text className="text-orange-600 text-sm font-medium">Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-red-100 px-3 py-1 rounded-lg">
                    <Text className="text-red-600 text-sm font-medium">Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}

      {/* Add Book Button */}
      <TouchableOpacity className="bg-orange-600 py-4 rounded-xl mt-6 items-center">
        <Text className="text-white text-lg font-semibold">+ Add New Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SellScreen;
