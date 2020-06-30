import React from 'react';
import { View, Text, Button } from 'react-native';
import globalStyle from './mainStyle';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Detail')
    }

    return (
        <View style={globalStyle.container}>
            <Text>Home</Text>
            <Button title='go to review' onPress={pressHandler}></Button>
        </View>
    )
}