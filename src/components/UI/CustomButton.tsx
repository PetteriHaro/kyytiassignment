import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const customButton = (props: any) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.customButton}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>    
)

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#FF7505",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16
    }
})

export default customButton;