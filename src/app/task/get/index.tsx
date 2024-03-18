import { View, Text } from "react-native";
import { styles } from '../style';

import Title from '../../../components/title/index';
import StateButton from "../../../components/stateButton";

export default function Task() {
  return (
    <View className="flex-1" style={styles.container} >
      <Title title="Tarefa" />

      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Projeto Mobile</Text>
        </View>
        <View className="px-4 py-6" style={styles.content}>
          <View style={styles.info}>
            <Text className="font-medium">Descrição</Text>
            <StateButton text="Alta" color="#FB6565"/>
          </View>
          <Text className="mt-5 font-medium">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor.</Text>
          <View className="mt-3">
            <View className="mt-2">
              <Text className="font-medium mb-1">Status</Text>
              <StateButton text="Em andamento" color="#5595E0"/>
            </View>
            <View className="mt-2">
              <Text className="font-medium mb-1">Tags</Text>
              <StateButton text="Projeto" color="#5595E0"/>
            </View>
          </View>
        </View>
      </View>
    </View >
  )
}