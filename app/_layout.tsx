import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"/>
      <Stack.Screen name="detail" options={{ headerTitle: "Details" }} />
      <Stack.Screen name="map" options={{ headerTitle: "Map" }} />
      <Stack.Screen name="scorecard" options={{ headerTitle: "Scorecard" }} />
      <Stack.Screen name="statistics" options={{ headerTitle: "Statistics" }} />
      <Stack.Screen name="sidemenu" options={{ headerTitle: "Menu" }} />
      <Stack.Screen name="history" options ={{headerTitle: "History"}} />
    </Stack>
  );
}
