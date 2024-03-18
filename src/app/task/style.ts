import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 50,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    color: colors.white,
    paddingVertical: 13
  },
  header: {
    backgroundColor: colors.blue[200],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 1,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
