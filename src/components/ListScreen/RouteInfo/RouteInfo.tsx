import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const routeInfo = (props: any) => (
    <View style={styles.container}>
        <View style={styles.destContainer}>
            <Text style={styles.headerText}>Start</Text>
            <Text>{props.start}</Text>
        </View>
        <View style={styles.destContainer}>
            <Text style={styles.headerText}>Destination</Text>
            <Text>{props.to}</Text>
        </View>
        <Text style={[styles.headerText, {textAlign: "left"}]}>{props.date}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10
    },
    destContainer: {
        marginBottom: 15
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 16
    }
})

export default routeInfo;