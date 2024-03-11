import { StyleSheet, Text, View } from 'react-native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

export default function App() {

  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!loaded) {
    return "Carregando..."
  }

  return (
    <View>
      <Text>Bem-vindo(a) ao projeto!</Text>
    </View>
  );
}