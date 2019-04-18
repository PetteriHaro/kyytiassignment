import React from 'react';
import {
    StyleSheet,
    TextInput
} from 'react-native';

const customInput = (props: any) => (
    <TextInput 
        style={styles.customInput}
        onChangeText={props.onChangeText}
        underlineColorAndroid="transparent"
        {...props} />
)

const styles = StyleSheet.create({
    customInput: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 8,
        textAlign: "right"
    },
})

export default customInput;