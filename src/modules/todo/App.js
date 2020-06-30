import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './src/components/header';
import TodoIndex from './src/modules/todo/todoIndex';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('mismissed keyboard');
    }}>
      <View>
        <Header />
        <TodoIndex />
      </View>
    </TouchableWithoutFeedback>
  );
}

