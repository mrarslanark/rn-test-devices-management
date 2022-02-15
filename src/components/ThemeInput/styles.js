import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: Platform.OS === 'android' ? 0 : 12,
    borderBottomWidth: 1,
    height: Platform.OS === 'web' ? 50 : 'auto',
  },
  darkBorder: {
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  lightBorder: {
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  errorText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#bf4941',
    marginTop: 12,
    marginStart: 12,
    marginBottom: 16,
  },
});

export default styles;
