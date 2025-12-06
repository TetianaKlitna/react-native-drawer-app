import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screen/WelcomeScreen';
import UserScreen from './screen/UserScreen';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Welcome"
      screenOptions={{
        headerStyle: { backgroundColor: "#6b6b6cff"},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
        <BottomTab.Screen name="Welcome" component={WelcomeScreen} 
        options={{
            title: 'Welcome Page',
            tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color={color} />),
          }}/>
        <BottomTab.Screen name="User" component={UserScreen} 
        options={{
           title: 'User Page',
           tabBarIcon: ({ color, size }) => (<Ionicons name="person" size={size} color={color} />),
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
