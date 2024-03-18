import { Text, View } from "react-native";

import { styles } from './style';

interface button {
    text: string,
    color?: string
}

export default function StateButton(props: button) {
    return (
        <View>
            <Text style={[styles.content, { backgroundColor: props.color ? props.color : "#ddd" }]}>{props.text}</Text>
        </View>
    )
}