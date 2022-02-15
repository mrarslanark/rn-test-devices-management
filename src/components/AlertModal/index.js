import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import styles from './styles';

const AlertModal = ({
  visibility,
  onDismiss,
  title,
  message,
  secondaryButtonText: secondaryText,
  primaryButtonText,
  onPressPrimary,
  onPressSecondary,
}) => {
  return (
    <Modal
      visible={visibility}
      transparent={true}
      onDismiss={onDismiss}
      style={styles.modalStyle}>
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.actionContainer}>
            <Pressable
              style={styles.buttonContainer}
              onPress={onPressSecondary}>
              <Text style={styles.secondaryButtonText}>{secondaryText}</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer} onPress={onPressPrimary}>
              <Text style={styles.primaryText}>{primaryButtonText}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
