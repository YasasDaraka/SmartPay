import { Stack } from "expo-router";
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
export default function RootLayout() {
  return (
    <SafeAreaProvider>
    <PaperProvider>
    <StatusBar hidden={false} />
    <SafeAreaView style={{ flex: 1 }}>
    <Stack>
      <Stack.Screen name="index"  options={{ headerShown: false }} />
      <Stack.Screen name="screens/pages/Dashboard"  options={{ headerShown: false }} />
    </Stack>
    </SafeAreaView>
    </PaperProvider>
    </SafeAreaProvider>
  );
}
