import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const WelcomeText = () => {
  return (
    <LinearGradient
      colors={["#0040B0", "#33B3FF"]} // same as HeroImage
      className="w-full py-20 items-center justify-center"
    >
      <Text className="text-white text-5xl font-light mb-2">
        Welcome Aboard
      </Text>
      <Text className="text-white text-sm font-light">
        Get started with your journey
      </Text>
    </LinearGradient>
  );
};

export default WelcomeText;
