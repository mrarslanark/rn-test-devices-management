import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalStyle: {
    height: 200,
    width: 200,
  },
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 24,
    maxWidth: '80%',
    marginHorizontal: Platform.OS === 'web' ? 12 : 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 12,
    marginVertical: 12,
    textAlign: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  secondaryButtonText: {
    textAlign: 'center',
    color: '#212121',
    textTransform: 'uppercase',
  },
  primaryText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#212121',
    textTransform: 'uppercase',
  },
});

export default styles;
