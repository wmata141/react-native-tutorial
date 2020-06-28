import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('William')
  const [age, setAge] = useState(28)
  const [flag, setFlag] = useState(true)  

  const clickButton = () => {  
    if (flag) {
      setFlag(!flag)
      setName('Xavier')
    } else {            
      setFlag(!flag)
      setName('William')
    }    
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title={name} onPress={clickButton} />
      <Text>Enter name:</Text>
      <TextInput         
        style={styles.input}
        placeholder={'Name'}
        onChangeText={(val) => setName(val)}
        multiline
      />
      <Text>Enter age:</Text>
      <TextInput 
        style={styles.input}
        placeholder={'Name'}
        onChangeText={(val) => setAge(val)}
        keyboardType='numeric'
      />
      <Text>{name} - {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    margin: 10
  }
});
