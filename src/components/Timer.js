import { useState } from "react";
import { Text, View, StyleSheet, Vibration } from "react-native";
import { Countdown } from "./Countdown";
import { RoundedButton } from "./RoundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { ProgressBar } from "react-native-paper";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS
];

const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
    const [ isStarted, setIsStarted ] = useState(false);
    const [ progress, setProgress ] = useState(1);
    const [minutes, setMinutes ] = useState(0.1);

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown 
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={() => {
                        Vibration.vibrate(PATTERN)
                    }}
                />
                <View style={{paddingTop: spacing.xxl}}>
                    <Text style={styles.title}>Focusing on:</Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
            </View>
            <View style={{ paddingTop: spacing.sm }}>
                <ProgressBar 
                    progress={progress}
                    color={colors.progressBar} 
                    style={{ height: spacing.sm }}
                />
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