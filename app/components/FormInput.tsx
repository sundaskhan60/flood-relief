import React from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

type IconType = "ion" | "material";

interface FormInputProps {
  label: string;
  placeholder: string;
  iconName: any;
  iconType?: IconType;
  secureTextEntry?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  iconName,
  iconType = "ion",
  secureTextEntry = false,
}) => {
  const Icon =
    iconType === "material" ? MaterialIcons : Ionicons;

  return (
    <View className="mb-5">
      <View className="flex-row items-center mb-2">
        <Icon name={iconName} size={18} color="white" />
        <Text className="text-white ml-2 text-base font-medium">
          {label}
        </Text>
      </View>

      <TextInput
        className="bg-[#eef2fb] rounded-xl px-4 py-4 text-gray-800 text-base"
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default FormInput;
