import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyle from './mainStyle';

export default function Detail({ route, navigation }) {

    const { title, rating, body, key } = route.params

    const pressHandler = () => {
        navigation.navigate('About')
    }
    
    return (
        <View style={globalStyle.container}>
            <Text>Detail</Text>
            <Text>{title}</Text>
            <Text>{rating}</Text>
            <Text>{body}</Text>
            <Text>{key}</Text>
        </View>
    )
}