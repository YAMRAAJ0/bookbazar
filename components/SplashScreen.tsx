// SplashScreen.tsx
import  { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from "react-native";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 100); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1512820790803-83ca734da794" }} // books background
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>📚 MyBookApp</Text>
        <ActivityIndicator size="large" color="#FFA500" style={styles.loader} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent overlay
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  loader: {
    marginTop: 20,
  },
});
