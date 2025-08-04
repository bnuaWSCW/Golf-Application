import { forecast } from '@/assets/api.js';
import { styles } from "@/assets/styles/styles";
import { router, useLocalSearchParams } from "expo-router";
import { Menu } from 'lucide-react-native';
import React, { useState } from 'react';
import { ImageBackground, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export default function Map() {

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

          <TouchableOpacity onPress={() => router.push('/map')}
            style={{padding:10}}>
            <Text style={styles.scoreText}>Map</Text>
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

          <View style={styles.middleTexts}>
              <Text>{forecast("weather.")}</Text>
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

