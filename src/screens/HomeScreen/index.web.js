import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  useColorScheme,
  View,
} from 'react-native';
import QRCode from 'react-qr-code';
import {useDispatch, useSelector} from 'react-redux';
import AlertModal from '../../components/AlertModal';
import ThemeText from '../../components/ThemeText';
import globalStyles from '../../config/globalStyles';
import icons from '../../config/icons';
import routes from '../../config/routes';
import {removeDevice} from '../../store/slices/devices';
import WebActionCenter from './components/WebActionCenter';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector(state => state.root.core);
  const {devices} = useSelector(state => state.root.devices);
  const {navigate} = useNavigation();
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onShowAlert = item => {
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

  const onEdit = (item, index) => {
    navigate(routes.EDIT_DEVICE, {...item, index});
  };

  return (
    <View
      style={[
        styles.root,
        theme === 'dark'
          ? globalStyles.darkBackground
          : globalStyles.lightBackground,
      ]}>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {devices.length > 0 ? (
            <FlatList
              data={devices}
              ItemSeparatorComponent={() => <View style={styles.divider} />}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <View style={styles.contentActionContainer}>
                      <QRCode
                        fgColor={theme === 'dark' ? 'white' : '#212121'}
                        bgColor="transparent"
                        value={item.id}
                        size={120}
                        color={'white'}
                      />
                      <View style={styles.contentContainer}>
                        <View style={styles.contentActionContainer}>
                          <ThemeText text={item.make} style={styles.itemMake} />
                          <WebActionCenter
                            onDelete={() => onShowAlert(item)}
                            onEdit={() => onEdit(item, index)}
                          />
                        </View>
                        <ThemeText text={`${item.model} - ${item.os}`} />
                        <ThemeText text={item.owner} />
                        <ThemeText
                          text={item.notes ? item.notes : 'No notes provided'}
                          numberOfLines={3}
                        />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Image source={icons.EMPTY_DEVICES} style={styles.emptyIcon} />
              <ThemeText
                text={'No Devices Added Yet'}
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
          title={'Are You Sure'}
          message={'Do you want to delete the device from your test devices?'}
          secondaryButtonText={'Cancel'}
          primaryButtonText={'Delete'}
          onPressPrimary={onDelete}
          onPressSecondary={() => {
            setDeleteAlert(false);
            setSelectedItem(null);
          }}
        />
      )}
    </View>
  );
};

export default HomeScreen;
