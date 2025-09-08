import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { saveToken } from '../../utils/auth';


export default function LoginScreen({navigation}){
const [mobile,setMobile] = useState('');
const [password,setPassword] = useState('');


const handleLogin = async ()=>{
// TODO: replace with real API call
if(mobile.length>0){
await saveToken('demo-token', 60*60*24*7); // 7 days
navigation.replace('Home');
}
};


return (
<View className="flex-1 p-6 justify-center bg-white">
<Text className="text-2xl font-bold mb-6">Login</Text>
<TextInput placeholder="Mobile number" value={mobile} onChangeText={setMobile} className="border p-3 rounded mb-4" keyboardType="phone-pad" />
<TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry className="border p-3 rounded mb-6" />
<TouchableOpacity onPress={handleLogin} className="bg-blue-600 py-3 rounded">
<Text className="text-white text-center font-semibold">Login</Text>
</TouchableOpacity>


<TouchableOpacity onPress={()=>navigation.navigate('Register')} className="mt-4">
<Text className="text-center text-sm text-blue-600">Create an account</Text>
</TouchableOpacity>
</View>
);
}