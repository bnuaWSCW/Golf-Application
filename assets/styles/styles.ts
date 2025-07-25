import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
      alignItems: 'center',
      justifyContent: 'center',
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
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -20
  },

  scorecardTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 20,
    backgroundColor: "#697727",
  },

  // Table Styles

  datatable: {
    height: 70,
    backgroundColor: 'white',
  },

  rowText: {
    color: "#697727",
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold"
  },

  tableHeader: {
    height: 70,
    backgroundColor: "#697727"
  },

  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },

  tableBorder: {
    borderColor: "#464a1e",
    borderWidth: 5,
  },

  scoreText: {
      color: "#697727",
      padding: 10,
      backgroundColor: "white",
      borderRadius: 20,
      textAlign: 'center',
      fontSize: 25,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      borderWidth: 4,
      borderColor: "#464a1e"
  },

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

  heading: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    padding: 5,
    top: -10,
    fontWeight: 'bold'
  },

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
  }

  

  });
