import { Formik } from "formik";
import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";
import { addDeviceValidation } from "../../config/validations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { updateDevice } from "../../store/slices/devices";
import globalStyles from "../../config/globalStyles";
import ThemeInput from "../../components/ThemeInput";

const EditDeviceScreen = ({ route }) => {
  const { theme } = useSelector((state) => state.root.core);
  const item = route.params;
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const onSubmitForm = (values) => {
    const model = { ...item, ...values };
    dispatch(updateDevice(model));
    if (navigate.canGoBack) {
      navigate.goBack();
    }
  };

  const initialValues = {
    make: item.make ? item.make : "",
    model: item.model ? item.model : "",
    os: item.os ? item.os : "",
    owner: item.owner ? item.owner : "",
    notes: item.notes ? item.notes : "",
    createdAt: item.createdAt ? item.createdAt : null,
  };

  return (
    <View
      style={[
        styles.scrollContainer,
        theme === "dark"
          ? globalStyles.darkBackground
          : globalStyles.lightBackground,
      ]}>
      <Formik
        validationSchema={addDeviceValidation}
        onSubmit={onSubmitForm}
        initialValues={initialValues}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form>
            <View style={styles.inputContainer}>
              <ThemeInput
                autoCapitalize={"sentences"}
                placeholder={"Make"}
                onBlur={handleBlur("make")}
                onChangeText={handleChange("make")}
                value={values.make}
                errorMessage={touched.make && errors.make ? errors.make : ""}
              />
              <View style={styles.spacing} />
              <ThemeInput
                autoCapitalize={"sentences"}
                placeholder={"Model"}
                onBlur={handleBlur("model")}
                onChangeText={handleChange("model")}
                value={values.model}
                errorMessage={touched.model && errors.model ? errors.model : ""}
              />
            </View>
            <View style={styles.secondRow}>
              <ThemeInput
                autoCapitalize={"sentences"}
                placeholder={"OS"}
                onBlur={handleBlur("os")}
                onChangeText={handleChange("os")}
                value={values.os}
                errorMessage={touched.os && errors.os ? errors.os : ""}
              />
              <View style={styles.spacing} />
              <ThemeInput
                autoCapitalize={"sentences"}
                placeholder={"Owner"}
                onBlur={handleBlur("owner")}
                onChangeText={handleChange("owner")}
                value={values.owner}
                errorMessage={touched.owner && errors.owner ? errors.owner : ""}
              />
            </View>
            <ThemeInput
              placeholder={"Notes"}
              onBlur={handleBlur("notes")}
              onChangeText={handleChange("notes")}
              value={values.notes}
              errorMessage={touched.notes && errors.notes ? errors.notes : ""}
            />
            <Pressable
              onPress={handleSubmit}
              style={[styles.submitButton, styles.activeButtonBG]}>
              <Text style={styles.submitButtonText}>EDIT DEVICE</Text>
            </Pressable>
          </form>
        )}
      </Formik>
    </View>
  );
};

export default EditDeviceScreen;
