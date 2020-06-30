import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandle}) {
    return (
        <TouchableOpacity onPress={ () => pressHandle(item.id)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color={'#333'} />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>            
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
        borderRadius: 10,
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10
    }
})