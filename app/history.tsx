// Importing Related Assets/Modules
import { styles } from "@/assets/styles/styles";
import { router } from "expo-router";
import { Menu } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { overallHistory } from "./storage";

export default function History() {

  // useState array of user history objects - each has a score and date
  const [history, setHistory] = useState<{ score: number; date: string }[]>([]);

  // fetches the user's history when the component is called
  useEffect(() => {
    const fetchHistory = async () => {
      // calls the dadta from storage.ts
      const data = await overallHistory();
      // updates history with the data from storage.ts
      setHistory(data);
    };
    // actually calls the function
    fetchHistory();
  }, []);

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
          <TouchableOpacity onPress={() => router.push('/history')}
            style={{padding:10}}>
            <Text style={styles.scoreText}>History</Text>
          </TouchableOpacity> 

        {/* Home Button */}
          <TouchableOpacity onPress={() => router.push('/')}
            style={{padding:10}}>
            <Text style={styles.endRound}>Home</Text>
          </TouchableOpacity>
      </View>
    )
   };

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

            {/* Side Menu Button */}
            <TouchableOpacity
              onPress={() => setmenuVisible(true)}
              style={{marginRight: 10}}>
              <Menu color='white' size ={50}/>
            </TouchableOpacity>
            {/* If menu Visible is true, run Side Menu function */}
              {
                menuVisible ? <SideMenu /> :null
              }

              {/* Title */}
              <Text style={[styles.scorecardTitle, {position: 'absolute', left: 70, top: 10, zIndex: 1, fontSize: 25}]}>History</Text>


          </View>
 
              {/* History Contents */}

            <View style={styles.history}> 
              {/* Score and Date titles */}
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
                <Text style={styles.historyText}> Score:</Text>
                <Text style={styles.historyText}> Date:</Text>
              </View>

              {/* Renders the array like a scrollview component */}
              <FlatList
                // the array of history information.
                data={history}
                // Ensures each item has a key(index)
                keyExtractor={(_, i) => i.toString()}
                // Shows how each item should be displayed
                renderItem={({ item }) => (
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '90%',
                  marginVertical: 5
                  }}>
                    {/* Score for one game(object) */}
                    <Text style={styles.historyText}> Score: {item.score}</Text>
                    {/* Date for that same game(object) */}
                    <Text style={styles.historyText}> {new Date(item.date).toLocaleString()}</Text>
                  </View>
                )}
              />
            </View>

            {/* Back button */}
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

