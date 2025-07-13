import { styles } from "@/assets/styles/styles";
import { router, useLocalSearchParams } from "expo-router";
import { Menu } from 'lucide-react-native';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import { Row, Rows, Table } from "react-native-table-component";
import courseInfo from './Course_Data.json';

export default function Scorecard() {

  const { course } = useLocalSearchParams();

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


  const findPar = courseInfo.find(courseInfo => courseInfo.name === course)

  const tableTitle = ['HOLE', 'PAR', 'SCORE'];

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
    

  const totalscore = ['TOTAL', '']


  return (

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
              onPress={() => router.push('/sidemenu')}
              style={{marginRight: 10}}>

              <Menu color='white' size ={50}/>
            
            </TouchableOpacity>

            <Text style={styles.scorecardTitle}>{course}</Text>

        </View>

        <View style={[styles.middleTexts, {height: '80%'}]}>
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

          <TouchableOpacity onPress={() => router.push('/map')} style={{width: '85%'}}>
            <Text style={styles.scoreText}>GO TO MAP</Text>
          </TouchableOpacity>

        </View>

           
      </ImageBackground>
      
    </View>

  );
}

