import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function SpeakingScreen({ navigation }) {
  const [selectedTopic, setSelectedTopic] = useState('all');

  const topics = [
    { id: 'all', name: 'Tất cả', icon: 'grid-view' },
    { id: 'daily', name: 'Giao tiếp', icon: 'chat' },
    { id: 'business', name: 'Công việc', icon: 'work' },
    { id: 'travel', name: 'Du lịch', icon: 'flight' },
    { id: 'social', name: 'Xã hội', icon: 'people' },
  ];

  const lessons = [
    {
      id: 1,
      title: 'Phát âm cơ bản',
      description: 'Học cách phát âm các âm cơ bản trong tiếng Anh',
      topic: 'daily',
      duration: '10 phút',
      difficulty: 'Dễ',
      image: require('../assets/speaking1.png'),
    },
    {
      id: 2,
      title: 'Thuyết trình',
      description: 'Kỹ năng thuyết trình trong môi trường công sở',
      topic: 'business',
      duration: '15 phút',
      difficulty: 'Trung bình',
      image: require('../assets/speaking2.png'),
    },
    {
      id: 3,
      title: 'Hỏi đường',
      description: 'Cách hỏi và chỉ đường khi du lịch',
      topic: 'travel',
      duration: '12 phút',
      difficulty: 'Dễ',
      image: require('../assets/speaking3.png'),
    },
  ];

  const filteredLessons = lessons.filter(lesson => 
    selectedTopic === 'all' || lesson.topic === selectedTopic
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
          <Text className="text-white text-xl font-bold">Luyện nói</Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Topic Selection */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mt-3 px-3"
        >
          {topics.map(topic => (
            <TouchableOpacity
              key={topic.id}
              onPress={() => setSelectedTopic(topic.id)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedTopic === topic.id 
                  ? 'bg-red-dark-5' 
                  : 'bg-white'
              }`}
            >
              <View className="flex-row items-center">
                <MaterialIcons 
                  name={topic.icon} 
                  size={20} 
                  color={selectedTopic === topic.id ? 'white' : 'red'} 
                />
                <Text 
                  className={`ml-2 font-semibold ${
                    selectedTopic === topic.id 
                      ? 'text-white' 
                      : 'text-gray-800'
                  }`}
                >
                  {topic.name}
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
              onPress={() => navigation.navigate('SpeakingLesson', { lesson })}
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
                
                {/* Difficulty Badge */}
                <View className="mt-3 flex-row items-center">
                  <View className="bg-gray-100 px-2 py-1 rounded-full">
                    <Text className="text-sm text-gray-600">{lesson.difficulty}</Text>
                  </View>
                  <TouchableOpacity 
                    className="ml-auto bg-red-dark-5 px-3 py-1 rounded-full flex-row items-center"
                    onPress={() => navigation.navigate('SpeakingPractice', { lesson })}
                  >
                    <MaterialIcons name="mic" size={16} color="white" />
                    <Text className="text-white text-sm ml-1">Luyện tập</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Practice Button */}
        <TouchableOpacity 
          className="bg-red-dark-5 mx-3 mb-6 mt-3 p-4 rounded-xl flex-row items-center justify-center"
          onPress={() => navigation.navigate('SpeakingPractice')}
        >
          <MaterialIcons name="record-voice-over" size={24} color="white" />
          <Text className="text-white text-lg font-semibold ml-2">Luyện tập nhanh</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
