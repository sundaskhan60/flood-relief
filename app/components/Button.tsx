import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      className={`w-[90%] py-4 rounded-2xl border border-white mt-4 ${
        disabled ? 'bg-white/5' : 'bg-white/20'
      }`}
    >
      <Text
        className={`text-center text-lg font-semibold ${
          disabled ? 'text-white/30' : 'text-white'
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
