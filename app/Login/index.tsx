import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../screens/Home/Header';
import HeroImage from '../screens/Home/HeroImage';
import WelcomeText from '../screens/Home/WelcomeText';
import LoginF from '../screens/LogSign/LoginF';

export default function LoginScreen() {
  return (
    // flex-grow ensures the background color fills the screen even if content is short
    <ScrollView 
      className="flex-1 bg-[#1a49ce]" 
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Header />
      
      <HeroImage />
      
      <WelcomeText
        title="Welcome Back"
        subtitle="Sign in to continue"
        className="py-4" // This now correctly overrides the default py-10
      />
      
      <LoginF />
    </ScrollView>
  );
}