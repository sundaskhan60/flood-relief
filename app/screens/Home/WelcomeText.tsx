import React from "react";
import { Text, View } from "react-native";

interface WelcomeTextProps {
  title?: string;
  subtitle?: string;
  className?: string; // Defined in the interface
}

const WelcomeText: React.FC<WelcomeTextProps> = ({
  title = "Welcome Aboard",
  subtitle = "Get started with your journey",
  className = "py-10", // Default value if no className is passed
}) => {
  return (
    // We use the className variable inside the string
    <View className={`w-full items-center justify-center bg-[#1A4BCC] ${className}`}>
      <Text className="text-white text-4xl font-light mb-2">
        {title}
      </Text>
      <Text className="text-white text-sm font-light">
        {subtitle}
      </Text>
    </View>
  );
};

export default WelcomeText;