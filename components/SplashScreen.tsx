// SplashScreen.tsx
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Main"); // go to main screen
    }, 2000); // 2 seconds splash

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 150, height: 150 }}
      />
      <Text style={styles.text}>BookMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: "#f97316",
  },
});
