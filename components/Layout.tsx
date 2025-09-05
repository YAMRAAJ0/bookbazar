// components/Layout.tsx
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      {children}
    </SafeAreaView>
  );
}
