import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';

import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [addModalVisible, setAddModalVisible] = useState(false);

  const addToDoHandler = todo => {
    if (todo !== "") {
      setTodoList(currentTodoList => [
        ...todoList,
        { id: Math.random().toString(), value: todo }
      ]);
      toggleAddModalVisible();
    } else {
      Alert.alert(
        'Error Submiting',
        'Please enter a ToDo item',
        [
          {
            text: 'Cancel',
            onPress: toggleAddModalVisible,
            style: 'cancel',
          },
          {text: 'OK'},
        ],
        {cancelable: false},
      );
    }
  }

  const deleteToDo = todoId => {
    Alert.alert(
      'Delete Todo item',
      'Are you sure you want to delete Item?',
      [
        {text: 'Naah', style: 'cancel'},
        {
          text: 'Yes',
          onPress: () => setTodoList(currentTodoList => {
            return currentTodoList.filter(todo => todo.id !== todoId)
          })
        },
      ],
      {cancelable: false},
    );
  }

  const toggleAddModalVisible = () => {
    setAddModalVisible(!addModalVisible);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TooDoo!</Text>
      <Button color="green" title="Add new ToDo" onPress={toggleAddModalVisible} />
      <ToDoInput
        addModalVisible={addModalVisible}
        addToDoHandlerFn={addToDoHandler}
        toggleAddModalVisibleFn={toggleAddModalVisible}
        />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todoList}
        renderItem={itemData => (
          <ToDoItem id={itemData.item.id} onDelete={deleteToDo} todo={itemData.item.value}/>
        )}/>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  container: {padding:50},
});

export default App;
