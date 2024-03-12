import { StyleSheet } from "react-native";

import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    input: {
        color: colors.gray,
        borderWidth: 1,
        borderColor: colors.gray[200],
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: "transparent",
    },
});