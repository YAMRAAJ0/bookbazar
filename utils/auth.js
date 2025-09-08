import AsyncStorage from '@react-native-async-storage/async-storage';


const TOKEN_KEY = 'lovable_token';
const EXP_KEY = 'lovable_token_exp';


export async function saveToken(token, ttlSeconds=3600){
const expiry = Date.now() + ttlSeconds*1000;
await AsyncStorage.setItem(TOKEN_KEY, token);
await AsyncStorage.setItem(EXP_KEY, expiry.toString());
}


export async function getToken(){
const token = await AsyncStorage.getItem(TOKEN_KEY);
const exp = await AsyncStorage.getItem(EXP_KEY);
if(!token || !exp) return null;
if(Date.now() > parseInt(exp,10)){
await AsyncStorage.removeItem(TOKEN_KEY);
await AsyncStorage.removeItem(EXP_KEY);
return null;
}
return token;
}


export async function logout(){
await AsyncStorage.removeItem(TOKEN_KEY);
await AsyncStorage.removeItem(EXP_KEY);
}