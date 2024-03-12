import { View, Text, Image, Pressable } from "react-native";

import { styles } from './style';

interface input {
    path: string,
    icon: string,
    name: string
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
                    <Text style={styles.avatarEditText}>{props.icon}</Text>
                </Pressable>
            </View>
            <Text className="text-center mt-5" style={styles.avatarNick}>{props.name}</Text>
        </View>
    )
}