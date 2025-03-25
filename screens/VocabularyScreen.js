import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { vocabularyService } from '../services/vocabularyService';

const VocabularyScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vocabularies, setVocabularies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadVocabularies();
  }, []);

  const loadVocabularies = async () => {
    try {
      setLoading(true);
      const data = await vocabularyService.getAllVocabularies();
      setVocabularies(data);
    } catch (err) {
      setError('Failed to load vocabularies');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'Tất cả', icon: 'grid-view' },
    { id: 'daily', name: 'Giao tiếp', icon: 'chat' },
    { id: 'business', name: 'Công việc', icon: 'work' },
    { id: 'academic', name: 'Học thuật', icon: 'school' },
    { id: 'travel', name: 'Du lịch', icon: 'flight' },
  ];

  const filteredVocabularies = vocabularies.filter(vocab => {
    const matchesSearch = vocab.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         vocab.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           vocab.topics.some(topic => topic.name.toLowerCase() === selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const renderVocabularyItem = ({ item }) => (
    <TouchableOpacity
      className="bg-white p-3 rounded-xl mb-3 shadow-sm"
      onPress={() => navigation.navigate('WordDetail', { word: item })}
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-800">{item.word}</Text>
          <Text className="text-gray-600 mt-1">{item.meaning}</Text>
          {item.phonetic && (
            <Text className="text-sm text-gray-500 mt-2 italic">{item.phonetic}</Text>
          )}
          {item.example_sentence && (
            <Text className="text-sm text-gray-500 mt-2">{item.example_sentence}</Text>
          )}
        </View>
        {item.audio && (
          <View className="bg-red-100 p-2 rounded-lg">
            <MaterialIcons name="volume-up" size={24} color="red" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-red-dark-5 p-3 pt-14">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="mr-3"
          >
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Từ vựng</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View className="mx-3 mt-3">
        <View className="flex-row items-center bg-white rounded-xl p-2 shadow-sm">
          <MaterialIcons name="search" size={24} color="gray" />
          <TextInput
            placeholder="Tìm kiếm từ vựng..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 ml-2 text-gray-800"
          />
        </View>
      </View>

      {/* Categories */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(item.id)}
            className={`mr-3 px-4 py-2 rounded-full ${
              selectedCategory === item.id ? 'bg-red-dark-5' : 'bg-white'
            }`}
          >
            <View className="flex-row items-center">
              <MaterialIcons
                name={item.icon}
                size={20}
                color={selectedCategory === item.id ? 'white' : 'red'}
              />
              <Text
                className={`ml-2 font-semibold ${
                  selectedCategory === item.id ? 'text-white' : 'text-gray-800'
                }`}
              >
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        className="mt-3 px-3"
      />

      {/* Vocabulary List */}
      <FlatList
        data={filteredVocabularies}
        renderItem={renderVocabularyItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="p-3"
      />

      {/* Add New Word Button */}
      <TouchableOpacity
        className="bg-red-dark-5 mx-3 mb-6 mt-3 p-4 rounded-xl flex-row items-center justify-center"
        onPress={() => navigation.navigate('AddWord')}
      >
        <MaterialIcons name="add" size={24} color="white" />
        <Text className="text-white text-lg font-semibold ml-2">Thêm từ mới</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VocabularyScreen;
