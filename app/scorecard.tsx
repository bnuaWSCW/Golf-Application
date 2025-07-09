import { styles } from "@/assets/styles/styles";
import { router, useLocalSearchParams } from "expo-router";
import { Menu } from 'lucide-react-native';
import { ImageBackground, Text, TouchableOpacity, View, } from "react-native";

export default function Scorecard() {
  const { course } = useLocalSearchParams();

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

        <View style={styles.middleTexts}>

        </View>

           
      </ImageBackground>
      
    </View>

  );
}

