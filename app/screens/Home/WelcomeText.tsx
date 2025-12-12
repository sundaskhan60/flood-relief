import React from "react";
import { View, Text } from "react-native";

const WelcomeText = () => {
  return (
    <View className="w-full py-10 items-center justify-center bg-[#0A46FF]">
      <Text className="text-white text-4xl font-light mb-2">
        Welcome Aboard
      </Text>
      <Text className="text-white text-sm font-light">
        Get started with your journey
      </Text>
    </View>
  );
};

export default WelcomeText;
