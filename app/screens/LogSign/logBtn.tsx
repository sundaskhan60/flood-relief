import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import { useRouter } from "expo-router";

interface LogBtnProps {
  onPress?: () => void;
}

const LogBtn: React.FC<LogBtnProps> = ({ onPress }) => {
  const router = useRouter();

  return (
    // "items-center" ensures the 90% width button stays centered
    <View className="w-full mt-4 items-center">
      <Button 
        title="Log In" 
        onPress={onPress ?? (() => router.push("/"))} 
      />
    </View>
  );
};

export default LogBtn;