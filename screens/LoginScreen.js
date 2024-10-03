import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from "../services/AuthService";

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('@auth_token');
      if (token) {
        navigation.replace('Home');
      }
    }
    checkLogin();
  }, [])

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    try {
      const response = await AuthService.Login({username, password})
      console.log(response);
      navigation.replace('Home');
    } catch (error) {
      alert(error.message);
    }
    
  }


  return (
    <View className="flex-1 items-center justify-center">
      <View className="bg-white w-[350] p-4 rounded-lg">
        <Text className="font-bold text-lg text-green-700">Đăng nhập</Text>
        <TextInput
          className="border border-gray-400 p-3 rounded-lg mt-4"
          placeholder="Tài khoản"
          onChangeText={setUsername}
        />
        <TextInput
          className="border border-gray-400 p-3 rounded-lg mt-3"
          placeholder="Mật khẩu"
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className=" bg-red-dark-2 p-3 rounded-lg mt-4 items-center"
          onPress={() => handleLogin()}
        >
          <Text className="text-white text-base font-semibold">Đăng nhập</Text>
        </TouchableOpacity>

        <View className="items-center mt-3">
          <Text onPress={() => alert("Mật khẩu cũng quên")} className="text-red-600">Quên mật khẩu</Text>
        </View>
        
      </View>
    </View>
  )
}