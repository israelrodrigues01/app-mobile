import { View } from "react-native";

import Title from '../../components/title/index';
import Input from '../../components/input/index';
import Button from '../../components/button/index';
import Dropdown from "../../components/dropdown";

import { styles } from './style';

export default function Task() {
  return (
    <View className="flex-1" style={styles.container}>
      <Title title="Tarefa" />

      <View className="flex flex-col gap-y-5">
        <View>
          <Input placeholder="Nome" />
        </View>
        <View>
          <Input placeholder="Status" />
        </View>
        <View>
          {/* <Input placeholder="Prioridade" /> */}
          <Dropdown placeholder="Prioridade"/>
        </View>
        <View>
          <Input placeholder="Descrição" />
        </View>
      </View>

      <View className="mt-10">
        <Button text="Adicionar Tarefa" />
      </View>
    </View >
  );
}