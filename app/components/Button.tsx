import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Button = () => {
  return (
    <View className="flex-1 w-full bg-[#0A46FF] items-center justify-end pb-10">

      {/* Login Button */}
      <TouchableOpacity
        className="w-[90%] py-4 rounded-2xl border border-white"
        activeOpacity={0.7}
      >
        <Text className="text-white text-center text-lg font-semibold">
          Login
        </Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity
        className="w-[90%] py-4 rounded-2xl border border-white mt-4"
        activeOpacity={0.7}
      >
        <Text className="text-white text-center text-lg font-semibold">
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Terms & Privacy */}
      <Text className="text-white/70 text-center text-xs mt-6 mb-4">
        By continuing, you agree to our{" "}
        <Text className="underline">Terms & Privacy Policy</Text>
      </Text>

    </View>
  );
};

export default Button;
