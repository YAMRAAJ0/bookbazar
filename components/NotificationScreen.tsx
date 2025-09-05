import { View, Text } from "react-native";

const NotificationScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold">🔔 Notifications</Text>
      <Text className="text-gray-600 mt-2">No new notifications</Text>
    </View>
  );
};

export default NotificationScreen;
