import { StyleSheet } from "react-native";

import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    avatar: {
        width: 152,
        height: 152,
        borderRadius: 100,
        backgroundColor: colors.gray[100],
        overflow: "hidden",
    },
    avatarEdit: {
        position: "absolute",
        width: 47,
        height: 47,
        right: 5,
        bottom: -5,
        borderRadius: 100,
        backgroundColor: colors.blue[200],
    },
    avatarEditText: {
        color: colors.white,
    },
    avatarNick: {
        fontSize: 20,
        fontWeight: "500",
    },
});