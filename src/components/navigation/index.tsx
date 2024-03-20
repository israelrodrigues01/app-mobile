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
  { id: 1, icon: "folder", routeName: "Space" },
  { id: 2, icon: "calendar-check", routeName: "example2" },
  { id: 4, icon: "list-ul", routeName: "Priority" },
  { id: 5, icon: "user", routeName: "Profile" }
];

// interface IconProps {
//   icon?: string;
//   sizeIcon?: number;
// }

export default function Navigation() {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: NavigationItem }) => {
    const handlePress = () => {
      navigation.navigate(item.routeName as never);
    };

    return (
      <TouchableOpacity onPress={handlePress}>
        <FontAwesome5 name={item.icon} size={24} color="white" />
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
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
