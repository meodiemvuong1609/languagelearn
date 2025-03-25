import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import VocabularyScreen from './screens/VocabularyScreen';
import SentenceScreen from './screens/SentenceScreen';
import ListeningScreen from './screens/ListeningScreen';
import SpeakingScreen from './screens/SpeakingScreen';
import ReviewScreen from './screens/ReviewScreen';
import TestScreen from './screens/TestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Auth Stack */}
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}  
        />
        <Stack.Screen 
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}  
        />

        {/* Main App Stack */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Vocabulary" 
          component={VocabularyScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Sentence" 
          component={SentenceScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Listening" 
          component={ListeningScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Speaking" 
          component={SpeakingScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Review" 
          component={ReviewScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Test" 
          component={TestScreen} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
