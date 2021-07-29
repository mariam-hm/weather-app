import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { formStyles } from '../styles/formStyles';

const CityForm = ({ handleSearch }) => {

    const [city, setCity] = useState('');

    return ( 
        <View>
            <View>
                <TextInput
                    style={formStyles.input} 
                    placeholder='Enter city name...'
                    onChangeText={(value) => setCity(value)}
                />
                <Button title='search' onPress={() => handleSearch({city})}/>
            </View>
        </View>
     );
}
 
export default CityForm;