import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import IconButton from './IconButton';


export default function Header({navigation,counts={bell:2,wishlist:1,cart:0}}){
return (
<View className="p-4 bg-white flex-row items-center justify-between">
<View className="flex-row items-center">
<Text className="text-xl font-bold">Lovable</Text>
</View>


<View className="flex-1 px-3">
<TextInput placeholder="Search books, authors..." className="border rounded-full px-3 py-2" />
</View>


<View className="flex-row items-center space-x-3">
<IconButton count={counts.bell} iconLabel="bell" onPress={()=>{}} />
<IconButton count={counts.wishlist} iconLabel="heart" onPress={()=>{}} />
<IconButton count={counts.cart} iconLabel="shopping-cart" onPress={()=>{}} />
</View>
</View>
);
}