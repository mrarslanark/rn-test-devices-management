import React from "react";
import { Platform, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import globalStyles from "../../config/globalStyles";
import styles from "./styles";

const ThemeInput = ({
  placeholder,
  onChangeText,
  onBlur,
  autoCapitalize = "none",
  value,
  errorMessage = "",
}) => {
  const { theme } = useSelector((state) => state.root.core);
  const style = Platform.OS === "web" && {
    outline: "none",
    caretColor:
      theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          theme === "dark" ? styles.darkBorder : styles.lightBorder,
        ]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={
            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
          }
          autoCapitalize={autoCapitalize}
          clearButtonMode={"while-editing"}
          keyboardType={"default"}
          style={{ color: theme === "dark" ? "white" : "#212121" }}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          selectionColor={
            theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"
          }
        />
      </View>
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  );
};

export default ThemeInput;
