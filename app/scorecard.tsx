// Importing Related Assets/Modules
import { styles } from "@/assets/styles/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useLocalSearchParams } from "expo-router";
import { Menu } from 'lucide-react-native';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View, } from "react-native";
import { Row, Rows, Table } from "react-native-table-component";
import courseInfo from './Course_Data.json';
import { saveScore } from "./storage";

export default function Scorecard() {

// Course variable transferred from index.tsx
const { course } = useLocalSearchParams();

// Saves the total score and pushes back to home - the home button
const saveRound = async () => {
  await saveScore(total);
  router.push("/");
}

// Ensures the value of course is either a string or null
const initialCourse = Array.isArray(course) ? course[0] : course ?? null;

// Holds the selected course name and can change. Value can only be a string or null
const [courseName, setCourseName] = useState<string | null>(initialCourse);


  // Side menu useState function. False = hidden. True = exposed.
  const [menuVisible, setmenuVisible] = useState(false);

  // Hides the side menu when clicking anywhere else other than the side menu
  const offClick = () => {
    setmenuVisible(false);
  };

  // useState function for the score - makes 18 zero's and puts them in a list.
  const [score, setScore] = useState(Array(18).fill(0));

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
          <TouchableOpacity onPress={saveRound}
            style={{padding:10}}>
            <Text style={styles.endRound}>Home</Text>
          </TouchableOpacity>
      </View>
    )
   }


  // Function for loading any saved scores and courses.
  React.useEffect(() => {
    const loadState = async () => {
      const savedScore = await AsyncStorage.getItem('score');
      const savedCourse = await AsyncStorage.getItem('course');
      // if a saved score exists, load the saved score
      if (savedScore) setScore(JSON.parse(savedScore));
      // if a saved course exists, load the saved course
      if (savedCourse) setCourseName(savedCourse);
    };

    // Load the function
    loadState();
  }, []);

  // Function for saving the course and the score
  React.useEffect(() => {
    // Stores and sets a score in the AsyncStorage
    AsyncStorage.setItem('score', JSON.stringify(score));
    // Stores and sets the course in the AsyncStorage. Sets course as "" if there is nothing.
    AsyncStorage.setItem('course', courseName ?? "");
  }, [score, courseName]);


  // Increase score function for each of the 18 holes.
  const increaseScore = (index: number) => {
    setScore((prevScore) => {
      const newScore = [...prevScore];
      // if the score is over 10, reset to 0. Else add one to the score.
      if (newScore[index] >= 10) {
        newScore[index] = 0;
      } else {
        newScore[index] += 1;
      }
      return newScore;
    });
  };

// Finds the golf course name
 const findPar = courseInfo.find(courseInfo => courseInfo.name === course)

//  Indexing for the table data - creates an array with 18 objects.
  const tableData = Array.from({ length: 18}, (_, i) => [
    // Hole number = i(index which is the value of the array) + 1. Fills in for every 18 objects
    `${1 + i}`, 
    // Finds the par for the specific hole for the specific course
    findPar?.par[i], 
    // Responsible for button that runs increaseScore for each 18 buttons.
    <TouchableOpacity 
    onPress={() => increaseScore(i)}
    key = {`button-${i}`}>

      {/* Shows the score */}
      <Text style={styles.rowText}>{score[i]}</Text>

    </TouchableOpacity>
    ]);
  
  // Add the sum of all scores on the table
  const total = score.reduce((sum, current) => sum + current, 0);

  // Total score table
  const totalscore = ['TOTAL', total]

  // Headings for each table
  const tableTitle = ['HOLE', 'PAR', 'SCORE'];

// -------------------------- \\
// ----- Actual Content ----- \\
// -------------------------- \\

  return (
    // TouchableWIthoutFeedback = if you press anywhere on the screen, the side menu hides.
    <TouchableWithoutFeedback onPress={offClick}>
      {/* Original View Container */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: 'column',
        }}
      >
        {/* Image Background for the screen */}
        <ImageBackground source={require('../assets/images/welcome-08Ipbe8GpWw-unsplash.jpg')}
        style={{ flex: 1}}>

          {/* The container for the top part of the screen */}
          <View style={styles.topMenu}>

              {/* Menu Icon */}
              <TouchableOpacity
                onPress={() => setmenuVisible(true)}
                style={{marginRight: 10}}>
                <Menu color='white' size ={50}/>
              </TouchableOpacity>
              {/* If menuVisible is true, Side Menu function appears */}
              {
                menuVisible ? <SideMenu /> :null
              }
              {/* Shows selected course from the starting page */}
              <Text style={[styles.scorecardTitle, {position: 'absolute', left: 70, top: 10}]}>{course}</Text>

              {/* Fills all of the 18 objects in the score array to 0 */}
              <TouchableOpacity onPress={() => setScore(Array(18).fill(0))}>
                <Text style={[styles.scorecardTitle, {position: 'absolute', left: 210}]}>RESET</Text>
              </TouchableOpacity>

          </View>


          {/* Second view container for the contents in the middle */}
          <View style={[styles.middleTexts, {height: '80%', position: 'absolute', top: 70, left: 25}]}>

            <ScrollView>
              {/* Table Data with respective styles */}
              <Table borderStyle={styles.tableBorder}>

                {/* The row for the headings(Hole, Par, Score) */}
              <Row data={tableTitle} 
                widthArr = {[95, 115, 150]}
                style={styles.tableHeader}
                textStyle={styles.headerText}
                />

                {/* Rows for the contents */}
                <Rows data={tableData} 
                widthArr = {[95, 115, 150]}
                style={styles.datatable}
                textStyle={styles.rowText}
                />

              </Table>
            </ScrollView>

              {/* Table showing total score */}
            <Table borderStyle={styles.tableBorder}>
              <Row data={totalscore}
                style={styles.tableHeader}
                textStyle={styles.headerText}
                widthArr={[210, 150]}
              />
            </Table>

          </View>

          {/* Bottom view container */}
          <View style={styles.bottomNav}>

          {/* Go to map button and taking the course name as a parameter */}
            <TouchableOpacity onPress={() => router.push({pathname: '/map', params: { course: course}})} 
            style={{width: '85%'}}>
              <Text style={styles.scoreText}>GO TO MAP</Text>
            </TouchableOpacity>

          </View>

        </ImageBackground>

      </View>

    </TouchableWithoutFeedback>

  );
}

