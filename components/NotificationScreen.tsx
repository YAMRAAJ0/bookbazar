// screens/NotificationScreen.tsx
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNotifications } from "../context/NotificationContext";

const NotificationScreen = () => {
  const { notifications, clearNotifications } = useNotifications();

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-4 mt-6 mb-4">
        <Text className="text-2xl font-bold">🔔 Notifications</Text>
        {notifications.length > 0 && (
          <TouchableOpacity
            onPress={clearNotifications}
            className="bg-red-100 px-3 py-1 rounded-lg"
          >
            <Text className="text-red-600 font-semibold">Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      {notifications.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-gray-600">No new notifications</Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="bg-gray-100 mx-4 mb-3 p-3 rounded-lg">
              <Text className="font-medium">{item.message}</Text>
              <Text className="text-xs text-gray-500 mt-1">{item.timestamp}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default NotificationScreen;
