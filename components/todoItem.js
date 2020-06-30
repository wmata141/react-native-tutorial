import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';

export default function TodoItem({item, pressHandle}) {
    return (
        <TouchableOpacity onPress={ () => pressHandle(item.id)}>
            <Text style={styles.item}>{item.text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginTop: 15,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})