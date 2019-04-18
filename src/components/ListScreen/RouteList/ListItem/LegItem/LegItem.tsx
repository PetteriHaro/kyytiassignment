import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const legItem = (props: any) => {
    let transportNumber;
    let startPlaceName = props.places[0].name
    let finishPlace = props.places[props.places.length - 1].name;
    if (props.displayName !== "Walk") {
        transportNumber = (
            <View style={{width: "110%"}}>
                <View style={styles.transportContainer}>
                    <Text style={styles.smallText}>{new Date(props.departureTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</Text>
                    <Text style={{color: props.backgroundColor}}>{props.line.code}</Text>
                    <Text style={styles.smallText}>{new Date(props.arrivalTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})}</Text>
                </View>
                <View style={styles.transportContainer}>
                    <Text style={styles.smallText}>{startPlaceName}</Text>
                    <Text style={styles.smallText}>{finishPlace}</Text>
                </View>
            </View>
            
        )
    }

    return (
        <View style={{width: `${props.width}%`, minWidth: 20,alignItems: "center"}}>
            <Icon name={props.iconName} color={props.backgroundColor} size={20} />
            <View style={{backgroundColor: props.backgroundColor, height: 5, width: "100%", marginVertical: 5}}/>
            {transportNumber}
        </View>
    )
}   

const styles = StyleSheet.create({
    legItem: {
        width: "100%",
    },
    transportContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    smallText: {
        fontSize: 12
    }
})

export default legItem;