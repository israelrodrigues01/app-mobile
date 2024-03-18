import { Platform, View } from "react-native";

import Title from '../../../components/title/index';
import Input from '../../../components/input/index';
import Button from '../../../components/button/index';
import Dropdown from "../../../components/dropdown";

import { styles } from '../style';

export default function Task() {
  return (
    <View className="flex-1" style={styles.container}>
      <Title title="Tarefa" />

      <View className="flex flex-col gap-y-5">
        <View>
          <Input placeholder="Nome" />
        </View>
        <View style={{ zIndex: 3 }}>
          <Dropdown placeholder="Status" />
        </View>
        <View style={{ zIndex: 2 }}>
          <Dropdown placeholder="Prioridade" />
        </View>
        <View style={{ zIndex: 1 }}>
          <Dropdown placeholder="Tags" />
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