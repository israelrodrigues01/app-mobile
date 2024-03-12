import { TextInput } from "react-native";

import { styles } from './style';

interface input {
    placeholder: string,
}

export default function Input(props: input) {
    return (
        <TextInput style={styles.input} placeholder={props.placeholder} placeholderTextColor="#7F7B8E"></TextInput>
    )
}