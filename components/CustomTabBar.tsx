// CustomTabBar.tsx
import React from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

const TabBarHeight = 70;

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={{ backgroundColor: "transparent" }}>
      {/* SVG Curve */}
      <View style={{ position: "absolute", bottom: 0, width: "100%", height: TabBarHeight }}>
        <Svg width="100%" height={TabBarHeight} viewBox="0 0 100 100">
          <Path
            d="M0 0 L35 0 C40 0 45 15 50 15 C55 15 60 0 65 0 L100 0 L100 100 L0 100 Z"
            fill="#f3f4f6" 
          />
        </Svg>
      </View>

        {/* Tab Buttons */}
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                height: 70,
                backgroundColor: "#f3f4f6", 
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}
            >

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({ type: "tabPress", target: route.key });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Floating middle button
          if (route.name === "Sell") {
            return (
              <TouchableOpacity
                key={route.name}
                onPress={onPress}
                style={{
                  top: -30, 
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: "#c2410c",
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  shadowOffset: { width: 0, height: 3 },
                  elevation: 6, 
                }}
              >
                <Ionicons name="add" size={32} color="white" />
              </TouchableOpacity>
            );
          }

          // Regular tab icons
          let iconName: keyof typeof Ionicons.glyphMap = "ellipse";
          if (route.name === "Home") iconName = "location-outline";
          if (route.name === "Browse") iconName = "search-outline";
          if (route.name === "Cart") iconName = "chatbubble-outline";
          if (route.name === "Profile") iconName = "settings-outline";

          return (
            <TouchableOpacity
              key={route.name}
              onPress={onPress}
              style={{ alignItems: "center", flex: 1 }}
            >
              <Ionicons
                name={iconName}
                size={24}
                color={isFocused ? "#c2410c" : "black"}
              />
              <Text style={{ color: isFocused ? "#c2410c" : "black", fontSize: 12 }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
