import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ThemeInput from "../../components/ThemeInput";
import { addDeviceValidation } from "../../config/validations";
import { updateDevice } from "../../store/slices/devices";
import styles from "./styles";

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
    <ScrollView
      style={{
        padding: 24,
        flex: 1,
        backgroundColor: theme === "dark" ? "#212121" : "white",
      }}>
      <KeyboardAvoidingView behavior={"position"}>
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
            isValid,
            dirty,
          }) => (
            <>
              <ThemeInput
                autoCapitalize={"sentences"}
                placeholder={"Make"}
                onBlur={handleBlur("make")}
                onChangeText={handleChange("make")}
                value={values.make}
                errorMessage={touched.make && errors.make ? errors.make : ""}
              />
              <ThemeInput
                autoCapitalize={"sentences"}
                placeholder={"Model"}
                onBlur={handleBlur("model")}
                onChangeText={handleChange("model")}
                value={values.model}
                errorMessage={touched.model && errors.model ? errors.model : ""}
              />
              <ThemeInput
                autoCapitalize={"sentences"}
                placeholder={"OS"}
                onBlur={handleBlur("os")}
                onChangeText={handleChange("os")}
                value={values.os}
                errorMessage={touched.os && errors.os ? errors.os : ""}
              />
              <ThemeInput
                autoCapitalize={"sentences"}
                placeholder={"Owner"}
                onBlur={handleBlur("owner")}
                onChangeText={handleChange("owner")}
                value={values.owner}
                errorMessage={touched.owner && errors.owner ? errors.owner : ""}
              />
              <ThemeInput
                placeholder={"Notes"}
                onBlur={handleBlur("notes")}
                onChangeText={handleChange("notes")}
                value={values.notes}
                errorMessage={touched.notes && errors.notes ? errors.notes : ""}
              />
              <Pressable
                onPress={handleSubmit}
                disabled={!(isValid && dirty)}
                style={[
                  styles.submitButton,
                  isValid && dirty
                    ? styles.activeButtonBG
                    : styles.inActiveButtonBG,
                ]}>
                <Text style={styles.submitButtonText}>EDIT DEVICE</Text>
              </Pressable>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditDeviceScreen;
