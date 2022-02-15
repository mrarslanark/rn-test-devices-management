import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {nanoid} from 'nanoid';
import React from 'react';
import {Pressable, Text, useColorScheme, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ThemeInput from '../../components/ThemeInput';
import globalStyles from '../../config/globalStyles';
import {addDeviceValidation} from '../../config/validations';
import {addDevice} from '../../store/slices/devices';
import styles from './styles';

const initialValues = {
  make: '',
  model: '',
  os: '',
  owner: '',
  notes: '',
  createdAt: new Date(),
};

const AddDeviceScreen = () => {
  const {theme} = useSelector(state => state.root.core);
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const onSubmitForm = values => {
    const model = {id: nanoid(), ...values};
    dispatch(addDevice(model));
    if (navigate.canGoBack) {
      navigate.goBack();
    }
  };

  return (
    <View
      style={[
        styles.scrollContainer,
        theme === 'dark'
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
          isValid,
          dirty,
        }) => (
          <form>
            <View style={styles.inputContainer}>
              <ThemeInput
                autoCapitalize={'sentences'}
                placeholder={'Make'}
                onBlur={handleBlur('make')}
                onChangeText={handleChange('make')}
                value={values.make}
                errorMessage={touched.make && errors.make ? errors.make : ''}
              />
              <View style={styles.spacing} />
              <ThemeInput
                autoCapitalize={'sentences'}
                placeholder={'Model'}
                onBlur={handleBlur('model')}
                onChangeText={handleChange('model')}
                value={values.model}
                errorMessage={touched.model && errors.model ? errors.model : ''}
              />
            </View>
            <View style={styles.secondRow}>
              <ThemeInput
                autoCapitalize={'sentences'}
                placeholder={'OS'}
                onBlur={handleBlur('os')}
                onChangeText={handleChange('os')}
                value={values.os}
                errorMessage={touched.os && errors.os ? errors.os : ''}
              />
              <View style={styles.spacing} />
              <ThemeInput
                autoCapitalize={'sentences'}
                placeholder={'Owner'}
                onBlur={handleBlur('owner')}
                onChangeText={handleChange('owner')}
                value={values.owner}
                errorMessage={touched.owner && errors.owner ? errors.owner : ''}
              />
            </View>
            <ThemeInput
              placeholder={'Notes'}
              onBlur={handleBlur('notes')}
              onChangeText={handleChange('notes')}
              value={values.notes}
              errorMessage={touched.notes && errors.notes ? errors.notes : ''}
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
          </form>
        )}
      </Formik>
    </View>
  );
};

export default AddDeviceScreen;
