import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Keyboard from './src/components/Keyboard';
import ThemeContext from './src/context/ThemeContext';
import { globalStyles } from './src/styles/globalStyles';

export default function App() {
  return (
    <ThemeContext>
      <SafeAreaView style={[globalStyles.container]}>
        <Keyboard />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeContext>
  );
}
