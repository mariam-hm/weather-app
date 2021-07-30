# Weather App

Simple react native app that uses OpenWeather API to show the forecast for the next seven days.

# Notes

- Although I am more comfortable with React, I wanted to try learning React native for this small project.
- After a lot of research, realized that there was no way to get the forecast for more than 5 days with only the city name or zipcode with the free OpenWeather plan (it is only possible with paid plans). However, it is doable with geographic coordinates. I worked around this by using Google Geocode API to find the geographic coordinates using the city and zipcode, even though it makes the app slightly slower.

# Install

```
git clone https://github.com/mariam-hm/weather-app.git
npm install
```

# Run

Install Android Studio or xCode or use your own smartphone by downloading the Expo Client app and scanning the QR code.

```
npm start
```

# Screenshots

![City search screen](https://github.com/mariam-hm/weather-app/blob/main/screenshots/screen1.jpg "City search screen")
![Zipcode search screen](https://github.com/mariam-hm/weather-app/blob/main/screenshots/screen2.jpg "Zipcode search screen")
![Weather screen](https://github.com/mariam-hm/weather-app/blob/main/screenshots/screen3.jpg "Weather screen")
