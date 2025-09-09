import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  name: string;
  mobile: string;
  email: string;
  gender: string;
  password: string;
};

const USERS_KEY = "users_data";

// Save a new user
export const saveUser = async (user: User) => {
  try {
    const usersJSON = await AsyncStorage.getItem(USERS_KEY);
    const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];
    users.push(user);
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (e) {
    console.error("Error saving user", e);
  }
};

// Get all users
export const getUsers = async (): Promise<User[]> => {
  try {
    const usersJSON = await AsyncStorage.getItem(USERS_KEY);
    return usersJSON ? JSON.parse(usersJSON) : [];
  } catch (e) {
    console.error("Error reading users", e);
    return [];
  }
};
