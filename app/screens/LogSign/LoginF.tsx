import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FormInput from "../../components/FormInput";

const LogF = () => {
  return (
    // Background color synchronized with your WelcomeText and HomeButton
    <View className="flex-1 bg-[#0A46FF] p-6 justify-center">

      <FormInput
        label="Phone Number or Email"
        placeholder="Enter phone number or email"
        iconName="phone-in-talk"
        iconType="material"
      />

      <FormInput
        label="Password"
        placeholder="Enter your password"
        iconName="lock-closed-outline"
        secureTextEntry
      />

      {/* Forgot Password aligns to the right as per your design */}
      <TouchableOpacity className="self-end mt-1">
        <Text className="text-white underline text-sm font-medium">
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* LOGIN BUTTON - Transparent with White Border to match your global Button style */}
      <TouchableOpacity
        activeOpacity={0.7}
        // w-full to match input field width
        // border border-white and bg-transparent for the look you want
        className="w-full py-4 rounded-2xl border border-white items-center justify-center bg-transparent"
        onPress={() => console.log("Login Pressed")}
      >
        <Text className="text-white text-lg font-semibold">
          Log In
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default LogF;