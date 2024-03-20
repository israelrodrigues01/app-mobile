import { StyleSheet, Text, View } from 'react-native';

import Login from './src/app/login/index';
import Register from './src/app/register/index';
import Profile from './src/app/profile/index';
import Navigation from './src/components/navigation';
import Priority from './src/app/priority/index/index';
import State from './src/app/state/index/index';
import Tarefa from './src/app/task/get/index';

export default function App() {
  return (
    <View className='flex-1 relative'>
      <Profile />
      <Navigation />
    </View>
  );
}