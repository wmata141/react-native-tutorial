import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TodoItem from './todoItem';

export default function TodoList({todos, pressHandle}) {
    return (
        <View style={styles.list}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandle={pressHandle} />
          )}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginTop: 15,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10
    }
})