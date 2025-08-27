import { styles } from "@/assets/styles/styles";
import { router, useLocalSearchParams } from "expo-router";
import { Menu } from 'lucide-react-native';
import { fetchWeatherApi } from 'openmeteo';
import React, { useState } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";



export default function Map() {

  // Location of what weather data to call
  const params = {
    "latitude": -36.8485,
    "longitude": 174.7635,
    "hourly": ["temperature_2m", "precipitation", "precipitation_probability", "wind_speed_180m"],
  };
  // Where to get the weather
  const url = "https://api.open-meteo.com/v1/forecast";

  // Stores and updates the weather info for the app to use
  const [weatherData, setWeatherData] = useState<any>(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      const responses = await fetchWeatherApi(url, params);

      const response = responses[0];

      // Attributes for timezone and location
      const latitude = response.latitude();
      const longitude = response.longitude();
      const elevation = response.elevation();
      const utcOffsetSeconds = response.utcOffsetSeconds();

      console.log(
        `\nCoordinates: ${latitude}°N ${longitude}°E`,
        `\nElevation: ${elevation}m asl`,
        `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
      );

      const hourly = response.hourly()!;

      const weatherDataObj = {
        hourly: {
          time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
            (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
          ),
          temperature_2m: hourly.variables(0)!.valuesArray(),
          precipitation: hourly.variables(1)!.valuesArray(),
          precipitation_probability: hourly.variables(2)!.valuesArray(),
        },
      };

      setWeatherData(weatherDataObj);
    };

    fetchWeather();
  }, []);

  function getFirstTemperature(): number | undefined {
    if (weatherData && weatherData.hourly.temperature_2m.length > 0) {
      return Math.round(weatherData.hourly.temperature_2m[0]);
    }
    return undefined;
  }

  function getPrecipitation(): number | undefined {
    if (weatherData && weatherData.hourly.precipitation.length > 0) {
      return Math.round(weatherData.hourly.precipitation[0]);
    }
    return undefined;
  }

    function getPrecipitationChance(): number | undefined {
    if (weatherData && weatherData.hourly.precipitation_probability.length > 0) {
      return Math.round(weatherData.hourly.precipitation_probability[0]);
    }
    return undefined;
  }




  

  const { course } = useLocalSearchParams();

  const [menuVisible, setmenuVisible] = useState(false);

  const offClick = () => {
    setmenuVisible(false);
  };

   const SideMenu = () => {
    return (
      <View style={styles.sideMenu}>

        <Text style={styles.heading}>Kiwi Golf</Text>

        <TouchableOpacity onPress={() => setmenuVisible(false)}
          style={{padding:10}}
          >       
          <Text style={styles.scoreText }>Resume</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/statistics')}
            style={{padding:10}}>
            <Text style={styles.scoreText}>Statistics</Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => router.push('/history')}
            style={{padding:10}}>
            <Text style={styles.scoreText}>History</Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={() => router.push('/')}
            style={{padding:10}}>
            <Text style={styles.endRound}>End Round</Text>
          </TouchableOpacity>


      </View>
    )
   }



    


  return (
    <TouchableWithoutFeedback onPress={offClick}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: 'column',
        }}
        
      >
        <ImageBackground source={require('../assets/images/welcome-08Ipbe8GpWw-unsplash.jpg')}
        style={{ flex: 1}}>


          <View style={styles.topMenu}>

            <TouchableOpacity
              onPress={() => setmenuVisible(true)}
              style={{marginRight: 10}}>
              <Menu color='white' size ={50}/>
            </TouchableOpacity>
              {
                menuVisible ? <SideMenu /> :null
              }

              <Text style={[styles.scorecardTitle, {position: 'absolute', left: 70, top: 10}]}>{course}</Text>
          </View>

          <View style={[styles.middleTexts, {justifyContent: 'flex-start', marginLeft: -175}]} >

              <Text style={[styles.navText, {position: 'absolute', zIndex: 9}]}>
                  {weatherData ? `Chance of rain: ${getPrecipitationChance()}%`: "Loading Weather..."}
              </Text>

              <Text style={[styles.navText, {marginLeft: -80,  position: 'absolute', marginTop: 65, zIndex: 9}]}>
                  {weatherData ? `Temp: ${getFirstTemperature()}°C`: "Loading Weather..."}
              </Text>

              <Text style={[styles.navText, {marginLeft: -82,  position: 'absolute', marginTop: 120, zIndex: 9}]}>
                  {weatherData ? `Rain: ${getPrecipitation()}mm`: "Loading Weather..."}
              </Text>

              <Image 
              style={styles.imagePlaceholder}
              source={require('../assets/images/hole17.jpg')} />



          </View>

          <View style={styles.bottomNav}>
            <TouchableOpacity onPress={() => router.push({pathname: '/scorecard', params: { course: course}})} 
            style={{width: '85%'}}>
              <Text style={styles.scoreText}>GO TO SCORECARD</Text>
            </TouchableOpacity>
          </View>

            
        </ImageBackground>
        
      </View>

    </TouchableWithoutFeedback>
  );
}

