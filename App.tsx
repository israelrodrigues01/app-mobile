import { StyleSheet, Text, View } from 'react-native';

import Login from './src/app/login/index';
import Register from './src/app/register/index';
import Profile from './src/app/profile/index';
import Navigation from './src/components/navigation';

export default function App() {
  return (
    <View className='flex-1 relative'>
      <Profile />
      <Navigation />
    </View>
  );
}