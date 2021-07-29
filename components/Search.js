import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import CityForm from './CityForm';
import ZipcodeForm from './ZipcodeForm';

const Search = ({ handleSearch }) => {

    const styles = StyleSheet.create({
        container: {
          backgroundColor: '#fff',
          //alignItems: 'center',
          //justifyContent: 'center',
        },
        toggleFormButtons: {
            flexDirection: 'row',
            //justifyContent: 'center',
            //alignItems: 'center'
          }
    });

    const [byCity, setByCity] = useState(true);
    
    return ( 
        <View style={styles.container}>
          <View style={styles.toggleFormButtons}>
            <Button title='City' onPress={() => setByCity(true)}/>
            <Button title='Zipcode ' onPress={() => setByCity(false)} />
          </View>
          { byCity ? (<CityForm handleSearch={handleSearch} />) : (<ZipcodeForm handleSearch={handleSearch} />) }
        </View>
     );
}
 
export default Search;