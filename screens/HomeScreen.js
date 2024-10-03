import { Image, View, Text, TouchableOpacity, StatusBar} from 'react-native';

export default function HomeScreen ({navigation}) {
  return (
    <View className=" ">
      
      <View className=" h-[140px]">
        <Image source={require('../assets/bg-homepage.png')} className="h-[200]"/>
        
      </View>
      <View className=" bg-gray-300 h-screen p-3 mt-16">
        <Text className=" text-xl font-bold ">
          Danh mục chức năng
        </Text>
        <View className=" flex-row justify-between">
          <TouchableOpacity
            className=" bg-red-dark-2 w-[180] p-5 rounded-lg mt-4 items-center"
            onPress={() => navigation.navigate('Vocabulary')}
          >
            <Text className="text-white text-base font-semibold">Từ vựng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" bg-red-dark-2 w-[180] p-5 rounded-lg mt-4 items-center"
            onPress={() => navigation.navigate('Vocabulary')}
          >
            <Text className="text-white text-base font-semibold">Ngữ pháp</Text>
          </TouchableOpacity>
          
          
        </View>
        <View className=" flex-row justify-between">
          <TouchableOpacity
            className=" bg-red-dark-2 w-[180] p-5  rounded-lg mt-4 items-center"
            onPress={() => navigation.navigate('Vocabulary')}
          >
            <Text className="text-white text-base font-semibold">Luyện nói</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" bg-red-dark-2 w-[180] p-5  rounded-lg mt-4 items-center"
            onPress={() => navigation.navigate('Vocabulary')}
          >
            <Text className="text-white text-base font-semibold">Luyện nghe</Text>
          </TouchableOpacity>
          
          
        </View>
        <View className=" flex-row justify-between">
          <TouchableOpacity
            className=" bg-red-dark-2 w-[180] p-5 rounded-lg mt-4 items-center"
            onPress={() => navigation.navigate('Vocabulary')}
          >
            <Text className="text-white text-base font-semibold">Ôn tập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" bg-red-dark-2 w-[180] p-5 rounded-lg mt-4 items-center"
            onPress={() => navigation.navigate('Vocabulary')}
          >
            <Text className="text-white text-base font-semibold">Kiểm tra</Text>
          </TouchableOpacity>
          
          
        </View>

      </View>
    
    </View>
  );
};
