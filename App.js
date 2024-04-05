import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-view';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';
//import { TextInput } from 'react-native-paper';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <Focus />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  }
});
