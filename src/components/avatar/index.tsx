import { View, Text, Image, Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './style';

interface input {
    path: string,
    icon: string,
    name: string,
    sizeIcon?: number,
}

export default function Avatar(props: input) {
    return (
        <View>
            <View className="position-relative">
                <View style={styles.avatar}>
                    <Image source={{
                        uri: props.path,
                    }}
                        className="w-full h-full object-cover" />
                </View>
                <Pressable style={styles.avatarEdit}>
                    <View className="w-full h-full items-center justify-center">
                        <Text style={styles.avatarEditText}>
                            <FontAwesome5 name={props.icon} size={props.sizeIcon ? props.sizeIcon : 13} />
                        </Text>
                    </View>
                </Pressable>
            </View>
            <Text className="text-center mt-5" style={styles.avatarNick}>{props.name}</Text>
        </View>
    )
}