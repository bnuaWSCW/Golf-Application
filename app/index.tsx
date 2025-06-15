// importing modules to use in the code/app
import { router } from "expo-router";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";

// main screen - staring page
export default function Index() {
  return (
    // Everything that is viewed on the screen - with appropriate styles.
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
      }}
    >

      {/*  Background image with appropriate sources. 
      Flex style is used to take up all space on the screen. */}

      <ImageBackground source={require('../assets/images/welcome-08Ipbe8GpWw-unsplash.jpg')} 
      style={{ flex: 1 }}>


        {/* Title */}

        <View style={styles.top}>
          <Text style={styles.title}>Kiwi Golf</Text>
        </View>


        {/* Course, login and "if you do not have a login" container. Each view is a container */}
      
        <View style={styles.middleTexts}>

        {/* Course Text Box */}
         <TextInput style={styles.inputCourse}
           placeholder="Enter Course"
           placeholderTextColor='white'
          />

        {/* Login Button */}
          <TouchableOpacity 
          style={styles.inputLogin}
          onPress={() => router.push('/login')}>
           <Text style={{ color: '#697727', fontWeight: 'bold', fontSize: 30, 
            letterSpacing: 3, textAlign: 'center' }}>
            Login
           </Text>
          </TouchableOpacity>

        {/* Sign In Button */}
          <TouchableOpacity 
          style={styles.inputSignIn}
          onPress={() => router.push('/signin')}>
           <Text style={{ color: 'white', fontWeight: 'bold', 
            textDecorationLine: 'underline',}}>
            Don't have an account?
           </Text>
          </TouchableOpacity>

        </View>


        {/* View container for the bottom buttons */}
        <View style={styles.bottomNav}>

        {/* History button and icon */}
         <TouchableOpacity onPress={() => router.push('/history')}>
            <Image source={require('../assets/images/history-icon.jpg')} style={styles.navIcon} />
            <Text style={styles.navText}>History</Text>
         </TouchableOpacity>

        {/* Statistics button and icon */}
          <TouchableOpacity onPress={() => router.push('/statistics')}>
              <Image source={require('../assets/images/statistics-icon.jpg')} style={styles.navIcon} />
             <Text style={styles.navStats}>Statistics</Text>
          </TouchableOpacity>

        {/* Details button and icon */}
          <TouchableOpacity onPress={() => router.push('/detail')}>
            <Image source={require('../assets/images/details-icon-symbol-design-illustration-vector.jpg')} style={styles.navIcon} />
            <Text style={styles.navText}>Details</Text>
          </TouchableOpacity>

        </View>

      </ImageBackground>

    </View>

  );

}


// ----------------- \\
// ---- STYLES ----- \\
// ----------------- \\


const styles = {

// For the Kiwi Golf Title
title: {
  fontSize: 75,
  fontfamily: "Monospace",
  textAlign: 'center',
  color: 'white',
  top: 100,
  fontweight: 'bold',
  letterSpacing: 4,

},

// Course textInput
inputCourse: {
  fontSize: 30,
  backgroundColor: '#697727',
  borderRadius: 50,
  marginVertical: 25,
  width: '80%',
  textAlign: 'center',
  fontWeight: "bold",
  color: 'white',
},

// Login Button
inputLogin: {
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
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 10, 
  bottom: 35,
  width: '100%',
  fontfamily: 'sans-serif',
},

// Middle Container (For Course, Login)
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
}

};