import api from './api';
import { tokenService } from './tokenService';

export const authService = {
  // Login user
  login: async (username, password) => {
    try {
      const response = await api.post('/auth/login/', {
        username,
        password,
      });
      
      if (response.data.code === 200 && response.data.data) {
        await tokenService.setToken(response.data.data);
        return response.data;
      }
      throw new Error(response.data.message || 'Login failed');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      await tokenService.removeToken();
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  // Check if user is logged in
  isAuthenticated: async () => {
    return await tokenService.hasToken();
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/api/me/');
      return response.data;
    } catch (error) {
      console.error('Get user error:', error);
      throw error;
    }
  },

  // Register new user
  register: async (userData) => {
    try {
      const response = await api.post('/api-auth/register/', userData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
}; 