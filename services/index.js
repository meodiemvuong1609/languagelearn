import axios from 'axios';
import { SERVER_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
const apiClient = axios.create({
  baseURL: SERVER_URL, // Replace with your API base URL
  timeout: 1000,
});

// You can also set up request and response interceptors here
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('@auth_token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  error => {
    // Handle the request error
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => {
    // Perform actions with response data
    return response;
  },
  error => {
    // Handle the response error
    return Promise.reject(error);
  }
);

export default apiClient;