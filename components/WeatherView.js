import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { weatherIcons } from '../styles/weatherIcons';
import moment from 'moment';
import DayCard from './DayCard';

const WeatherView = ({ data, location }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#eee',
            marginHorizontal: 20,
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

    console.log(data)
    return ( 
        <View style={styles.container}>
            <View>

                <View style={styles.location}>
                    <TouchableOpacity style={styles.locationIcon}>
                        <Ionicons name="location" size={36} color="#446ab3" />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.locationName}>{location.city}, {location.country} </Text>
                    </View>
                </View>


                <FlatList 
                    style={styles.list}
                    keyExtractor={(item) => item.dt}
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