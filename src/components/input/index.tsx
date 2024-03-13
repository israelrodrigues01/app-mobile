import { TextInput } from "react-native";

import { styles } from './style';

interface input {
    placeholder: string,
    onChangeText: (text: string) => void;
}

export default function Input({ onChangeText, ...props }: input) {
    return (
        <TextInput style={styles.input} placeholderTextColor="#7F7B8E" onChangeText={onChangeText} {...props} ></TextInput>
    )
}