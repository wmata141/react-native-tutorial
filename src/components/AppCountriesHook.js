import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    console.log("useEffect()")
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('https://restcountries.eu/rest/v2/all')
    const countryList = await data.json()
    setCountryList(countryList)
  }

  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   <ul>
    //     {
    //       countryList.map( item => {
    //       <li key={item.name}>{item.name}</li>
    //       })
    //     }
    //   </ul>
    // </View>

    <div>
      <h1>Country List</h1>
      <ul>
        {
          countryList.map(item => (
            <li key={item.name}>{item.name}</li>
          ))
        }
      </ul>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
