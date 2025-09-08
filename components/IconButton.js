import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function IconButton({iconLabel='icon',count=0,onPress}){
return (
<TouchableOpacity onPress={onPress} className="items-center">
<View className="w-9 h-9 rounded-full bg-slate-100 items-center justify-center">
<Text>{iconLabel[0].toUpperCase()}</Text>
</View>
{count>0 && <View className="absolute top-1 right-1 bg-red-500 px-1 rounded-full"><Text className="text-white text-xs">{count}</Text></View>}
</TouchableOpacity>
);
}