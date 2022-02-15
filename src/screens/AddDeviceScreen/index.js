import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ThemeInput from "../../components/ThemeInput";
import globalStyles from "../../config/globalStyles";
import { addDeviceValidation } from "../../config/validations";
import { addDevice } from "../../store/slices/devices";
import styles from "./styles";

const initialValues = {
  make: "",
  model: "",
  os: "",
  owner: "",
  notes: "",
  createdAt: new Date(),
};

const AddDeviceScreen = () => {
  const { theme } = useSelector((state) => state.root.core);
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const onSubmitForm = (values) => {
    const model = { id: nanoid(), ...values };
    dispatch(addDevice(model));
    if (navigate.canGoBack) {
      navigate.pop();
    }
  };

  return (
    <ScrollView
      style={[
        styles.scrollContainer,
        theme === "dark"
          ? globalStyles.darkBackground
          : globalStyles.lightBackground,
      ]}>
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
                <Text style={styles.submitButtonText}>ADD DEVICE</Text>
              </Pressable>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddDeviceScreen;
