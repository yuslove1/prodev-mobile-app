import { Stack } from "expo-router";
import '../global.css'
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="home" />
    </Stack>
  );
}