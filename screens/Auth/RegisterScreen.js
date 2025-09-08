import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { saveToken } from '../../utils/auth';


export default function RegisterScreen({navigation}){
const [form,setForm] = useState({name:'',mobile:'',email:'',gender:'',categories:''});


const onChange = (k,v)=> setForm({...form,[k]:v});


const handleRegister = async ()=>{
// TODO: real API call
await saveToken('demo-token', 60*60*24*7);
navigation.replace('Home');
}


return (
<ScrollView contentContainerStyle={{flexGrow:1}} className="bg-white p-6">
<Text className="text-2xl font-bold mb-4">Register</Text>
<TextInput placeholder="Name" value={form.name} onChangeText={(v)=>onChange('name',v)} className="border p-3 rounded mb-3" />
<TextInput placeholder="Mobile" value={form.mobile} onChangeText={(v)=>onChange('mobile',v)} keyboardType="phone-pad" className="border p-3 rounded mb-3" />
<TextInput placeholder="Email" value={form.email} onChangeText={(v)=>onChange('email',v)} keyboardType="email-address" className="border p-3 rounded mb-3" />
<TextInput placeholder="Gender" value={form.gender} onChangeText={(v)=>onChange('gender',v)} className="border p-3 rounded mb-3" />
<TextInput placeholder="Book categories (comma separated)" value={form.categories} onChangeText={(v)=>onChange('categories',v)} className="border p-3 rounded mb-6" />


<TouchableOpacity onPress={handleRegister} className="bg-green-600 py-3 rounded">
<Text className="text-white text-center font-semibold">Create account</Text>
</TouchableOpacity>
</ScrollView>
);
}