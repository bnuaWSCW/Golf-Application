import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Detail() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the details screen</Text>
      <Link href="/" style={{ color: "blue", marginTop: 20 }}>
        Go back to Home
      </Link>
       <Link href={"/statistics"} style={styles.button}>Link to statistics</Link>
        <Link href={"/scorecard"} style={styles.button}>Link to scorecard</Link>
        <Link href={"/map"} style={styles.button}>Link to map</Link>
        <Link href={"/sidemenu"} style={styles.button}>Link to side menu</Link>
        
        

    </View>
  );
}

const styles = {
  button: {
    textDecorationLine: "underline",
    color: "white",
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
    textAlign: "center" as "center",
    width: 200,
  },
};