// importing modules to use in the code/app
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

// main screen - staring page
export default function Index() {
  return (
    // what is viewed on the screen
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >

      <Text></Text>

      {/* // Link to details */}
      <Link href={"/detail"} style={styles.button}>Details</Link>

      {/* // Details Icon */}
      <Image
        source={require('../assets/images/details-icon-symbol-design-illustration-vector.jpg')}
        style={{ width: 50, height: 50, marginTop: 20, borderRadius: 50}}
      />

      {/* // Link to statistics */}
      <Link href={"/statistics"} style={styles.button}>Link to statistics</Link>

        {/*// Statistics Icon */}
      <Image
        source={require('../assets/images/statistics-icon.jpg')}
        style={{ width: 50, height: 50, marginTop: 20, borderRadius: 50}}
      />
      {/* // Link to History */}
      <Link href={"/history"} style={styles.button}>Link to history</Link>

        {/*// Hisotry Icon */}
      <Image
        source={require('../assets/images/history-icon.jpg')}
        style={{ width: 50, height: 50, marginTop: 20, borderRadius: 50}}
      />


    </View>



  );


}
// styles for the buttons/links
const styles = {
  button: {
    color: "white",
    marginTop: 20,
    padding: 15,
    backgroundColor: "#697727",
    borderRadius: 50,
    fontFamily: "serif",
    
  },
};