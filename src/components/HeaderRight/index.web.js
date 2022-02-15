import { useNavigation } from "@react-navigation/native";
import convertArrayToCSV from "convert-array-to-csv";
import * as DocumentPicker from "expo-document-picker";
import FileSaver from "file-saver";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { csvToJSON } from "../../config/helpers";
import icons from "../../config/icons";
import routes from "../../config/routes";
import { deleteAll, importDevices } from "../../store/slices/devices";
import ThemeText from "../ThemeText";
import styles from "./styles";

const HeaderRight = ({ onToggleTheme }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.root.core);
  const { devices } = useSelector((state) => state.root.devices);
  const { navigate } = useNavigation();

  const iconStyle = theme === "dark" ? styles.darkIcon : styles.lightIcon;

  const onImport = async () => {
    try {
      const response = await DocumentPicker.getDocumentAsync({
        type: ".csv",
      });
      const fileReader = new FileReader();
      fileReader.addEventListener("loadend", ({ target }) => {
        const importedData = csvToJSON(target.result);
        dispatch(importDevices(importedData));
      });
      fileReader.readAsText(response.file);
    } catch (err) {
      console.log(err);
    }
  };

  const onExport = async () => {
    try {
      const result = convertArrayToCSV(devices);
      const blob = new Blob([result, { type: "text/csv;charset=utf-8;" }]);
      FileSaver.saveAs(blob, "devices.csv");
    } catch (err) {
      console.log(result);
    }
  };

  const onDeleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <View style={styles.container}>
      {devices.length > 0 && (
        <Pressable style={styles.importIcon} onPress={onDeleteAll}>
          <ThemeText text={"DELETE ALL"} />
        </Pressable>
      )}
      <Pressable style={styles.exportIcon} onPress={onImport}>
        <ThemeText text={"IMPORT"} />
      </Pressable>
      {devices.length > 0 && (
        <Pressable
          // disabled={devices.length === 0}
          onPress={onExport}
          style={styles.exportIcon}>
          <ThemeText text={"EXPORT"} />
        </Pressable>
      )}
      <Pressable style={styles.changeThemeIcon} onPress={onToggleTheme}>
        <Image source={icons.DARK_MODE} style={iconStyle} />
      </Pressable>
      <Pressable
        onPress={() => navigate(routes.ADD_DEVICE)}
        style={styles.addIcon}>
        <Image source={icons.ADD} style={iconStyle} />
      </Pressable>
    </View>
  );
};

export default HeaderRight;
