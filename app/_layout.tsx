// Importing Related Assets/Modules
import { Stack } from "expo-router";

// Function for overall navigation of the app
export default function RootLayout() {
  return (
    <Stack>
      {/* Home Page */}
      <Stack.Screen name="index" options={{headerShown: false}}/>

      {/* Details Page */}
      <Stack.Screen name="detail" options={{ headerShown: false }} />

      {/* Map Page */}
      <Stack.Screen name="map" options={{ headerShown: false }} />

      {/* Scorecard Page */}
      <Stack.Screen name="scorecard" options={{ headerShown: false }} />

      {/* Statistics Page */}
      <Stack.Screen name="statistics" options={{ headerShown: false }} />

      {/* History Page */}
      <Stack.Screen name="history" options ={{headerShown: false}} />

      {/* Login Page */}
      <Stack.Screen name="login" options ={{headerShown: false}} />

      {/* Sign In Page */}
      <Stack.Screen name="signin" options ={{headerShown: false}} />
    </Stack>
  );
}
