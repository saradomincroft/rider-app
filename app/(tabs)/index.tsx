import "../../global.css"
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-red-500 items-center justify-center">
      <Text>Open up App.js to start</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}