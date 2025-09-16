import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useCart } from "../../context/CartContext"; // ✅ Import context

const TabBarHeight = 70;

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { cartCount } = useCart(); 

  return (
    <View style={{ backgroundColor: "transparent" }}>

      <View style={{ position: "absolute", bottom: 0, width: "100%", height: TabBarHeight }}>
        <Svg width="100%" height={TabBarHeight} viewBox="0 0 100 100">
          <Path
            d="M0 0 L35 0 C40 0 45 15 50 15 C55 15 60 0 65 0 L100 0 L100 100 L0 100 Z"
            fill="#f3f4f6"
          />
        </Svg>
      </View>

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
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const label =
            typeof options.tabBarLabel === "function"
              ? options.tabBarLabel({
                  focused: isFocused,
                  color: isFocused ? "#c2410c" : "black",
                  position: "below-icon",
                  children: route.name,
                })
              : options.tabBarLabel ?? route.name;

          if (route.name === "Sell") {
            return (
              <TouchableOpacity
                key={route.name}
                onPress={onPress}
                activeOpacity={1}
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

          let iconName: keyof typeof Ionicons.glyphMap = "ellipse";
          if (route.name === "Home") iconName = "home-outline";
          if (route.name === "Browse") iconName = "book-outline";
          if (route.name === "Cart") iconName = "cart-outline";
          if (route.name === "Profile") iconName = "person-outline";

          return (
            <TouchableOpacity
              key={route.name}
              onPress={onPress}
              style={{ alignItems: "center", flex: 1 }}
              activeOpacity={1}
            >
              <View>
                <Ionicons
                  name={iconName}
                  size={24}
                  color={isFocused ? "#c2410c" : "black"}
                />
                {route.name === "Cart" && cartCount > 0 && (
                  <View
                    style={{
                      position: "absolute",
                      top: -5,
                      right: -10,
                      backgroundColor: "red",
                      borderRadius: 8,
                      width: 16,
                      height: 16,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
                      {cartCount}
                    </Text>
                  </View>
                )}
              </View>
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
