import React from 'react';
import { View, Text } from 'react-native';
import globalStyle from './mainStyle';

export default function Home() {
    return (
        <View style={globalStyle.container}>
            <Text>Home</Text>
        </View>
    )
}