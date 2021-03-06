import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import CityForm from '../components/CityForm';
import ZipcodeForm from '../components/ZipcodeForm';

const SearchView = ({ handleSearch, isLoading }) => {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          marginHorizontal: 40,
          flexDirection: 'column',
          justifyContent: 'flex-start',
        },
        content: {
          marginTop: '35%',        
        },
        title: {
          fontSize: 28,
          color: '#446ab3',
          marginVertical: 20,
          alignSelf: 'center',
          fontWeight: 'bold'
        },
        toggleFormButtons: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        toggleButton: {
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#446ab3',
          borderBottomWidth: 2,
          marginHorizontal: 5,
        },
        toggleButtonText: {
          fontSize: 18,
          color: '#446ab3'
        },
        loadingContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        loading: {
          fontSize: 18,
          color: '#446ab3',
        }
    });

    const [byCity, setByCity] = useState(true);
    
    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        
        {isLoading ? (

          <View testID='loading' style={styles.loadingContainer}>
            <Text style={styles.loading}>LOADING...</Text>
          </View>

        ) : (

          <View style={styles.container}>
            <View style={styles.content}>

              <Text style={styles.title}>WEATHER APP </Text>

              <View style={styles.toggleFormButtons}>

              <TouchableOpacity style={styles.toggleButton} onPress={() => setByCity(true)}>
                <Text style={styles.toggleButtonText}>CITY</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.toggleButton} onPress={() => setByCity(false)}>
                <Text style={styles.toggleButtonText}>ZIPCODE</Text>
              </TouchableOpacity>

              </View>

              { byCity ? (<CityForm handleSearch={handleSearch} />) : (<ZipcodeForm handleSearch={handleSearch} />) }
              
            </View>    
          </View>
          
        )}

      </TouchableWithoutFeedback>
     );
}
 
export default SearchView;