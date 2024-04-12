import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Countdown } from "./Countdown";
import { RoundedButton } from "./RoundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
    const [ isStarted, setIsStarted ] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown 
                    isPaused={!isStarted}
                    onProgress={() => {}}
                    onEnd={() => {}}
                />
                <View style={{paddingTop: spacing.xxl}}>
                    <Text style={styles.title}>Focusing on:</Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted && (<RoundedButton title='Start' onPress={() => setIsStarted(true)}/>)}
                {isStarted && (<RoundedButton title='Pause' onPress={() => setIsStarted(false)}/>)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    task: {
        color: colors.white,
        textAlign: 'center'
    }
});

export default Timer;