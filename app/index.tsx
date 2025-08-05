// importing modules to use in the code/app
import { router } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { styles } from '../assets/styles/styles';
import courseInfo from './Course_Data.json';

// Data variable used and called in the Enter Course dropdown
const data = [
  { key: '1', value: courseInfo[0]?.name },
  { key: '2', value: courseInfo[1]?.name },
  { key: '3', value: courseInfo[2]?.name },
  { key: '4', value: courseInfo[3]?.name },
  { key: '5', value: courseInfo[4]?.name },
  { key: '6', value: courseInfo[5]?.name },
  { key: '7', value: courseInfo[6]?.name },
  { key: '8', value: courseInfo[7]?.name },
  { key: '9', value: courseInfo[8]?.name },
  { key: '10', value: courseInfo[9]?.name },
  { key: '11', value: courseInfo[10]?.name },
  { key: '12', value: courseInfo[11]?.name },
  { key: '13', value: courseInfo[12]?.name },
  { key: '14', value: courseInfo[13]?.name },
  { key: '15', value: courseInfo[14]?.name },
  { key: '16', value: courseInfo[15]?.name },
  { key: '17', value: courseInfo[16]?.name },
  { key: '18', value: courseInfo[17]?.name },
  { key: '19', value: courseInfo[18]?.name },
  { key: '20', value: courseInfo[19]?.name },
  { key: '21', value: courseInfo[20]?.name },
  { key: '22', value: courseInfo[21]?.name },
  { key: '23', value: courseInfo[22]?.name },
  { key: '24', value: courseInfo[23]?.name },
  { key: '25', value: courseInfo[24]?.name },
  { key: '26', value: courseInfo[25]?.name },
  { key: '27', value: courseInfo[26]?.name },
  { key: '28', value: courseInfo[27]?.name },
  { key: '29', value: courseInfo[28]?.name },
  { key: '30', value: courseInfo[29]?.name },
  { key: '31', value: courseInfo[30]?.name },
  { key: '32', value: courseInfo[31]?.name },
  { key: '33', value: courseInfo[32]?.name },
  { key: '34', value: courseInfo[33]?.name },
  { key: '35', value: courseInfo[34]?.name },
  { key: '36', value: courseInfo[35]?.name },
  { key: '37', value: courseInfo[36]?.name },
  { key: '38', value: courseInfo[37]?.name },
  { key: '39', value: courseInfo[38]?.name },
  { key: '40', value: courseInfo[39]?.name },
  { key: '41', value: courseInfo[40]?.name },
  { key: '42', value: courseInfo[41]?.name },
  { key: '43', value: courseInfo[42]?.name },
  { key: '44', value: courseInfo[43]?.name },
  { key: '45', value: courseInfo[44]?.name },
  { key: '46', value: courseInfo[45]?.name },

]

// main screen - starting page
export default function Index() {

  // Constant used to remember and update variables based on user input
  const [ selected, setSelected] = React.useState("");

  return (
    // Everything that is viewed on the screen - with appropriate styles
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

          {/* Enter Course Functionality */}

          <SelectList
            setSelected={setSelected}
            data={data}
            onSelect={() => {
              const selectedCourse = data.find(item => item.key === selected)?.value;
              router.push({ pathname: '/scorecard', params: { course: selectedCourse } });
            }}

            // Styles for the Search Box

            boxStyles={styles.inputCourse}
            dropdownStyles={{
              backgroundColor: '#4c4c1c',
              borderWidth: 0,
            }}
            dropdownItemStyles={{alignItems: 'center'}}
            dropdownTextStyles={{color: 'white'}}
            placeholder="Enter Course"
            inputStyles={{
              color:'white',
              fontSize: 25,
              letterSpacing: 3,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            searchPlaceholder=""
            maxHeight={150}
            
          />


        {/* Login Button */}
          <TouchableOpacity 
          style={styles.inputLogin}
          onPress={() => router.push('/login')}>
           <Text style={{ color: '#4c4c1c', fontWeight: 'bold', fontSize: 30, 
            letterSpacing: 3, textAlign: 'center', }}>
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