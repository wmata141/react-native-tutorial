import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'a', id: '1' },
    { text: 'b', id: '2' },
    { text: 'c', id: '3' },
    { text: 'd', id: '4' },
    { text: 'e', id: '5' },
    { text: 'f', id: '6' },
  ])

  const pressHandle = (key) => {
    console.log("key", key);

    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != key)
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, id: Math.random().toString() },
          ...prevTodos,
        ]
      })
    } else {
      Alert.alert('Error', 'Todos must be over 3 cgart long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }

  }

  return (
    <Sandbox />
    // <TouchableWithoutFeedback onPress={() => {
    //   Keyboard.dismiss()
    //   console.log('mismissed keyboard');      
    // }}>
    //   <View style={styles.container}>
    //     {/* header */}
    //     <Header />
    //     <View style={styles.content}>
    //       {/* to form */}
    //       <AddTodo submitHandler={submitHandler} />
    //       <View style={styles.list}>
    //         <FlatList
    //           keyExtractor={(item) => item.id}
    //           data={todos}
    //           renderItem={({ item }) => (
    //             <TodoItem item={item} pressHandle={pressHandle} />
    //           )}
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {

  }
});
