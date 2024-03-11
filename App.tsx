import { StyleSheet, Text, View } from 'react-native';

import Login from './src/app/login/index';
import Register from './src/app/register/index';

export default function App() {
  return (
    <View className='flex-1'>
      <Register />
    </View>
  );
}