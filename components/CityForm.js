import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { formStyles } from '../styles/formStyles';
import Toast from 'react-native-simple-toast';

const CityForm = ({ handleSearch }) => {

    const [city, setCity] = useState('');

    const pressHandler = () => {
        if(city.length < 1 || /^\s+$/.test(city)){
            Toast.show('City name is required and must be at least 1 character long');
        } else {
            handleSearch({city: escape(city)});
            setCity('');
        }
    }

    return ( 
        <View>
            <View>
                <TextInput
                    style={formStyles.input} 
                    placeholder='Enter city name...'
                    onChangeText={(value) => setCity(value)}
                    value={city}
                />
                <TouchableOpacity style={formStyles.searchButton} onPress={pressHandler}>
                    <Text style={formStyles.searchButtonText}>SEARCH</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default CityForm;