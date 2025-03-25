import api from './api';

export const vocabularyService = {
  // Get all vocabularies
  getAllVocabularies: async () => {
    const response = await api.get('/vocabulary/');
    return response.data;
  },

  // Get a single vocabulary by ID
  getVocabulary: async (id) => {
    const response = await api.get(`/vocabulary/${id}/`);
    return response.data;
  },

  // Get user's vocabulary lists
  getUserLists: async () => {
    const response = await api.get('/vocabulary-lists/');
    return response.data;
  },

  // Create a new vocabulary list
  createList: async (listData) => {
    const response = await api.post('/vocabulary-lists/', listData);
    return response.data;
  },

  // Get a single vocabulary list
  getList: async (id) => {
    const response = await api.get(`/vocabulary-lists/${id}/`);
    return response.data;
  },

  // Update a vocabulary list
  updateList: async (id, listData) => {
    const response = await api.put(`/vocabulary-lists/${id}/`, listData);
    return response.data;
  },

  // Delete a vocabulary list
  deleteList: async (id) => {
    await api.delete(`/vocabulary-lists/${id}/`);
  },

  // Get user's vocabulary progress
  getUserVocabularies: async () => {
    const response = await api.get('/user-vocabulary/');
    return response.data;
  },

  // Update user's vocabulary progress
  updateUserVocabulary: async (id, data) => {
    const response = await api.put(`/user-vocabulary/${id}/`, data);
    return response.data;
  },

  // Add vocabulary to favorites
  addToFavorites: async (vocabularyId) => {
    const response = await api.post(`/vocabularies/${vocabularyId}/add_to_favorites/`);
    return response.data;
  },

  // Remove vocabulary from favorites
  removeFromFavorites: async (vocabularyId) => {
    const response = await api.post(`/vocabularies/${vocabularyId}/remove_from_favorites/`);
    return response.data;
  },

  // Update mastery level
  updateMasteryLevel: async (userVocabularyId, masteryLevel) => {
    const response = await api.post(`/user-vocabularies/${userVocabularyId}/update_mastery/`, {
      mastery_level: masteryLevel,
    });
    return response.data;
  },
}; 