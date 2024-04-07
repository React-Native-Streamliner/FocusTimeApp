import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

export default function Focus({ addSubject }) {
    const [ subject, setSubject ] = useState(null)
    onChangeText = (val) => {setSubject(val)}
    console.log(subject)
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textStyle}
                    onChangeText={onChangeText}
                    label="What would you like to focus on?"
                />
                <View style={styles.button}>
                    <RoundedButton title="+" size={50} onPress={() => addSubject(subject)}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        padding: 25,
        justifyContent: 'top',
        flexDirection: 'row',
    },
    textStyle: {
        flex: 1,
        marginEnd: 10,
    },
    button: {
        justifyContent: 'center',
    }
})