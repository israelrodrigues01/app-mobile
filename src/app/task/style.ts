import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 50,
    paddingHorizontal: 20,
  },
  card: {
    display: "flex",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
  },
  title: {
    textAlign: "center",
    color: colors.white,
    paddingVertical: 13
  },
  cardHeader: {
    backgroundColor: colors.blue[200],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    borderWidth: 2,
    borderColor: "red",
  }
});
