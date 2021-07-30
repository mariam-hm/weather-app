import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { weatherIcons } from '../styles/weatherIcons';
import moment from 'moment';

const DayCard = ({ day }) => {

    console.log('DAY: ', day)

    const styles = StyleSheet.create({
        mainContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5
        },
        card: {
            borderRadius: 6,
            elevation: 3,
            backgroundColor: '#446ab3',
            shadowOffset: { width: 1, height: 1 },
            shadowColor: '#333',
            shadowOpacity: 0.3,
            shadowRadius: 2,
            marginHorizontal: 4,
            marginVertical: 6,
            padding: 10,
            paddingLeft: 20
        },
        date: {
            color: '#fff',
        },
        description: {
            color: '#fff',
            fontSize: 28,
            marginLeft: 15, 
        },
        image: {
            marginRight: 20
        },
        label: {
            color: '#fff',
        }
    });

    return ( 
        <View style={styles.card}>
            <Text style={styles.date}>{moment.unix(day.dt).format('ddd MMM. DD')}</Text>
            <Text style={styles.description}>{day.weather[0].main}, {day.temp.day}°</Text>

            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.image}>
                        {/* To use my own images, I took main description as key, except for codes 7xx that all take 'Fog' */}
                        <Image source={(day.weather[0].id > 700 && day.weather[0].id < 800) ? (weatherIcons.icons['Fog']) : (weatherIcons.icons[day.weather[0].main])} />
                    </View>
                </View>
            
                <View>
                    <Text style={styles.label} >Max. temp: {day.temp.max}° </Text>
                    <Text style={styles.label}>Min temp: {day.temp.min}° </Text>
                    <Text style={styles.label}>Wind speed: {day.wind_speed} </Text>
                    <Text style={styles.label}>Precipitation: { day.rain ? (day.rain) : ('-') } </Text> 
                    <Text style={styles.label}>Humidity: {day.humidity} </Text>
                </View>

            </View>
        </View>
    );
}
 
export default DayCard;