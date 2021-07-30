import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { formStyles } from '../styles/formStyles';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-simple-toast';

const ZipcodeForm = ({ handleSearch }) => {

    const [country, setCountry] = useState('Canada');
    const [zipcode, setZipcode] = useState('');

    const pressHandler = () => {
        if((country === 'Canada' && !(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(zipcode)) || (country === 'USA' && !(/^\d{5}(?:[- ]?\d{4})?$/.test(zipcode))))) {
            Toast.show('Invalid zipcode');
        } else {
            handleSearch({country, zipcode});
            setCountry('Canada');
            setZipcode('')
        }
    }

    
    return ( 
        <View>

            <Picker
                style={formStyles.input}
                selectedValue={country}
                onValueChange={(itemValue) => setCountry(itemValue)}
                value={country}
                >
                <Picker.Item label='Canada' value='Canada' />
                <Picker.Item label='USA' value='USA' />
            </Picker>

            <TextInput 
                style={formStyles.input} 
                placeholder='Enter zipcode...'
                onChangeText={(value) => setZipcode(value)}
                value={zipcode}
            />

            <TouchableOpacity style={formStyles.searchButton} onPress={pressHandler}>
              <Text style={formStyles.searchButtonText}>SEARCH</Text>
            </TouchableOpacity>
            
        </View>
     );
}
 


export default ZipcodeForm;