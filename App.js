import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Search from './components/Search';
import moment from 'moment';
import WeatherView from './components/WeatherView';

export default function App() {

  const [currentWeather, setCurrentWeather] = useState({
    description: '',
    currTemp: null,
    minTemp: null,
    maxTemp: null,
    windSpeed: null,
    precipitation: null,
    humidity: null
  })

  const [weeklyWeather, setWeeklyWeather] = useState(null)
  const [location, setLocation] = useState(null)

  const handleSearch = (input) => {

    const openWeatherApiKey = '5f2687bd368d5885ccacbc3495a4b6e7'
    const geocodeApiKey = 'AIzaSyACoufbU1uHmQMpmYcZmMorLlRALmQmwcI'
    let locationUrl = '';

    const units = 'metric'

    if(input.city) {
      locationUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${input.city}&key=${geocodeApiKey}`
    } else {
      locationUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${input.zipcode + '%20' + input.country}&key=${geocodeApiKey}`
    }

    fetch(locationUrl).then(response => response.json())
              .then(response => {

                setLocation({
                  city: input.city ? (response.results[0].address_components[0].long_name) : (response.results[0].address_components[1].long_name),
                  country: input.city ? (response.results[0].address_components[3].long_name) : (response.results[0].address_components[4].long_name)
                })

                const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.results[0].geometry.location.lat}&lon=${response.results[0].geometry.location.lng}&exclude=minutely,hourly&units=${units}&appid=${openWeatherApiKey}`
                return url;

              }).then(url => {
                fetch(url).then(response => response.json())
                          .then(response => {
                            setWeeklyWeather(response.daily)
                          })
              }).catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      {weeklyWeather ? (<WeatherView data={weeklyWeather} location={location} />) : (<Search handleSearch={handleSearch} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginHorizontal: 10,
    marginBottom: 10, 
  }
});
