import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import QRCode from "react-qr-code";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../../components/AlertModal";
import ThemeText from "../../components/ThemeText";
import globalStyles from "../../config/globalStyles";
import icons from "../../config/icons";
import routes from "../../config/routes";
import { removeDevice } from "../../store/slices/devices";
import { toggleTheme } from "../../store/slices/core";
import MobileActionCenter from "./components/MobileActionCenter";
import styles from "./styles";
import * as DocumentPicker from "expo-document-picker";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.root.core);
  const { devices } = useSelector((state) => state.root.devices);
  const { navigate } = useNavigation();
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onAddDevice = () => {
    navigate(routes.ADD_DEVICE);
  };

  const onShowAlert = (item) => {
    setSelectedItem(item);
    setDeleteAlert(true);
  };

  const onDelete = () => {
    if (!selectedItem) {
      return;
    }

    dispatch(removeDevice(selectedItem.id));
    setDeleteAlert(false);
    setSelectedItem(null);
  };

  const onChangeTheme = () => {
    dispatch(toggleTheme());
  };

  const onEdit = (item, index) => {
    navigate(routes.EDIT_DEVICE, { ...item, index });
  };

  return (
    <SafeAreaView
      style={[
        styles.root,
        theme === "dark"
          ? globalStyles.darkBackground
          : globalStyles.lightBackground,
      ]}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <View
          style={[
            styles.mobileActionContainer,
            theme === "dark"
              ? styles.darkMobileActionContainer
              : styles.lightMobileActionContainer,
          ]}>
          <Pressable style={styles.addDeviceContainer} onPress={onAddDevice}>
            <ThemeText style={styles.addDeviceText} text={"+ Add New Device"} />
          </Pressable>
        </View>
        <Pressable
          style={
            theme === "dark"
              ? styles.darkMobileActionContainer
              : styles.lightMobileActionContainer
          }
          onPress={onChangeTheme}>
          <ThemeText
            text={`${theme === "dark" ? "Light" : "Dark"} theme`}
            style={styles.addDeviceText}
          />
        </Pressable>
        <View style={styles.listContainer}>
          {devices.length > 0 ? (
            <FlatList
              data={devices}
              ItemSeparatorComponent={() => <View style={styles.divider} />}
              renderItem={({ item, index }) => {
                return (
                  <>
                    <View style={styles.contentActionContainer}>
                      <QRCode
                        fgColor={theme === "dark" ? "white" : "#212121"}
                        bgColor="transparent"
                        value={item.id}
                        size={120}
                        color={"white"}
                      />
                      <View style={styles.contentContainer}>
                        <View style={styles.contentActionContainer}>
                          <ThemeText text={item.make} style={styles.itemMake} />
                        </View>
                        <ThemeText text={`${item.model} - ${item.os}`} />
                        <ThemeText text={item.owner} />
                        <ThemeText text={item.notes} numberOfLines={3} />
                      </View>
                    </View>
                    <MobileActionCenter
                      onDelete={() => onShowAlert(item)}
                      onEdit={() => onEdit(item, index)}
                    />
                  </>
                );
              }}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Image source={icons.EMPTY_DEVICES} style={styles.emptyIcon} />
              <ThemeText
                text={"No Devices Added Yet"}
                style={styles.emptyText}
              />
            </View>
          )}
        </View>
      </View>
      {selectedItem && (
        <AlertModal
          visibility={deleteAlert}
          onDismiss={() => {
            setDeleteAlert(false);
            setSelectedItem(null);
          }}
          title={"Are You Sure"}
          message={"Do you want to delete the device from your test devices?"}
          secondaryButtonText={"Cancel"}
          primaryButtonText={"Delete"}
          onPressPrimary={onDelete}
          onPressSecondary={() => {
            setDeleteAlert(false);
            setSelectedItem(null);
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
