// WelcomeConsentScreen.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FEATURES = [
  {
    title: "Profile Management",
    description: "Easily update and manage your personal information, settings, and preferences",
    icon: "person-circle-outline",
  },
  {
    title: "Secure Messaging",
    description: "Chat securely with friends and family in real-time.",
    icon: "chatbubble-ellipses-outline",
  },
  {
    title: "Activity Tracking",
    description: "Monitor your daily activities and track your progress over time.",
    icon: "bar-chart-outline",
  },
];

export default function WelcomeConsentScreen({ onContinue }: { onContinue: () => void }) {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mx-auto max-w-sm flex-1 justify-between gap-4 px-8 py-4">
        <View className="pt-12">
          <Text className="text-3xl font-bold text-center">Welcome to your</Text>
          <Text className="text-3xl font-bold text-center text-orange-700">Application</Text>
        </View>

        <View className="gap-8">
          {FEATURES.map((feature) => (
            <View key={feature.title} className="flex-row gap-4 items-center">
              <Ionicons name={feature.icon as any} size={38} color={isDark ? "white" : "orange"} />
              <View className="flex-1">
                <Text className="font-bold">{feature.title}</Text>
                <Text className="text-gray-600">{feature.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View className="gap-4 items-center">
          <Text className="text-center text-gray-500 text-sm">
            By pressing continue, you agree to our Terms of Service and Privacy Policy
          </Text>
          <TouchableOpacity
            className="bg-orange-500 px-6 py-3 rounded-full"
            onPress={onContinue} // Use callback instead of navigation
          >
            <Text className="text-white font-bold text-center">Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
