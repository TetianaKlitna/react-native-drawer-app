import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screen/WelcomeScreen';
import UserScreen from './screen/UserScreen';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="Welcome" component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Page',
            headerStyle: { backgroundColor: '#55075eff' },
            headerTintColor: 'white',
            drawerActiveBackgroundColor: '#55075eff',
            drawerActiveTintColor: 'white',
            drawerStyle: { backgroundColor: '#734d78ff' },
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            )
          }} />
        <Drawer.Screen name="User" component={UserScreen}
          options={{
            drawerLabel: 'User Page',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            )
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
