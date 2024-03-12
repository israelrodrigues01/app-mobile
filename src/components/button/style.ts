import { StyleSheet } from "react-native";

import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    button: {
        padding: 13,
        borderRadius: 5,
        backgroundColor: colors.orange,
    },

    buttonText: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.white,
    },
});