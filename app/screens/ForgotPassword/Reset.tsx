import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";

// 1. Better typing than 'any'
interface ResetProps {
  navigation: {
    goBack: () => void;
    navigate: (screen: string) => void;
  };
}

const Reset: React.FC<ResetProps> = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOTP = () => {
    // You'll likely want to trim whitespace here in the future
    if (phoneNumber.trim().length >= 10) {
      console.log("Sending OTP to:", phoneNumber);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1A4BCC]">
      <View className="flex-1 px-8 pt-3">
        
        {/* Back Button */}
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          className="flex-row items-center mb-8"
          // Best practice: Add hitSlop for easier tapping
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text className="text-white ml-2 text-lg">Back</Text>
        </TouchableOpacity>

        <Text className="text-white text-3xl font-bold mb-2">Reset Password</Text>
        <Text className="text-white/80 text-base mb-8">
          Enter your phone number to receive OTP
        </Text>

        <FormInput
          label="Phone Number"
          placeholder="+92 300 1234567"
          iconName="call-outline"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        {/* If your Button component already has mt-4 and centering logic, 
           you can remove the wrapping View.
        */}
        <View className="items-center">
          <Button 
            title="Send OTP" 
            onPress={handleSendOTP} 
            disabled={phoneNumber.length < 10} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reset;