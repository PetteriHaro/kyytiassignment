import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    DatePickerIOS,
    Platform,
} from 'react-native';

const timePicker = (props: any) => {
        let content = (
           null
        )

        if (Platform.OS === "ios") {
            content = (
                <View>
                    <Text onPress={props.toggleTimePicker} style={styles.doneText}>SET TIME</Text>
                    <DatePickerIOS
                        date={props.time}
                        mode="time"
                        onDateChange={(e) => props.setTime(e)} />
                </View>
            )
        }
        return (
            <View style={styles.TimePicker}>
                {content}
            </View>
        )
}

const styles = StyleSheet.create({
    TimePicker: {
        width: "100%",
        backgroundColor: "#F7F7F7",
        padding: 10
    },
    doneText: {
        color: "#1E87EF",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "right"
    }
})

export default timePicker;