import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyle from './mainStyle';

export default function Detail({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('About')
    }
    
    return (
        <View style={globalStyle.container}>
            <Text>Detail</Text>
            <Button title='go to about' onPress={pressHandler}></Button>
        </View>
    )
}