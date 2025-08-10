import { styles } from "@/assets/styles/styles";
import { router, useLocalSearchParams } from "expo-router";
import { Menu } from 'lucide-react-native';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View, } from "react-native";
import { Row, Rows, Table } from "react-native-table-component";
import courseInfo from './Course_Data.json';

export default function Scorecard() {

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

  const [score, setScore] = useState(Array(18).fill(0));

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
    
  const total = score.reduce((sum, current) => sum + current, 0);

  const totalscore = ['TOTAL', total]

 const findPar = courseInfo.find(courseInfo => courseInfo.name === course)

  const tableTitle = ['HOLE', 'PAR', 'SCORE'];


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

          <View style={[styles.middleTexts, {height: '80%', position: 'absolute', top: 70, left: 25}]}>
            <ScrollView>
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

            <Table borderStyle={styles.tableBorder}>
              <Row data={totalscore}
                style={styles.tableHeader}
                textStyle={styles.headerText}
                widthArr={[210, 150]}
              />
            </Table>



          </View>

          <View style={styles.bottomNav}>

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

