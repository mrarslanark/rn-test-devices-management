import { StyleSheet } from "react-native";
import colors from "./colors";

const globalStyles = {
  dark: colors.dark,
  light: colors.light,
  darkBackground: {
    backgroundColor: colors.dark,
  },
  lightBackground: {
    backgroundColor: colors.light,
  },
  darkText: {
    color: colors.light,
  },
  lightText: {
    color: colors.dark,
  },
};

export default globalStyles;
