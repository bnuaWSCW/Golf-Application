import { styles } from "@/assets/styles/styles";
import { router } from "expo-router";
import { Menu } from 'lucide-react-native';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

// 

export default function Detail() {

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
            <Text style={styles.endRound}>Home</Text>
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
        }}>

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

              <Text style={[styles.scorecardTitle, {position: 'absolute', left: 70, top: 10}]}>Details</Text>


          </View>
 
              {/* Detail Contents */}

            <ScrollView style={[{height: "0%"}]}>
                
              <Text style={styles.detailtext}>My purpose for the creation of this digital outcome is to inform regular intermediate golfers about environmental factors and hazards that may affect their golf shot. 
                My digital outcome informing these users on these factors and hazards are in hopes of these golfers playing to the best of their ability in their golf shot and through whatever lie they have. 
                These environmental factors, may detriment the golf shot tremendously, and I want to make sure these factors are addressed.
              </Text>

              <Text style={styles.detailtext}>My purpose for the creation of this digital outcome is to inform regular intermediate golfers about environmental factors and hazards that may affect their golf shot. 
                My digital outcome informing these users on these factors and hazards are in hopes of these golfers playing to the best of their ability in their golf shot and through whatever lie they have. 
                These environmental factors, may detriment the golf shot tremendously, and I want to make sure these factors are addressed.
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

