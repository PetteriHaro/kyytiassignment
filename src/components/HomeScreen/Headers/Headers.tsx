import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import CustomH1 from '../../UI/CustomH1';
import CustomH2 from '../../UI/CustomH2';

const headers = () => (
    <View style={styles.container}>
        <CustomH1>ROUTE PLANNING</CustomH1> 
        <CustomH2>with KYYTI API</CustomH2>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
})

export default headers;