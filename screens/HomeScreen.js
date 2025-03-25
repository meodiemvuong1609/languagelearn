import React from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header Section */}
      <View className="bg-red-dark-5 p-3 pt-14">
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../assets/avatar.png')}
                className="w-10 h-10 rounded-full"
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View className="ml-2">
              <Text className="text-white text-lg font-bold">Xin chào!</Text>
              <Text className="text-white text-sm opacity-80">Học tiếng Anh thôi!</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Daily Progress Section */}
        <View className="bg-white mx-3 mt-3 rounded-xl p-3 shadow-sm">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-bold text-gray-800">Tiến độ hôm nay</Text>
            <Text className="text-red-500 font-semibold">75%</Text>
          </View>
          <View className="h-2 bg-gray-200 rounded-full">
            <View className="h-2 bg-red-500 rounded-full w-3/4"></View>
          </View>
          <View className="flex-row justify-between mt-2">
            <Text className="text-sm text-gray-500">Đã học: 30 phút</Text>
            <Text className="text-sm text-gray-500">Mục tiêu: 40 phút</Text>
          </View>
        </View>

        {/* Learning Streak */}
        <View className="flex-row justify-between mx-3 mt-3">
          <View className="bg-white p-3 rounded-xl w-[48%] shadow-sm">
            <View className="items-center">
              <View className="bg-red-100 p-2 rounded-full">
                <MaterialIcons name="local-fire-department" size={24} color="red" />
              </View>
              <Text className="text-gray-800 mt-2 font-semibold">Chuỗi học tập</Text>
              <Text className="text-2xl font-bold text-red-500">7</Text>
              <Text className="text-sm text-gray-500">ngày liên tiếp</Text>
            </View>
          </View>
          <View className="bg-white p-3 rounded-xl w-[48%] shadow-sm">
            <View className="items-center">
              <View className="bg-red-100 p-2 rounded-full">
                <MaterialIcons name="emoji-events" size={24} color="red" />
              </View>
              <Text className="text-gray-800 mt-2 font-semibold">Thành tích</Text>
              <Text className="text-2xl font-bold text-red-500">12</Text>
              <Text className="text-sm text-gray-500">huy hiệu</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="flex-row justify-between mx-3 mt-3">
          <TouchableOpacity className="bg-white p-3 rounded-xl w-[48%] shadow-sm">
            <View className="items-center">
              <View className="bg-red-100 p-2 rounded-full">
                <MaterialIcons name="library-books" size={24} color="red" />
              </View>
              <Text className="text-gray-800 mt-2 font-semibold">Từ vựng mới</Text>
              <Text className="text-sm text-gray-500">10 từ</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white p-3 rounded-xl w-[48%] shadow-sm">
            <View className="items-center">
              <View className="bg-red-100 p-2 rounded-full">
                <MaterialIcons name="record-voice-over" size={24} color="red" />
              </View>
              <Text className="text-gray-800 mt-2 font-semibold">Luyện nói</Text>
              <Text className="text-sm text-gray-500">5 phút</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Upcoming Lessons */}
        {/* <View className="bg-white mx-3 mt-3 rounded-xl p-3 shadow-sm">
          <Text className="text-lg font-bold text-gray-800 mb-3">Bài học tiếp theo</Text>
          <View className="space-y-2">
            <TouchableOpacity className="flex-row items-center p-2 bg-gray-50 rounded-lg">
              <View className="bg-red-100 p-2 rounded-lg">
                <MaterialIcons name="schedule" size={24} color="red" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-gray-800 font-semibold">Ngữ pháp cơ bản</Text>
                <Text className="text-sm text-gray-500">Thì hiện tại đơn</Text>
              </View>
              <Text className="text-sm text-gray-500">15:00</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center p-2 bg-gray-50 rounded-lg">
              <View className="bg-red-100 p-2 rounded-lg">
                <MaterialIcons name="schedule" size={24} color="red" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-gray-800 font-semibold">Luyện nghe</Text>
                <Text className="text-sm text-gray-500">Chủ đề: Giao tiếp</Text>
              </View>
              <Text className="text-sm text-gray-500">16:30</Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* Recent Achievements */}
        {/* <View className="bg-white mx-3 mt-3 rounded-xl p-3 shadow-sm">
          <Text className="text-lg font-bold text-gray-800 mb-3">Thành tích gần đây</Text>
          <View className="flex-row flex-wrap justify-between">
            <View className="items-center w-[48%] mb-3">
              <View className="bg-red-100 p-2 rounded-full">
                <MaterialIcons name="military-tech" size={24} color="red" />
              </View>
              <Text className="text-gray-800 text-sm mt-1">100 từ mới</Text>
            </View>
            <View className="items-center w-[48%] mb-3">
              <View className="bg-red-100 p-2 rounded-full">
                <MaterialIcons name="military-tech" size={24} color="red" />
              </View>
              <Text className="text-gray-800 text-sm mt-1">50 bài ngữ pháp</Text>
            </View>
            <View className="items-center w-[48%]">
              <View className="bg-red-100 p-2 rounded-full">
                <MaterialIcons name="military-tech" size={24} color="red" />
              </View>
              <Text className="text-gray-800 text-sm mt-1">30 phút luyện nói</Text>
            </View>
            <View className="items-center w-[48%]">
              <View className="bg-red-100 p-2 rounded-full">
                <MaterialIcons name="military-tech" size={24} color="red" />
              </View>
              <Text className="text-gray-800 text-sm mt-1">Chuỗi 7 ngày</Text>
            </View>
          </View>
        </View> */}

        {/* Main Categories */}
        <View className="mt-3 px-3">
          <Text className="text-xl font-bold text-gray-800 mb-3">Danh mục học tập</Text>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              className="bg-white w-[48%] p-3 rounded-xl mb-3 shadow-sm"
              onPress={() => navigation.navigate('Vocabulary')}
            >
              <View className="flex-row items-center">
                <View className="bg-red-100 p-2 rounded-lg">
                  <MaterialIcons name="library-books" size={24} color="red" />
                </View>
                <Text className="text-gray-800 text-base font-semibold ml-3">Từ vựng</Text>
              </View>
              <Text className="text-sm text-gray-500 mt-2">Học từ mới và ôn tập</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white w-[48%] p-3 rounded-xl mb-3 shadow-sm"
              onPress={() => navigation.navigate('Sentence')}
            >
              <View className="flex-row items-center">
                <View className="bg-red-100 p-2 rounded-lg">
                  <FontAwesome5 name="book" size={24} color="red" />
                </View>
                <Text className="text-gray-800 text-base font-semibold ml-3">Ngữ pháp</Text>
              </View>
              <Text className="text-sm text-gray-500 mt-2">Cấu trúc câu và quy tắc</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white w-[48%] p-3 rounded-xl mb-3 shadow-sm"
              onPress={() => navigation.navigate('Speaking')}
            >
              <View className="flex-row items-center">
                <View className="bg-red-100 p-2 rounded-lg">
                  <MaterialIcons name="record-voice-over" size={24} color="red" />
                </View>
                <Text className="text-gray-800 text-base font-semibold ml-3">Luyện nói</Text>
              </View>
              <Text className="text-sm text-gray-500 mt-2">Cải thiện phát âm</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white w-[48%] p-3 rounded-xl mb-3 shadow-sm"
              onPress={() => navigation.navigate('Listening')}
            >
              <View className="flex-row items-center">
                <View className="bg-red-100 p-2 rounded-lg">
                  <MaterialIcons name="hearing" size={24} color="red" />
                </View>
                <Text className="text-gray-800 text-base font-semibold ml-3">Luyện nghe</Text>
              </View>
              <Text className="text-sm text-gray-500 mt-2">Bài tập nghe hiểu</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white w-[48%] p-3 rounded-xl mb-3 shadow-sm"
              onPress={() => navigation.navigate('Review')}
            >
              <View className="flex-row items-center">
                <View className="bg-red-100 p-2 rounded-lg">
                  <FontAwesome5 name="redo" size={24} color="red" />
                </View>
                <Text className="text-gray-800 text-base font-semibold ml-3">Ôn tập</Text>
              </View>
              <Text className="text-sm text-gray-500 mt-2">Củng cố kiến thức</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white w-[48%] p-3 rounded-xl mb-3 shadow-sm"
              onPress={() => navigation.navigate('Test')}
            >
              <View className="flex-row items-center">
                <View className="bg-red-100 p-2 rounded-lg">
                  <FontAwesome5 name="clipboard-check" size={24} color="red" />
                </View>
                <Text className="text-gray-800 text-base font-semibold ml-3">Kiểm tra</Text>
              </View>
              <Text className="text-sm text-gray-500 mt-2">Đánh giá trình độ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
