import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./style";

interface NavigationItem {
  id: number;
  icon: string;
  routeName: string;
}

const data: NavigationItem[] = [
  { id: 1, icon: "example1", routeName: "example1" },
  { id: 2, icon: "example2", routeName: "example2" },
  { id: 3, icon: "example3", routeName: "example3" },
  { id: 4, icon: "example4", routeName: "example4" }
];

// interface IconProps {
//   icon?: string;
//   sizeIcon?: number;
// }

export default function Navigation() {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: NavigationItem }) => {
    // const handlePress = () => {
    //   navigation.navigate(item.routeName);
    // };

    return (
      <TouchableOpacity>
        <FontAwesome5 name={item.icon} size={26} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
