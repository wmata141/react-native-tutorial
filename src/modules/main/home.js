import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import globalStyle from './mainStyle';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from './mainStyle';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'aaaaaaaaaa', rating: 5, body: 'lorem a', key: '1' },
        { title: 'bbbbbbbbbb', rating: 4, body: 'lorem b', key: '2' },
        { title: 'cccccccccc', rating: 3, body: 'lorem c', key: '3' }
    ])

    const pressHandler = (item) => {
        console.log("pressHandler",item);
        navigation.navigate('Detail',item)
    }

    return (
        <View style={globalStyle.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={ () => pressHandler(item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}