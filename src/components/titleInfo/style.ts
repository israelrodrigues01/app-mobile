import { StyleSheet } from "react-native";

import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    titleInfoContent: {
        position: "relative",
    },
    titleInfoBefore: {
        position: "absolute",
        top: "50%",
        height: 1,
        width: "100%",
        backgroundColor: colors.gray[100],
        zIndex: -1,
    },
    titleInfo: {
        alignSelf: "center",
        fontWeight: "500",
        paddingHorizontal: 30,
        backgroundColor: colors.white,
    }
});