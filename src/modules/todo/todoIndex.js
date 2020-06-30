import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import TodoAdd from './todoAdd';
import TodoList from './todoList';

export default function TodoIndex() {
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
        <View style={styles.container}>
            <View style={styles.content}>                
                <TodoAdd submitHandler={submitHandler} />
                <TodoList todos={todos} pressHandle={pressHandle} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        padding: 40
    },
    list: {
        flex: 1,
        marginTop: 10
    }
});
