import { StyleSheet, Text, View } from 'react-native';

import Login from './src/app/login/index';
import Register from './src/app/register/index';
import Profile from './src/app/profile/index';
import Tarefa from './src/app/task/get/index';

export default function App() {
  return (
    <View className='flex-1'>
      <Tarefa />
    </View>
  );
}