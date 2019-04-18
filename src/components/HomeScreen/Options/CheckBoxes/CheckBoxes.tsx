import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import CheckBox from './CheckBox/CheckBox';

const checkBoxes = (props: any) => (
    <View style={styles.container}>
        <CheckBox 
            checked={props.timeType === "arrival" ? true : false}
            onPress={() => props.changeTimeType("arrival")}
            title="Arrival" />    
        <CheckBox 
            checked={props.timeType === "departure" ? true : false}
            onPress={() => props.changeTimeType("departure")}
            title="Departure" />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 20
    },
})

export default checkBoxes;