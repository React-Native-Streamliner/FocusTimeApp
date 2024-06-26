import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';
import Timer from './src/components/Timer';
import FocusHistory from './src/features/FocusHistory';

export default function App() {
  const [ currentSubject, setCurrentSubject ] = useState(null)
  const [ history, setHistory ] = useState([])
  return (
      <SafeAreaView style={styles.container}>
        {!currentSubject 
          ? <>
              <Focus addSubject={setCurrentSubject}/> 
              <FocusHistory history={history}/>
          </>
          : <Timer 
              focusSubject={currentSubject}
              clearSubject={() => setCurrentSubject(null)}
              onTimerEnd={(subject) => {
                setHistory([...history, subject])
              }}
            />}
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
