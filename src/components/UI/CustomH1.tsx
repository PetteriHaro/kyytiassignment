import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomH1 = (props: any) => (
    <Text style={styles.CustomH1} >{props.children}</Text>
)

const styles = StyleSheet.create({
    CustomH1: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FF7505",
        width: "95%",
        textAlign: "center"
    }
})

export default CustomH1;