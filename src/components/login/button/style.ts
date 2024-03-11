import { StyleSheet } from "react-native";

import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
    content: {
        borderWidth: .5,
        borderColor: colors.white,
        borderRadius: 60,
        padding: 10,
        paddingHorizontal: 20,
        blue: {
            color: colors.white,
            backgroundColor: colors.blue[200],
        },
        white: {
            color: colors.blue[200],
            backgroundColor: colors.white,
        }
    },
    textWhite: {
        color: colors.white
    },
    textBlue: {
        color: colors.blue[100]
    }
});