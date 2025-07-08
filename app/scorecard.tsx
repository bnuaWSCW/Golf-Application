import { Link, useLocalSearchParams } from "expo-router";
import { Text, View, } from "react-native";
import { styles } from '../assets/styles/styles';
import courseInfo from './Course_Data.json';

export default function Scorecard() {
  const { course } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.navText}>Edit app/index.tsx to edit this screen.</Text>
      <Text>This is the scorecard screen</Text>
      <Link href="/" style={{ color: "blue", marginTop: 20 }}>
              Go back to Home
      </Link>
      <Link href={"/statistics"} style={styles.navText}>Link to statistics</Link>
      <Link href={"/scorecard"} style={styles.navText}>Link to scorecard</Link>
      <Link href={"/map"} style={styles.navText}>Link to map</Link>
      <Link href={"/sidemenu"} style={styles.navText}>Link to side menu</Link>

      <Text>{courseInfo[45]?.name}</Text>
      <Text>{courseInfo[45]?.par[17]}</Text>
      <Text>{course}</Text>
           
              
    </View>
  );
}

