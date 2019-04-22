import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

const routeInfo = (props: any) => (
    <View style={styles.container}>
        <View style={styles.destContainer}>
            <Text style={styles.headerText}>Start</Text>
            <Text>{props.start}</Text>
        </View>
        <View style={[styles.destContainer, {borderLeftWidth: 1, borderColor: "#ccc", paddingLeft: 10}]}>
            <Text style={styles.headerText}>Destination</Text>
            <Text>{props.to}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "95%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        backgroundColor: "white",
        zIndex: 2,
        ...Platform.select({
            ios: {
                top: 80,
            },
            android: {
                top: 50
            }
        })
    },
    destContainer: {
        width: "50%",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 16
    }
})

export default routeInfo;