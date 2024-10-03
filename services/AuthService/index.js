import apiClient from "..";
import AsyncStorage from '@react-native-async-storage/async-storage';

const authUrl = '/auth/api'

const Login = async (data) => {
  try {
    const response = await apiClient.post(`${authUrl}/login/`, data);
    
    if (response.data.code !== 200) {
      throw new Error(response.data.message);
    }
    await AsyncStorage.setItem('@auth_token', response.data.data);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export default {
  Login,
}