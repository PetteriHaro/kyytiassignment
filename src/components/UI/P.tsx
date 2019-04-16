import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomP = (props: any) => (
    <Text style={styles.CustomP} >{props.children}</Text>
)

const styles = StyleSheet.create({
    CustomP: {
        fontSize: 26,
        color: "#424242"
    }
})

export default CustomP;