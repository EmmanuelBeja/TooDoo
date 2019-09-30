import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

const ToDoInput = props => {
  const [enteredToDo, setEnteredToDo] = useState('');

  const toDoInputHandler = enteredText => {
    setEnteredToDo(enteredText);
  }

  return (
    <Modal visible={props.addModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="What do you want to do?"
          style={styles.input}
          onChangeText={toDoInputHandler}
          value={enteredToDo}
          />
        <View style={styles.btnContainer}>
          <Button style={styles.btn} color="green" title="Add" onPress={() => props.addToDoHandlerFn(enteredToDo)} />
          <Button style={styles.btn} color="#FFA500" title="Cancel" onPress={props.toggleAddModalVisibleFn} />
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  },
  btn: {
    width: '40%',
  }
});

export default ToDoInput;
