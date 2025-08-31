// Importing Related Assets/Modules
import { StyleSheet } from 'react-native';

// Exporting 'styles' as a StyleSheet
export const styles = StyleSheet.create({
  // Title(for specifically the starting page)
    title: {
      fontSize: 75,
      fontFamily: "Roboto",
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      letterSpacing: 5,
      marginTop: 50,
    },


  // Course textInput
  inputCourse: {
    backgroundColor: '#4c4c1c',
    width: '85%',
    borderRadius: 50,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  // Login Button
  inputLogin: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 50,
    width: '80%',
  },

  // Sign In Button
  inputSignIn: {
    padding: 8,
    borderRadius: 50,
    width: '80%',
  },

  // Top container (Title)
  top: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%',
  },

  // Top Container ( Menu )
  topMenu: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },


  // Middle Container
  middleTexts: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  },

  // Bottom Container (For Details, Statistics, History)
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10, 
    position: 'absolute',
    bottom: 35,
    width: '100%',
  },

  // Styles for Icon images on the bottom section
  navIcon: {
    width: 60,
    height: 60,
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },

  // Styles for text on the bottom section
  navText: {
      color: "white",
      marginTop: 10,
      padding: 10,
      backgroundColor: "#697727",
      borderRadius: 20,
      fontFamily: "sans-serif",
      textAlign: 'center',
      fontSize: 20,
      marginLeft: -11
  },

  // Styles for specifically Statistics
  navStats: {
      color: "white",
      marginTop: 10,
      padding: 10,
      backgroundColor: "#697727",
      borderRadius: 20,
      fontFamily: "sans-serif",
      textAlign: 'center',
      fontSize: 20,
      marginLeft: -20
  },

  // Style for the Scorecard Title
  scorecardTitle: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 20,
    backgroundColor: "#697727",
  },

  // Table Styles

  // Styles for Specifically the table itself
  datatable: {
    height: 70,
    backgroundColor: 'white',
  },

  // Styles for the text of the tables
  rowText: {
    color: "#697727",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold"
  },

  // Styles for the table headers
  tableHeader: {
    height: 70,
    backgroundColor: "#697727"
  },

  // Second style for table headers
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },

  // Style for the borders of the table
  tableBorder: {
    borderColor: "#464a1e",
    borderWidth: 5,
  },

  // Style for the score
  scoreText: {
      color: "#697727",
      padding: 10,
      backgroundColor: "white",
      borderRadius: 20,
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      borderWidth: 4,
      borderColor: "#464a1e"
  },

  // Style for the Side Menu(positioning)
  sideMenu: {
    position:'absolute', 
    top: 120, 
    left: 65, 
    zIndex: 10,
    padding: 35,
    backgroundColor: "#697727",
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 5
  },

  // Second Heading Style(For Side Menu)
  heading: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    padding: 5,
    top: -10,
    fontWeight: 'bold'
  },

  // Style for End Round Button(Side Menu)
  endRound: {
      color: "white",
      padding: 10,
      backgroundColor: "#697727",
      borderRadius: 20,
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      borderColor: "white",
      borderWidth: 4
  },

  // Style for the image placeholder(Map)
  imagePlaceholder: {
    resizeMode: 'stretch',
    position: 'absolute',
    zIndex: 0,
    width: '60%',
    height: '110%',
    marginTop: 10,
    marginLeft: 180,
    borderColor: "#464a1e",
    borderWidth: 10
  },

  // Text Style for Details Page
  detailText: {
      color: "#697727",
      marginTop: 10,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 20,
      fontFamily: "sans-serif",
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      borderColor: "#697727",
      width: '90%',
      letterSpacing: 1,
      borderWidth: 7
  },

  // Positioning For Details
  details: {
    height: "80%", 
    position: 'absolute', 
    zIndex: 0, 
    top: 65, 
    marginLeft: 20, 
    width: '100%'
  },

  // Positioning for History
    history: {
      height: "80%", 
      position: 'absolute', 
      zIndex: 0, 
      top: 65, 
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
  },

  // Style for History Text
    historyText: {
      color: "#697727",
      marginTop: 15,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 20,
      fontFamily: "sans-serif",
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      borderColor: "#697727",
      letterSpacing: 1,
      borderWidth: 5,
  
  }});
