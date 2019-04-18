import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomH2 = (props: any) => (
    <Text style={styles.CustomH2} >{props.children}</Text>
)

const styles = StyleSheet.create({
    CustomH2: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#161616",
        textAlign: "center"
    }
})

export default CustomH2;