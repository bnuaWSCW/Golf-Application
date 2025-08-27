import { styles } from "@/assets/styles/styles";
import { router } from "expo-router";
import { Menu } from 'lucide-react-native';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

// 

export default function History() {

  // Side menu useState function. False = hidden. True = exposed.
  const [menuVisible, setmenuVisible] = useState(false);

  // Hides the side menu when clicking anywhere else other than the side menu
  const offClick = () => {
    setmenuVisible(false);
  };

  // Side Menu Component/function

   const SideMenu = () => {
    return (
      <View style={styles.sideMenu}>
        {/* Title */}
        <Text style={styles.heading}>Kiwi Golf</Text>

        {/* Resume Button */}
        <TouchableOpacity onPress={() => setmenuVisible(false)}
          style={{padding:10}}>       
          <Text style={styles.scoreText }>Resume</Text>
          </TouchableOpacity>

          {/* Statistics Button */}
          <TouchableOpacity onPress={() => router.push('/statistics')}
            style={{padding:10}}>
            <Text style={styles.scoreText}>Statistics</Text>
          </TouchableOpacity>
        
        {/* History Button */}
          <TouchableOpacity onPress={() => router.push('/detail')}
            style={{padding:10}}>
            <Text style={styles.scoreText}>Details</Text>
          </TouchableOpacity> 

        {/* Home Button */}
          <TouchableOpacity onPress={() => router.push('/')}
            style={{padding:10}}>
            <Text style={styles.endRound}>Home</Text>
          </TouchableOpacity>
      </View>
    )
   }



    


  return (
    // TouchableWIthoutFeedback = if you press anywhere on the screen, the side menu hides.
    <TouchableWithoutFeedback onPress={offClick}>
      {/* Original View Container */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: 'column',
        }}>
          {/* The image background */}
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

              <Text style={[styles.scorecardTitle, {position: 'absolute', left: 70, top: 10, zIndex: 1}]}>History</Text>


          </View>
 
              {/* Detail Contents */}

            <ScrollView style={styles.details}>
                
              <Text style={styles.detailtext}>There are a multitude of factors when playing golf and trying to get the best score you possibly can get. 
                Wind, weather, slope, choice of club, swing thought, hole placement - they are all things golfers take into account while playing a hole. 
                Though knowing whether the wind is going left or right is easy, knowing specifics and the strengths of such specifications is frustrating.
              </Text>

              <Text style={styles.detailtext}>As someone who has played golf for nearly 2 years, I know the consequences of not taking into account different factors when playing golf. 
                Golf depends on weather, hole placement, distance, etc. When you forget even one of these factors, it may detriment the shot. 
                This is why I want to make an app to showcase information on these factors especially for regular intermediate golfers.
              </Text>

              <Text style={styles.detailtext}>My purpose for the creation of this digital outcome is to inform regular intermediate golfers about environmental factors and hazards that may affect their golf shot. 
                My digital outcome informing these users on these factors and hazards are in hopes of these golfers playing to the best of their ability in their golf shot and through whatever lie they have. 
                These environmental factors, may detriment the golf shot tremendously, and I want to make sure these factors are addressed.
              </Text>

            </ScrollView>

            <View style={styles.bottomNav}>
              <TouchableOpacity onPress={() => router.push({pathname: '/'})} 
              style={{width: '85%'}}>
                <Text style={styles.scoreText}>GO BACK</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

      </View>
    </TouchableWithoutFeedback>
  );
}

