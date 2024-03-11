import { Pressable, Text } from "react-native";

import { styles } from './style';

interface login {
    color: string,
    label: string
}

export default function ButtonLogin(props: login) {
    return (
        <Pressable style={[styles.content, props.color == 'white' ? styles.content.white : styles.content.blue]}>
            <Text style={props.color == 'white' ? styles.textBlue : styles.textWhite} className="text-center">{props.label}</Text>
        </Pressable>
    )
}