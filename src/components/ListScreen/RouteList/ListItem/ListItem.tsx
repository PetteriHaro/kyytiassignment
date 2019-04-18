import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import LegItem from './LegItem/LegItem'

const listItem = (props: any) => {
    const legs = props.legs.map((leg: any) => (
        <LegItem 
            key={leg.distance}
            width={leg.duration.max / props.duration.max * 100}
            backgroundColor={leg.color}
            iconName={leg.iconRef}
            distance={leg.distance}
            displayName={leg.displayName}
            line={leg.line}
            arrivalTime={leg.arrivalTime.time}
            departureTime={leg.departureTime.time}
            places={leg.places} />
    ))
    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <Text>{new Date(props.departureTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</Text>
                <Text>{new Date(props.arrivalTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</Text>
            </View>
            <View style={styles.legsContainer}>
                {legs}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 8,
        marginVertical: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        alignItems: "center"
    },
    timeContainer: {
        width: "97%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    legsContainer: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 7
    }
})

export default listItem;