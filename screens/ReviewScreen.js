import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ReviewScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả', icon: 'grid-view' },
    { id: 'vocabulary', name: 'Từ vựng', icon: 'book' },
    { id: 'grammar', name: 'Ngữ pháp', icon: 'school' },
    { id: 'pronunciation', name: 'Phát âm', icon: 'record-voice-over' },
    { id: 'conversation', name: 'Hội thoại', icon: 'chat' },
  ];

  const reviewItems = [
    {
      id: 1,
      title: 'Từ vựng cơ bản',
      category: 'vocabulary',
      progress: 75,
      totalItems: 100,
      lastReviewed: '2 giờ trước',
      nextReview: '1 ngày',
    },
    {
      id: 2,
      title: 'Thì hiện tại đơn',
      category: 'grammar',
      progress: 60,
      totalItems: 50,
      lastReviewed: '1 ngày trước',
      nextReview: '2 ngày',
    },
    {
      id: 3,
      title: 'Phát âm âm /th/',
      category: 'pronunciation',
      progress: 90,
      totalItems: 30,
      lastReviewed: '3 giờ trước',
      nextReview: '12 giờ',
    },
  ];

  const filteredItems = reviewItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

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
          <Text className="text-white text-xl font-bold">Ôn tập</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Category Selection */}
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

        {/* Review Items List */}
        <View className="mt-3 px-3">
          {filteredItems.map(item => (
            <TouchableOpacity
              key={item.id}
              className="bg-white rounded-xl mb-3 p-4 shadow-sm"
              onPress={() => navigation.navigate('ReviewDetail', { item })}
            >
              <View className="flex-row justify-between items-start">
                <View className="flex-1">
                  <Text className="text-lg font-bold text-gray-800">{item.title}</Text>
                  <View className="flex-row items-center mt-2">
                    <MaterialIcons name="schedule" size={16} color="#666" />
                    <Text className="text-gray-600 ml-1">Ôn lại sau: {item.nextReview}</Text>
                  </View>
                </View>
                <View className="bg-red-100 px-2 py-1 rounded-full">
                  <Text className="text-sm text-red-500">{item.progress}%</Text>
                </View>
              </View>

              {/* Progress Bar */}
              <View className="mt-3">
                <View className="h-2 bg-gray-200 rounded-full">
                  <View 
                    className="h-full bg-red-dark-5 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </View>
                <View className="flex-row justify-between mt-1">
                  <Text className="text-sm text-gray-600">
                    {item.progress}/{item.totalItems} bài học
                  </Text>
                  <Text className="text-sm text-gray-600">
                    Lần ôn cuối: {item.lastReviewed}
                  </Text>
                </View>
              </View>

              {/* Action Buttons */}
              <View className="flex-row mt-3">
                <TouchableOpacity 
                  className="flex-1 bg-red-dark-5 mr-2 py-2 rounded-lg flex-row items-center justify-center"
                  onPress={() => navigation.navigate('ReviewPractice', { item })}
                >
                  <MaterialIcons name="play-arrow" size={20} color="white" />
                  <Text className="text-white font-semibold ml-1">Ôn tập</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  className="flex-1 bg-gray-100 py-2 rounded-lg flex-row items-center justify-center"
                  onPress={() => navigation.navigate('ReviewStats', { item })}
                >
                  <MaterialIcons name="analytics" size={20} color="#666" />
                  <Text className="text-gray-600 font-semibold ml-1">Thống kê</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Review Button */}
        <TouchableOpacity 
          className="bg-red-dark-5 mx-3 mb-6 mt-3 p-4 rounded-xl flex-row items-center justify-center"
          onPress={() => navigation.navigate('QuickReview')}
        >
          <MaterialIcons name="refresh" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Ôn tập nhanh</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
