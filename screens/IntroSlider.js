import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function IntroSlider({navigation}){
return (
<View className="flex-1 items-center justify-center p-6 bg-gradient-to-b from-white to-slate-100">
<Text className="text-3xl font-bold mb-4">Welcome to Lovable</Text>
<Text className="text-center mb-8">Buy and sell books with a few taps. Personalized recommendations coming soon.</Text>
<TouchableOpacity onPress={()=>navigation.replace('Login')} className="px-6 py-3 bg-blue-600 rounded-full">
<Text className="text-white font-semibold">Get Started</Text>
</TouchableOpacity>
</View>
);
}