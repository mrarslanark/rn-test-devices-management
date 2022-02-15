import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderRight from '../components/HeaderRight';
import routes from '../config/routes';
import AddDeviceScreen from '../screens/AddDeviceScreen';
import EditDeviceScreen from '../screens/EditDeviceScreen';
import HomeScreen from '../screens/HomeScreen';
import {toggleTheme} from '../store/slices/core';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector(state => state.root.core);

  const onToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const options = {
    headerTintColor: theme === 'dark' ? 'white' : '#212121',
    headerStyle: {
      backgroundColor: theme === 'dark' ? '#212121' : 'white',
    },
  };

  if (Platform.OS === 'web') {
    options.headerStyle.borderBottomColor =
      theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  }

  return (
    <Stack.Navigator initialRouteName={routes.HOME} screenOptions={options}>
      <Stack.Screen
        name={routes.HOME}
        options={{
          headerRight: () =>
            Platform.OS === 'web' ? (
              <HeaderRight onToggleTheme={onToggleTheme} />
            ) : null,
          headerTitle: 'Test Devices Management',
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name={routes.ADD_DEVICE}
        options={{
          headerTitle: 'Add New Device',
        }}
        component={AddDeviceScreen}
      />
      <Stack.Screen
        name={routes.EDIT_DEVICE}
        options={{
          headerTitle: 'Edit Device',
        }}
        component={EditDeviceScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
