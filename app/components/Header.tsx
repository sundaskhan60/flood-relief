import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  return (
    <LinearGradient
      colors={['#33B3FF', '#33B3FF']} // bottom now matches HeroImage top
      className="h-64 pt-12 pb-20 w-full items-center"
    >
      <Text className="text-white text-4xl font-bold">RAPID</Text>
      <Text className="text-white text-2xl font-light mt-1.5 tracking-wider">RELIEF</Text>

      {/* White bottom border */}
      <View className="mt-4 w-24 h-1 bg-white rounded" />
    </LinearGradient>
  );
};

export default Header;
