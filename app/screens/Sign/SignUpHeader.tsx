import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface SignUpHeaderProps {
  onClose?: () => void;
  title?: string; // Optional: making title a prop makes it more reusable
  subtitle?: string; // Optional: making subtitle a prop
}

const SignUpHeader: React.FC<SignUpHeaderProps> = ({ 
  onClose, 
  title = "Create Account", 
  subtitle = "Join Rapid Relief today" 
}) => {
  return (
    // Removed ml-6 so the parent container controls the alignment
    <View className="flex-row justify-between items-start mb-6 px-6 pt-4">
      <View className="flex-1 mr-4"> 
        <Text className="text-white text-3xl font-bold">{title}</Text>
        <Text className="text-white/80 text-base mt-1">{subtitle}</Text>
      </View>

      {/* Only render the button if onClose is provided */}
      {onClose && (
        <TouchableOpacity 
          onPress={onClose}
          // hitSlop makes the button easier to tap on real devices
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          activeOpacity={0.6}
        >
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SignUpHeader;