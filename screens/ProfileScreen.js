import { Text, View } from 'react-native';

const ProfileScreen = ({navigation, route}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className=" font-semibold text-green-600" >This is {route.params.name}'s profile</Text>
    </View>
  )
};

export default ProfileScreen;