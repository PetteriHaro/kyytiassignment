import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import DatePicker from './DatePicker/DatePicker';
import TimePicker from './TimePicker/TimePicker';
import CheckBoxes from './CheckBoxes/CheckBoxes';
import Sliders from './Sliders/Sliders';

const options = (props: any) => {
    let content = (
        <View style={styles.inputContainer}>
            <Text style={styles.inputText}>When</Text>
            <View style={styles.timeContainers}>
                <TouchableOpacity onPress={props.toggleDatePicker} style={styles.input}>
                    <Text style={styles.resultText}>{props.state.route.time.date.toLocaleDateString() === new Date().toLocaleDateString() ? "Today" : props.state.route.time.date.toLocaleDateString(["en-EN"])}</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={props.toggleTimePicker} style={styles.input}>
                    <Text style={styles.resultText}>{props.state.route.time.time.toLocaleTimeString([], {hour12: false, hour: "2-digit", minute: "2-digit"})}</Text> 
                </TouchableOpacity>
                
            </View>
        </View>
    )
    let datePicker = null
    if (props.state.datePickerShowing){
        datePicker = (
            <DatePicker 
                date={props.state.route.time.date}
                setDate={props.setDate}
                toggleDatePicker={props.toggleDatePicker} />
        );
    }    

    let timePicker = null
    if (props.state.timePickerShowing) {
        timePicker = (
            <TimePicker 
                time={props.state.route.time.time}
                setTime={props.setTime}
                toggleTimePicker={props.toggleTimePicker} />
        )
    }

    let boxesAndSliders = (
        <View>
            <CheckBoxes 
                timeType={props.state.route.timeType}
                changeTimeType={props.changeTimeType} />
            <View style={styles.additionalContainer}>
                <Text style={styles.inputText}>Additional Options</Text>
                <Sliders 
                    route={props.state.route}
                    onPassengerCountChange={props.onPassengerCountChange}
                    onLuggageCountChange={props.onLuggageCountChange} />
            </View>
        </View>
    )

    if (props.state.datePickerShowing || props.state.timePickerShowing) {
        content = (
            <Text></Text>    
        )
        boxesAndSliders= <Text></Text>
    }
    return (
        <View style={styles.Options}>
            {content}
            {datePicker}
            {timePicker}
            {boxesAndSliders}
        </View>
    )
}

const styles = StyleSheet.create({
    Options: {
        width: "100%",
        marginBottom: 20
    },
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    inputText: {
        fontWeight: "bold",
        fontSize: 14,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        marginLeft: 10
    },
    resultText: {
        textAlign: "right",
        color: "black"
    },
    timeContainers: {
        flexDirection: "row"
    },
    additionalContainer: {
        width: "100%",
        alignItems: "flex-start",
        marginBottom: 10,
    }
})

export default options;