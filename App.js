import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchView from './views/SearchView';
import WeatherView from './views/WeatherView';
import Toast from 'react-native-simple-toast';
import { OPEN_WEATHER_API_KEY, GOOGLE_GEOCODE_API_KEY } from "@env";


export default function App() {

  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetState = () => {
    setWeeklyWeather(null);
    setLocation(null);
  }

  const handleSearch = (input) => {

    setIsLoading(true);

    let locationUrl = '';

    // Settings to change this can be implemented later
    const units = 'metric'

    if(input.city) {
      locationUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${input.city}&key=${GOOGLE_GEOCODE_API_KEY}`;
    } else {
      locationUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${input.zipcode + '%20' + input.country}&key=${GOOGLE_GEOCODE_API_KEY}`;
    }

    fetch(locationUrl).then(response => response.json())
              .then(response => {
                let url = '';

                if(response.results.length > 0){
                  setLocation({
                    city: input.city ? (response.results[0].address_components[0].long_name) : (response.results[0].address_components[1].long_name),
                    country: response.results[0].address_components[response.results[0].address_components.length-1].long_name
                  });
  
                  url = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.results[0].geometry.location.lat}&lon=${response.results[0].geometry.location.lng}&exclude=minutely,hourly&units=${units}&appid=${OPEN_WEATHER_API_KEY}`;
                  
                  return url;

                } else {

                  return null;

                }

              }).then(url => {

                if(url){

                  fetch(url).then(response => response.json())
                            .then(response => {
                              if(response.daily){
                                setWeeklyWeather(response.daily);
                                setIsLoading(false);

                              } else {
                                Toast.show('Location not found');
                                setIsLoading(false);
                                
                              }
                  })

                } else {
                  Toast.show('Location not found');
                  setIsLoading(false);
                }

              }).catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      {weeklyWeather ? (<WeatherView data={weeklyWeather} location={location} resetState={resetState} />) : (<SearchView handleSearch={handleSearch} isLoading={isLoading} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 40,
    marginHorizontal: 10,
    marginBottom: 10, 
  }
});
