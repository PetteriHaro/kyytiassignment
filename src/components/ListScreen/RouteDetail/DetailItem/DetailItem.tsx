import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const detailItem = (props:any) => {
    let description = <Text>{Math.ceil(props.distance / 10) * 10}m</Text>
    let departureTime = null;
    let arrivalTime = null;

    if (props.last) {
        arrivalTime = <Text>{new Date(props.arrivalTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})}</Text>
    }
    if (!props.last) {
        departureTime = <Text>{new Date(props.departureTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})}</Text>
    }
    if (props.displayName !== "Walk" && !props.last) {
        description = (
            <Text style={{color: props.color}}>{props.line.code}</Text>
        )
        arrivalTime = <Text>{new Date(props.arrivalTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})}</Text>
    }


    return (
        <View style={styles.container}>
            <View style={styles.timelineContainer}>
                {departureTime}
                <View style={[styles.timeline, {borderColor: props.color, height: props.displayName === "Walk" ? "75%" : "60%"}]} />
                {arrivalTime}
            </View>
            <View style={[styles.detailContainer, {borderColor: props.color}]}>
                <View style={{alignItems: "center"}}>
                    <Icon name={props.iconName === "rail" ? "train" : props.iconName} size={30} color={props.color} />
                    {description}
                </View>
                <View style={{justifyContent: "space-between", height: "100%", alignItems: "flex-end"}}>
                    <Text>{props.startPoint}</Text>
                    <Text>{props.endPoint}</Text>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 100,
        marginBottom: 20,
    },
    timelineContainer: {
        width: "15%",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
    },
    timeline: {
        borderLeftWidth: 3,
        borderRadius: 10
    },
    detailContainer: {
        width: "80%",
        marginRight: "2%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: "100%",
        alignItems: "center",
        borderWidth: 1,
        borderRightWidth: 8,
        borderLeftWidth: 8,
        backgroundColor: "#eee",
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between"
    },
})

export default detailItem;