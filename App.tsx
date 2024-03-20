import { StyleSheet, Text, View } from 'react-native';
import Profile from './src/app/profile/index';
import { createStackNavigator } from "@react-navigation/stack"
import Navigation from './src/components/navigation';
import Priority from './src/app/priority/index/index';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View className='flex-1 relative'>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Priority' component={Priority} />
        </Stack.Navigator>
        <Navigation />
      </NavigationContainer>
    </View>
  );
}