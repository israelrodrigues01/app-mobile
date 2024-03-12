import { Pressable, Text } from "react-native";

import { styles } from './style';

interface button {
    text: string,
}

export default function Button(props: button) {
    return (
        <Pressable style={styles.button} >
            <Text style={styles.buttonText} className="text-center">{props.text}</Text>
        </Pressable>
    )
}