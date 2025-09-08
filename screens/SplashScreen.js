import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';


export default function SplashScreen(){
return (
<View className="flex-1 items-center justify-center bg-white">
<StatusBar barStyle="dark-content" />
<Image source={{uri:'https://picsum.photos/200/200'}} style={{width:140,height:140,borderRadius:20}}/>
<Text className="mt-6 text-2xl font-bold">Lovable Books</Text>
<Text className="mt-2 text-sm">A cozy place to buy & sell books</Text>
</View>
);
}