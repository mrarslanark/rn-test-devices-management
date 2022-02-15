import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const WebActionCenter = ({onDelete, onEdit}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.actionContainer} onPress={onDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
      <Pressable style={styles.actionContainer} onPress={onEdit}>
        <Text style={styles.editText}>Edit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0.25,
  },
  actionContainer: {
    flex: 1,
  },
  deleteText: {
    color: '#bf4941',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  editText: {
    color: 'gray',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default WebActionCenter;
