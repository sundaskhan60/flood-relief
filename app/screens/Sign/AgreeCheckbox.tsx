import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AgreeCheckboxProps {
  agree: boolean;
  onToggle: () => void;
}

const AgreeCheckbox: React.FC<AgreeCheckboxProps> = ({ agree, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle} className="flex-row items-center mt-2 mb-6">
      <View className={`w-5 h-5 rounded border border-white items-center justify-center mr-3 ${agree ? 'bg-white' : 'bg-transparent'}`}>
        {agree && <Ionicons name="checkmark" size={14} color="#0081C9" />}
      </View>
      <Text className="text-white/90 text-xs">
        I agree to the <Text className="font-bold underline">Terms of Service</Text> and <Text className="font-bold underline">Privacy Policy</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default AgreeCheckbox;
