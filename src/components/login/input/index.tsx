import { TextInput } from "react-native";

import { styles } from './style';
import { colors } from '../../../styles/colors';

interface login {
    placeholder: string,

}

export default function InputLogin(props: login) {
    return <TextInput style={styles.content} placeholder={props.placeholder} placeholderTextColor={colors.white}></TextInput>
}