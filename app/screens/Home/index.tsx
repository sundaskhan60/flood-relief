import { useRouter } from "expo-router";
import React from 'react';
import { ScrollView } from 'react-native';
import Header from './Header';
import HeroImage from './HeroImage';
import HomeButton from './HomeButton';
import WelcomeText from './WelcomeText';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white">
      <Header />
      <HeroImage />
      <WelcomeText />

      <HomeButton
        onLogin={() => router.push("/Login")} 
      />
    </ScrollView>
  );
};

export default HomeScreen;
