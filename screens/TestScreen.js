import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TestScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState('all');

  const testTypes = [
    { id: 'all', name: 'Tất cả', icon: 'grid-view' },
    { id: 'vocabulary', name: 'Từ vựng', icon: 'book' },
    { id: 'grammar', name: 'Ngữ pháp', icon: 'school' },
    { id: 'listening', name: 'Nghe', icon: 'headphones' },
    { id: 'speaking', name: 'Nói', icon: 'record-voice-over' },
  ];

  const tests = [
    {
      id: 1,
      title: 'Kiểm tra từ vựng cơ bản',
      type: 'vocabulary',
      duration: '15 phút',
      questions: 20,
      difficulty: 'Dễ',
      image: require('../assets/test1.png'),
      lastScore: 85,
      attempts: 3,
    },
    {
      id: 2,
      title: 'Kiểm tra ngữ pháp trung cấp',
      type: 'grammar',
      duration: '20 phút',
      questions: 25,
      difficulty: 'Trung bình',
      image: require('../assets/test2.png'),
      lastScore: 75,
      attempts: 2,
    },
    {
      id: 3,
      title: 'Kiểm tra kỹ năng nghe',
      type: 'listening',
      duration: '25 phút',
      questions: 30,
      difficulty: 'Khó',
      image: require('../assets/test3.png'),
      lastScore: 90,
      attempts: 1,
    },
  ];

  const filteredTests = tests.filter(test => 
    selectedType === 'all' || test.type === selectedType
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
          <Text className="text-white text-xl font-bold">Kiểm tra</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Test Type Selection */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mt-3 px-3"
        >
          {testTypes.map(type => (
            <TouchableOpacity
              key={type.id}
              onPress={() => setSelectedType(type.id)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedType === type.id 
                  ? 'bg-red-dark-5' 
                  : 'bg-white'
              }`}
            >
              <View className="flex-row items-center">
                <MaterialIcons 
                  name={type.icon} 
                  size={20} 
                  color={selectedType === type.id ? 'white' : 'red'} 
                />
                <Text 
                  className={`ml-2 font-semibold ${
                    selectedType === type.id 
                      ? 'text-white' 
                      : 'text-gray-800'
                  }`}
                >
                  {type.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Tests List */}
        <View className="mt-3 px-3">
          {filteredTests.map(test => (
            <TouchableOpacity
              key={test.id}
              className="bg-white rounded-xl mb-3 shadow-sm overflow-hidden"
              onPress={() => navigation.navigate('TestDetail', { test })}
            >
              <Image
                source={test.image}
                className="w-full h-40"
                resizeMode="cover"
              />
              <View className="p-4">
                <View className="flex-row justify-between items-start">
                  <View className="flex-1">
                    <Text className="text-lg font-bold text-gray-800">{test.title}</Text>
                    <View className="flex-row items-center mt-2">
                      <MaterialIcons name="schedule" size={16} color="#666" />
                      <Text className="text-gray-600 ml-1">{test.duration}</Text>
                      <MaterialIcons name="help-outline" size={16} color="#666" className="ml-3" />
                      <Text className="text-gray-600 ml-1">{test.questions} câu hỏi</Text>
                    </View>
                  </View>
                  <View className="bg-red-100 px-2 py-1 rounded-full">
                    <Text className="text-sm text-red-500">{test.difficulty}</Text>
                  </View>
                </View>

                {/* Test Stats */}
                <View className="mt-3 flex-row justify-between items-center">
                  <View>
                    <Text className="text-sm text-gray-600">Điểm số cuối cùng</Text>
                    <Text className="text-lg font-bold text-red-dark-5">{test.lastScore}%</Text>
                  </View>
                  <View>
                    <Text className="text-sm text-gray-600">Số lần làm</Text>
                    <Text className="text-lg font-bold text-gray-800">{test.attempts}</Text>
                  </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row mt-4">
                  <TouchableOpacity 
                    className="flex-1 bg-red-dark-5 mr-2 py-3 rounded-lg flex-row items-center justify-center"
                    onPress={() => navigation.navigate('TestStart', { test })}
                  >
                    <MaterialIcons name="play-arrow" size={20} color="white" />
                    <Text className="text-white font-semibold ml-1">Bắt đầu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    className="flex-1 bg-gray-100 py-3 rounded-lg flex-row items-center justify-center"
                    onPress={() => navigation.navigate('TestHistory', { test })}
                  >
                    <MaterialIcons name="history" size={20} color="#666" />
                    <Text className="text-gray-600 font-semibold ml-1">Lịch sử</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Test Button */}
        <TouchableOpacity 
          className="bg-red-dark-5 mx-3 mb-6 mt-3 p-4 rounded-xl flex-row items-center justify-center"
          onPress={() => navigation.navigate('QuickTest')}
        >
          <MaterialIcons name="quiz" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Kiểm tra nhanh</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
