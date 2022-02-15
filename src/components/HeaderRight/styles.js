import {StyleSheet} from 'react-native';

const iconStyle = {
  width: 24,
  height: 24,
  resizeMode: 'contain',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  changeThemeIcon: {
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  exportIcon: {
    justifyContent: 'center',
    marginStart: 24,
  },
  importIcon: {
    justifyContent: 'center',
  },
  addIcon: {
    justifyContent: 'center',
    paddingEnd: 24,
  },
  darkIcon: {
    ...iconStyle,
    tintColor: 'white',
  },
  lightIcon: {
    ...iconStyle,
    tintColor: '#212121',
  },
});

export default styles;
