import { styles } from "@/assets/styles/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useLocalSearchParams } from "expo-router";
import { Menu } from 'lucide-react-native';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View, } from "react-native";
import { Row, Rows, Table } from "react-native-table-component";
import courseInfo from './Course_Data.json';

export default function Scorecard() {

// Course variable transferred from index.tsx
const { course } = useLocalSearchParams();

const initialCourse = Array.isArray(course) ? course[0] : course ?? null;

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
          <TouchableOpacity onPress={() => router.push('/')}
            style={{padding:10}}>
            <Text style={styles.endRound}>Home</Text>
          </TouchableOpacity>
      </View>
    )
   }

  React.useEffect(() => {
    const loadState = async () => {
      const savedScore = await AsyncStorage.getItem('score');
      const savedCourse = await AsyncStorage.getItem('course');
      if (savedScore) setScore(JSON.parse(savedScore));
      if (savedCourse) setCourseName(savedCourse);
    };
    loadState();
  }, []);

  React.useEffect(() => {
    AsyncStorage.setItem('score', JSON.stringify(score));
    AsyncStorage.setItem('course', courseName ?? "");
  }, [score, courseName]);


  // Increase score function for each of the 18 holes.
  const increaseScore = (index: number) => {
    setScore((prevScore) => {
      const newScore = [...prevScore];
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

//  Indexing for the table data
  const tableData = Array.from({ length: 18}, (_, i) => [
    `${1 + i}`, 
    findPar?.par[i], 
    <TouchableOpacity 
    onPress={() => increaseScore(i)}
    key = {`button-${i}`}
    >
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

              <TouchableOpacity onPress={() => setScore(Array(18).fill(0))}>
                <Text style={[styles.scorecardTitle, {position: 'absolute', left: 210}]}>RESET</Text>
              </TouchableOpacity>

          </View>


          {/* Second view container for the contents in the middle */}
          <View style={[styles.middleTexts, {height: '80%', position: 'absolute', top: 70, left: 25}]}>
            <ScrollView>
              {/* Table Data with respective styles */}
              <Table borderStyle={styles.tableBorder}
              >
              <Row data={tableTitle} 
                widthArr = {[95, 115, 150]}
                style={styles.tableHeader}
                textStyle={styles.headerText}
                />
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

          {/* Got to map button */}
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

