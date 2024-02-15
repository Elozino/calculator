import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  btn: {
    width: 80,
    height: 80,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallText: {
    fontSize: 32,
  },
  // Keyboard
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  resultText:{
  },
  container: {
    flex: 1,
  },
});
