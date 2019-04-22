import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import InputItem from './InputItem/InputItem';


const form = (props: any) => {
    return (
        <View style={styles.form}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>From</Text>
                <TouchableOpacity onPress={props.showPlaceSearch} style={styles.input}>
                    <Text style={{textAlign: "right", color: "black"}}>{props.route.start.name}, {props.route.start.city}</Text> 
                </TouchableOpacity>
            </View>
            
            <InputItem 
                placeholder="Destination"
                value={props.controls.destination.value}
                title="To"/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        width: "100%",
        alignItems: "center",
        marginTop: 20
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
        width: "80%"
    },
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    }
})

export default form;