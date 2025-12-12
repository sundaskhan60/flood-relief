// app/index.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './components/Button';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import WelcomeText from './components/WelcomeText';
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <Header />
        <HeroImage />
        <WelcomeText />
        <Button />
      </View>
    </SafeAreaView>
  );
}
