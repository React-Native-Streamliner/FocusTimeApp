import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-view';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';
//import { TextInput } from 'react-native-paper';

export default function App() {
  const [ currentSubject, setCurrentSubject ] = useState(null)
  return (
      <SafeAreaView style={styles.container}>
        {!currentSubject 
          ? <Focus addSubject={setCurrentSubject}/> 
          : <View><Text style={styles.textStyle}>I am going to render the timer for {currentSubject}</Text></View>}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  textStyle: {
    color: colors.white,
  }
});
