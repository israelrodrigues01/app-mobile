import { StyleSheet, Text, View } from 'react-native';

import Login from './src/app/login/index';
import Register from './src/app/register/index';
import Profile from './src/app/profile/index';
import Priority from './src/app/priority/index/index';
import Tags from './src/app/tags/index/index';

export default function App() {
  return (  
    <View className='flex-1'>
      <Tags />
    </View>
  );
}