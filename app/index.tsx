// importing modules to use in the code/app
import { router } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

// main screen - staring page
export default function Index() {
  return (
    // what is viewed on the screen
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
      }}
    >

      <ImageBackground source={require('../assets/images/welcome-08Ipbe8GpWw-unsplash.jpg')} 
      style={{ flex: 1 }}>

        <View style={styles.topNav}>
          <Text style={styles.title}>Kiwi Golf</Text>
        </View>

        <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => router.push('/history')}>
          <Image source={require('../assets/images/history-icon.jpg')} style={styles.navIcon} />
          <Text style={styles.navText}>History</Text>

        </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/statistics')}>
              <Image source={require('../assets/images/statistics-icon.jpg')} style={styles.navIcon} />
             <Text style={styles.navText}>Statistics</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/detail')}>
            <Image source={require('../assets/images/details-icon-symbol-design-illustration-vector.jpg')} style={styles.navIcon} />
            <Text style={styles.navText}>Details</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>







    </View>



  );


}

const styles = {

title: {
  fontSize: 75,
  fontfamily: "serif",
  textAlign: 'center',
  color: 'white',
  top: 75,
  fontweight: 'bold',
},

topNav: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 10, 
  bottom: 35,
  width: '100%',
},

bottomNav: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 10, 
  position: 'absolute',
  bottom: 35,
  width: '100%',
},

navIcon: {
  width: 60,
  height: 60,
  padding: 5,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',

},

navText: {
    color: "white",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#697727",
    borderRadius: 20,
    fontFamily: "serif",
    textAlign: 'center',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
},

};