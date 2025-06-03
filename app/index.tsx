import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/detail"} style={styles.button}>Link to details</Link>
      <Link href={"/statistics"} style={styles.button}>Link to statistics</Link>
      <Link href={"/scorecard"} style={styles.button}>Link to scorecard</Link>
      <Link href={"/map"} style={styles.button}>Link to map</Link>
      <Link href={"/sidemenu"} style={styles.button}>Link to side menu</Link>
    </View>
  );


}

const styles = {
  button: {
    textDecorationline: "underline",
    color: "white",
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
};