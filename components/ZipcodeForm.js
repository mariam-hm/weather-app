import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { formStyles } from '../styles/formStyles';

const ZipcodeForm = ({ handleSearch }) => {

    const [country, setCountry] = useState('Canada');
    const [zipcode, setZipcode] = useState('');

    return ( 
        <View>
            <Picker
                style={formStyles.input}
                selectedValue={country}
                onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
                >
                <Picker.Item label='Canada' value='Canada' />
                <Picker.Item label='USA' value='USA' />
            </Picker> 
            <TextInput 
                style={formStyles.input} 
                placeholder='Enter zipcode...'
                onChangeText={(value) => setZipcode(value)}
            />
            <Button title='search' onPress={() => handleSearch({country, zipcode})} />
        </View>
     );
}
 


export default ZipcodeForm;