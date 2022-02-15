import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 24,
    flex: 1,
  },
  webInputMultilineContainer: {
    flex: 1,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    height: 100,
    marginVertical: 24,
  },
  inputContainer: {
    flexDirection: "row",
  },
  spacing: {
    marginHorizontal: 12,
  },
  secondRow: {
    flexDirection: "row",
    marginVertical: 24,
  },
  submitButton: {
    width: Platform.OS === "web" ? 200 : "100%",
    height: 50,
    justifyContent: "center",
    borderRadius: 6,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  activeButtonBG: {
    backgroundColor: "#21325E",
  },
  inActiveButtonBG: {
    backgroundColor: "gray",
  },
  submitButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});

export default styles;
