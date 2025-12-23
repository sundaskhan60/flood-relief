import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import AgreeCheckbox from "../../screens/Sign/AgreeCheckbox";
import SignUpHeader from "../../screens/Sign/SignUpHeader";

const SignUpF = () => {
  const [agree, setAgree] = useState(false);
  
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    emergency: "",
    address: "",
    cnic: ""
  });

  const handleInput = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#1A4BCC]" edges={['top']}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <SignUpHeader onClose={() => console.log("Close pressed")} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }} // Space at the very bottom of the screen
        >
          <View className="px-6">
            <FormInput 
              label="Full Name" 
              placeholder="Enter your full name" 
              iconName="person-outline"
              value={form.fullName}
              onChangeText={(txt) => handleInput("fullName", txt)}
            />
            
            <FormInput 
              label="Email Address" 
              placeholder="your.email@example.com" 
              iconName="mail-outline" 
              keyboardType="email-address" 
              value={form.email}
              onChangeText={(txt) => handleInput("email", txt)}
            />

            <FormInput 
              label="Phone Number" 
              placeholder="+92 300 1234567" 
              iconName="call-outline" 
              keyboardType="phone-pad" 
              value={form.phone}
              onChangeText={(txt) => handleInput("phone", txt)}
            />

            <FormInput 
              label="Password" 
              placeholder="Create a strong password" 
              iconName="lock-closed-outline" 
              secureTextEntry={true} 
              value={form.password}
              onChangeText={(txt) => handleInput("password", txt)}
            />

            <View className="bg-white/10 border border-white/20 rounded-2xl p-4 mb-5">
              <FormInput 
                label="Emergency Contact" 
                placeholder="+92 300 7654321" 
                iconName="shield-outline" 
                keyboardType="phone-pad" 
                value={form.emergency}
                onChangeText={(txt) => handleInput("emergency", txt)}
              />
            </View>

            <FormInput 
              label="Home Address" 
              placeholder="Enter your address" 
              iconName="location-outline" 
              value={form.address}
              onChangeText={(txt) => handleInput("address", txt)}
            />

            <FormInput 
              label="CNIC" 
              placeholder="12345-1234567-1" 
              iconName="card-outline" 
              keyboardType="numeric" 
              value={form.cnic}
              onChangeText={(txt) => handleInput("cnic", txt)}
            />

            {/* Checkbox */}
            <View className="mb-6">
              <AgreeCheckbox agree={agree} onToggle={() => setAgree(!agree)} />
            </View>

            {/* BUTTON MOVED INSIDE SCROLLVIEW 
                This removes the gap completely. 
            */}
            <View className="items-center w-full mb-10">
              <Button 
                title="Continue" 
                disabled={!agree} 
                onPress={() => console.log("Form Data:", form)} 
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpF;