import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import LegItem from './LegItem/LegItem';
import Icon from 'react-native-vector-icons/Feather'

const listItem = (props: any) => {
    const legs = props.legs.map((leg: any) => (
        <LegItem 
            key={leg.distance}
            color={leg.color}
            iconName={leg.iconRef}
            distance={leg.distance}
            displayName={leg.displayName}
            line={leg.line}
            arrivalTime={leg.arrivalTime.time}
            departureTime={leg.departureTime.time}
            places={leg.places} />
    ))
    let time = <Text>{Math.round(props.duration.max / 60)} min</Text>;
    if (props.active) {
        time = <Icon name="chevron-up" color="orange" size={25} />
    }
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: props.active ? "#eee" : "white"}]} onPress={props.onPress}>
            <View style={styles.timeContainer}>
                <Text>{new Date(props.departureTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})}</Text>
                {time}
                <Text>{new Date(props.arrivalTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})}</Text>
            </View>
            <View style={styles.legsContainer}>
                {legs}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 8,
        alignItems: "center",
        borderRadius: 5
    },
    timeContainer: {
        width: "97%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    legsContainer: {
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 7,
    }
})

export default listItem;