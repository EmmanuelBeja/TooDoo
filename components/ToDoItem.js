import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ToDoItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onDelete(props.id)}
      >
      <View style={styles.listItem}>
        <Text>- {props.todo}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f5f5f5',
    borderColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 5
  }
});

export default ToDoItem;
