// importing modules to use in the code/app
import { Link } from "expo-router";
import { Text, View } from "react-native";

// main screen - staring page
export default function Index() {
  return (
    // what is viewed on the screen
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Text>Edit app/index.tsx to edit this screen.</Text>

      {/* // Link to details */}
      <Link href={"/detail"} style={styles.button}>Link to details</Link>

      {/* // Link to statistics */}
      <Link href={"/statistics"} style={styles.button}>Link to statistics</Link>

      {/* // Link to scorecard */}
      <Link href={"/scorecard"} style={styles.button}>Link to scorecard</Link>

      {/* // Link to map */}
      <Link href={"/map"} style={styles.button}>Link to map</Link>

      {/* // Link to side menu */}
      <Link href={"/sidemenu"} style={styles.button}>Link to side menu</Link>
    </View>
  );


}
// styles for the buttons/links
const styles = {
  button: {
    color: "white",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#697727",
    borderRadius: 5,
    fontFamily: "serif",
    
  },
};