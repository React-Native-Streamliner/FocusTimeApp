import { Text, View } from "react-native";

const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {

    return (
        <View>
            <Text>Timer {focusSubject}</Text>
        </View>
    );
};

export default Timer;