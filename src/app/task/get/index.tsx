import { View, Text } from "react-native";
import { styles } from '../style';
import Title from '../../../components/title/index';

export default function Task() {
  return (
    <View className="flex-1" style={styles.container} >
      <Title title="Tarefa" />

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>Projeto Mobile</Text>
        </View>
        <View className="px-4 py-6">
          <View style={styles.cardContent}>
            <Text>Descrição</Text>
            {/* <Tag label="Alta"/> */}
          </View>
          <Text className="mt-6 font-medium">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor.</Text>
          <View className="mt-2">
            <Text className="font-bold">Status</Text>
            <View className="bg-cyan-600 mt-1" style={{ borderWidth: 2, borderColor: "red"}}>
              <Text>Em andamento</Text>
            </View>
          </View>
          <View className="mt-2">
            <Text className="font-bold">Tags</Text>
            <View className="bg-cyan-600 mt-1" style={{ borderWidth: 2, borderColor: "red"}}>
              <Text>Projeto</Text>
            </View>
          </View>
        </View>
      </View>
    </View >
  )
}