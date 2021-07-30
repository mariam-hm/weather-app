import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DayCard from '../components/DayCard';

const WeatherView = ({ data, location, resetState }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            marginHorizontal: 10,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        location: {
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
        locationIcon: {
            margin: 10
        },
        locationName: {
            color: '#446ab3',
            fontSize: 18,
        },
        list: {
            flex: 1
        }
      });

    return ( 
        <View style={styles.container}>
            <View>

                <View style={styles.location}>

                    <TouchableOpacity style={styles.locationIcon} onPress={resetState} >
                        <Ionicons name="location" size={36} color="#446ab3" />
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.locationName}>{location.city}, {location.country} </Text>
                    </View>
                    
                </View>


                <FlatList 
                    style={styles.list}
                    keyExtractor={(item) => item.dt.toString()}
                    data={data}
                    renderItem={({ item }) => (
                        <DayCard day={item} />
                    )}
                />

            </View>
        </View>
     );
}
 
export default WeatherView;