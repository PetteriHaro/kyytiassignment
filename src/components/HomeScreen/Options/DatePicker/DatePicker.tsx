import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    DatePickerIOS,
    Platform,
} from 'react-native';

const DatePicker = (props: any) => {
        let content = (
            null
        )

        if (Platform.OS === "ios") {
            content = (
                <View>
                    <Text onPress={props.toggleDatePicker} style={styles.doneText}>SET DATE</Text>
                    <DatePickerIOS
                        date={props.date}
                        mode="date"
                        onDateChange={(e) => props.setDate(e)} />
                </View>
            )
        }
        return (
            <View style={styles.DatePicker}>
                {content}
            </View>
        )
}

const styles = StyleSheet.create({
    DatePicker: {
        width: "100%",
        backgroundColor: "#F7F7F7",
        padding: 10,
        zIndex: 2
    },
    doneText: {
        color: "#1E87EF",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "right"
    }
})

export default DatePicker;