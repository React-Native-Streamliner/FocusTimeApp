import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function Focus() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput label="What would you like to focus on?"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 0.5,
        padding: 25,
        justifyContent: 'top',
    }
})