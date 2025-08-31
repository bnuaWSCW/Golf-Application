// Importing Related Assets/Modules
import { styles } from "@/assets/styles/styles";
import { router } from "expo-router";
import { Menu } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Rows, Table } from "react-native-table-component";
import { overallHistory } from "./storage";

export default function Statistics() {

  const [history, setHistory] = useState<{score: Number; date: string }[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await overallHistory();
      setHistory(data);
    };
    fetchHistory();
  }, []);

  // Total Rounds Played
  const roundsPlayed = history.length

  // Average Scores
  const avgScore = history.length > 0 ? history.reduce((sum, item) => sum + Number(item.score), 0) / history.length: 0
  // Average Score rounded to 2 decimal places
  const shortAvgScore = avgScore.toFixed(2)

  // All scores
  const scores = history.map(item => Number(item.score));

  // Lowest Score 
  const lowestScore = Math.min(...scores);

  // Highest Score(for the range)
  const highestScore = Math.max(...scores);

  // Range
  const range = highestScore - lowestScore

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


   //  Indexing for the table data
     const tableData = [
        ["Rounds Played", roundsPlayed],
        ["Avg Score", shortAvgScore],
        ["Range", range],
        ["Highest Score", highestScore],
        ["Lowest Score", lowestScore]
       ];
     
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
              <Text style={[styles.scorecardTitle, {position: 'absolute', left: 70, top: 10, zIndex: 1}]}>Statistics</Text>

          </View>
 
              {/* Statistics Contents */}

            <View style={styles.details}> 
            <ScrollView>
              {/* Table Data with respective styles */}
              <Table borderStyle={styles.tableBorder}
              >
                <Rows data={tableData} 
                widthArr = {[230, 135]}
                heightArr={[145, 145, 145, 145]}
                style={{height: 145, backgroundColor: "white"}}
                textStyle={styles.rowText}
                />
              </Table>
            </ScrollView>

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

