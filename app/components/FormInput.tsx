import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, View } from "react-native";

type IconType = "ion" | "material";

interface FormInputProps {
  label: string;
  placeholder: string;
  iconName: any;
  iconType?: IconType;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "phone-pad" | "numeric";
  value?: string;           // Made optional with ?
  onChangeText?: (text: string) => void; // Made optional with ?
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  iconName,
  iconType = "ion",
  secureTextEntry = false,
  keyboardType = "default",
  value,
  onChangeText,
}) => {
  const Icon = iconType === "material" ? MaterialIcons : Ionicons;

  return (
    <View className="mb-5">
      <View className="flex-row items-center mb-2">
        <Icon name={iconName} size={18} color="white" />
        <Text className="text-white ml-2 text-base font-medium">
          {label}
        </Text>
      </View>

      <TextInput
        className="bg-[#eef2fb] rounded-xl px-4 py-3 text-gray-800 text-base" // py-3 reduces height
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormInput;