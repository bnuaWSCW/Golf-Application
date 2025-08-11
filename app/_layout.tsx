import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="detail" options={{ headerShown: false }} />
      <Stack.Screen name="map" options={{ headerShown: false }} />
      <Stack.Screen name="scorecard" options={{ headerShown: false }} />
      <Stack.Screen name="statistics" options={{ headerShown: false }} />
      <Stack.Screen name="history" options ={{headerShown: false}} />
      <Stack.Screen name="login" options ={{headerShown: false}} />
      <Stack.Screen name="signin" options ={{headerShown: false}} />
    </Stack>
  );
}
