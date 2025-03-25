import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ListeningScreen({ navigation }) {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const levels = [
    { id: 'all', name: 'Tất cả', icon: 'grid-view' },
    { id: 'beginner', name: 'Sơ cấp', icon: 'star' },
    { id: 'intermediate', name: 'Trung cấp', icon: 'star-half' },
    { id: 'advanced', name: 'Nâng cao', icon: 'stars' },
  ];

  const lessons = [
    {
      id: 1,
      title: 'Chào hỏi cơ bản',
      description: 'Học cách chào hỏi và giới thiệu bản thân',
      level: 'beginner',
      duration: '5 phút',
      progress: 0,
      image: require('../assets/listening1.png'),
    },
    {
      id: 2,
      title: 'Đặt lịch hẹn',
      description: 'Cách đặt lịch và sắp xếp cuộc hẹn',
      level: 'intermediate',
      duration: '8 phút',
      progress: 60,
      image: require('../assets/listening2.png'),
    },
    {
      id: 3,
      title: 'Thảo luận công việc',
      description: 'Các cuộc họp và thảo luận trong môi trường công sở',
      level: 'advanced',
      duration: '12 phút',
      progress: 30,
      image: require('../assets/listening3.png'),
    },
  ];

  const filteredLessons = lessons.filter(lesson => 
    selectedLevel === 'all' || lesson.level === selectedLevel
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
          <Text className="text-white text-xl font-bold">Luyện nghe</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Level Selection */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mt-3 px-3"
        >
          {levels.map(level => (
            <TouchableOpacity
              key={level.id}
              onPress={() => setSelectedLevel(level.id)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedLevel === level.id 
                  ? 'bg-red-dark-5' 
                  : 'bg-white'
              }`}
            >
              <View className="flex-row items-center">
                <MaterialIcons 
                  name={level.icon} 
                  size={20} 
                  color={selectedLevel === level.id ? 'white' : 'red'} 
                />
                <Text 
                  className={`ml-2 font-semibold ${
                    selectedLevel === level.id 
                      ? 'text-white' 
                      : 'text-gray-800'
                  }`}
                >
                  {level.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Lessons List */}
        <View className="mt-3 px-3">
          {filteredLessons.map(lesson => (
            <TouchableOpacity
              key={lesson.id}
              className="bg-white rounded-xl mb-3 shadow-sm overflow-hidden"
              onPress={() => navigation.navigate('ListeningLesson', { lesson })}
            >
              <Image
                source={lesson.image}
                className="w-full h-40"
                resizeMode="cover"
              />
              <View className="p-3">
                <View className="flex-row justify-between items-start">
                  <View className="flex-1">
                    <Text className="text-lg font-bold text-gray-800">{lesson.title}</Text>
                    <Text className="text-gray-600 mt-1">{lesson.description}</Text>
                  </View>
                  <View className="bg-red-100 px-2 py-1 rounded-full">
                    <Text className="text-sm text-red-500">{lesson.duration}</Text>
                  </View>
                </View>
                
                {/* Progress Bar */}
                <View className="mt-3">
                  <View className="h-2 bg-gray-200 rounded-full">
                    <View 
                      className="h-2 bg-red-500 rounded-full"
                      style={{ width: `${lesson.progress}%` }}
                    />
                  </View>
                  <Text className="text-sm text-gray-500 mt-1">
                    Đã hoàn thành: {lesson.progress}%
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Practice Button */}
        <TouchableOpacity 
          className="bg-red-dark-5 mx-3 mb-6 mt-3 p-4 rounded-xl flex-row items-center justify-center"
          onPress={() => navigation.navigate('ListeningPractice')}
        >
          <MaterialIcons name="play-arrow" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Luyện tập nhanh</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
