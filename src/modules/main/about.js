import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyle from './mainStyle';

export default function About({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyle.container}>
            <Text>About</Text>
            <Button title='go back' onPress={pressHandler}></Button>
        </View>
    )
}