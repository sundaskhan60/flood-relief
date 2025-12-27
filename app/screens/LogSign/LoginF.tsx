import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FormInput from "../../components/FormInput";

const LogF = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#1A4BCC] p-6 justify-center">

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

      {/* Forgot Password */}
      <TouchableOpacity
        className="self-end mt-1"
        onPress={() => router.push("/Login/forgotPass")}
      >
        <Text className="text-white underline text-sm font-medium">
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* Log In Button */}
<TouchableOpacity
  activeOpacity={0.7}
  className="w-full py-4 rounded-2xl border border-white items-center justify-center bg-transparent mt-6"
  onPress={() => router.push("/drawer/dashboard")} // Updated Route
>
  <Text className="text-white text-lg font-semibold">
    Log In
  </Text>
</TouchableOpacity>

    </View>
  );
};

export default LogF;
