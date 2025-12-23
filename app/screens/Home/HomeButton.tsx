// app/components/HomeButton.tsx
import React from "react";
import { View, Text } from "react-native";
import Button from "./../../components/Button";

interface HomeButtonProps {
  onLogin?: () => void;
  onSignUp?: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({ onLogin, onSignUp }) => {
  return (
    <View className="flex-1 w-full bg-[#1A4BCC] items-center justify-end pb-10">
      {/* Login Button */}
      <Button title="Login" onPress={onLogin} />

      {/* Sign Up Button */}
      <Button title="Sign Up" onPress={onSignUp} />

      {/* Terms & Privacy */}
      <Text className="text-white/70 text-center text-xs mt-6 mb-4">
        By continuing, you agree to our <Text className="underline">Terms & Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default HomeButton;
