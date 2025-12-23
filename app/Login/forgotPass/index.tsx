
import React from "react";
import { View, Text } from "react-native";
import Header from "@/app/screens/Home/Header";
import HeroImage from "../../screens/Home/HeroImage";
import Reset from "../../screens/ForgotPassword/Reset"
const ForgotPassword = () => {
  return (
    <View className="flex-1 bg-white">
    <Header />
    <HeroImage />
   <Reset/>
    </View>
  );
};

export default ForgotPassword;
