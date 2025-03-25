import AsyncStorage from '@react-native-async-storage/async-storage';

export const tokenService = {
  setToken: async (token) => {
    try {
      await AsyncStorage.setItem('auth_token', token);
      return true;
    } catch (error) {
      console.error('Error setting token:', error);
      return false;
    }
  },

  getToken: async () => {
    try {
      return await AsyncStorage.getItem('auth_token');
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  },

  removeToken: async () => {
    try {
      await AsyncStorage.removeItem('auth_token');
      return true;
    } catch (error) {
      console.error('Error removing token:', error);
      return false;
    }
  },

  hasToken: async () => {
    try {
      const token = await AsyncStorage.getItem('auth_token');
      return !!token;
    } catch (error) {
      console.error('Error checking token:', error);
      return false;
    }
  },
}; 