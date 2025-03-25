import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, TextInput } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function SentenceScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả', icon: 'grid-view' },
    { id: 'greetings', name: 'Chào hỏi', icon: 'handshake' },
    { id: 'questions', name: 'Câu hỏi', icon: 'help' },
    { id: 'requests', name: 'Yêu cầu', icon: 'request-quote' },
    { id: 'expressions', name: 'Thành ngữ', icon: 'emoji-emotions' },
  ];

  const sentences = [
    {
      id: 1,
      english: 'How are you today?',
      vietnamese: 'Hôm nay bạn thế nào?',
      category: 'greetings',
      pattern: 'How + be + subject + time?',
      notes: 'Cách hỏi thăm thân mật',
    },
    {
      id: 2,
      english: 'Could you help me with this?',
      vietnamese: 'Bạn có thể giúp tôi việc này không?',
      category: 'requests',
      pattern: 'Could + you + verb + object?',
      notes: 'Cách yêu cầu lịch sự',
    },
    {
      id: 3,
      english: 'What time is the meeting?',
      vietnamese: 'Cuộc họp mấy giờ?',
      category: 'questions',
      pattern: 'What time + be + subject?',
      notes: 'Cách hỏi thời gian',
    },
    {
      id: 4,
      english: 'It\'s raining cats and dogs',
      vietnamese: 'Trời mưa rất to',
      category: 'expressions',
      pattern: 'It\'s + raining + cats and dogs',
      notes: 'Thành ngữ chỉ mưa to',
    },
    {
      id: 5,
      english: 'Nice to meet you!',
      vietnamese: 'Rất vui được gặp bạn!',
      category: 'greetings',
      pattern: 'Nice + to + meet + you',
      notes: 'Cách chào khi gặp lần đầu',
    },
  ];

  const filteredSentences = sentences.filter(sentence => {
    const matchesSearch = sentence.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         sentence.vietnamese.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || sentence.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View className="bg-red-dark-5 p-3 pt-14">
        <View className="flex-row items-center">
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="mr-3"
          >
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-xl font-bold">Mẫu câu</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Search Bar */}
        <View className="mx-3 mt-3">
          <View className="flex-row items-center bg-white rounded-xl p-2 shadow-sm">
            <MaterialIcons name="search" size={24} color="gray" />
            <TextInput
              placeholder="Tìm kiếm mẫu câu..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="flex-1 ml-2 text-gray-800"
            />
          </View>
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mt-3 px-3"
        >
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              onPress={() => setSelectedCategory(category.id)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedCategory === category.id 
                  ? 'bg-red-dark-5' 
                  : 'bg-white'
              }`}
            >
              <View className="flex-row items-center">
                <MaterialIcons 
                  name={category.icon} 
                  size={20} 
                  color={selectedCategory === category.id ? 'white' : 'red'} 
                />
                <Text 
                  className={`ml-2 font-semibold ${
                    selectedCategory === category.id 
                      ? 'text-white' 
                      : 'text-gray-800'
                  }`}
                >
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Sentence List */}
        <View className="mt-3 px-3">
          {filteredSentences.map(sentence => (
            <TouchableOpacity
              key={sentence.id}
              className="bg-white p-3 rounded-xl mb-3 shadow-sm"
              onPress={() => navigation.navigate('SentenceDetail', { sentence })}
            >
              <View className="flex-row justify-between items-start">
                <View className="flex-1">
                  <Text className="text-lg font-bold text-gray-800">{sentence.english}</Text>
                  <Text className="text-gray-600 mt-1">{sentence.vietnamese}</Text>
                  <View className="mt-2 flex-row items-center">
                    <MaterialIcons name="format-quote" size={16} color="gray" />
                    <Text className="text-sm text-gray-500 ml-1">{sentence.pattern}</Text>
                  </View>
                  <View className="mt-2 flex-row items-center">
                    <MaterialIcons name="info" size={16} color="gray" />
                    <Text className="text-sm text-gray-500 ml-1">{sentence.notes}</Text>
                  </View>
                </View>
                <View className="bg-red-100 p-2 rounded-lg">
                  <MaterialIcons name="volume-up" size={24} color="red" />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Practice Button */}
        <TouchableOpacity 
          className="bg-red-dark-5 mx-3 mb-6 mt-3 p-4 rounded-xl flex-row items-center justify-center"
          onPress={() => navigation.navigate('SentencePractice')}
        >
          <MaterialIcons name="play-arrow" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Luyện tập</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
