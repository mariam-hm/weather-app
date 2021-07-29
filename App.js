import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Search from './components/Search';

export default function App() {

  const handleSearch = (input) => {
    console.log(input)

    const apiKey = '5f2687bd368d5885ccacbc3495a4b6e7'

    if(input.city) {
      console.log('CITY');
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.city}&appid=${apiKey}`
      console.log(url);

    } else {
      console.log('ZIPCODE')
    }
    
  }

  return (
    <View style={styles.container}>
      <Search handleSearch={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    margin: 40
  }
});
