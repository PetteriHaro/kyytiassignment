import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const legItem = (props: any) => {
    let {color, iconName, departureTime, distance} = props
    let transportIcon;
    let distanceText;
    
    if (props.displayName === "Walk") {
        transportIcon = <Icon name={iconName} color={color} size={25} style={styles.iconStyle} />
        distanceText = Math.ceil(distance /10) * 10 + "m"    
    } else {
        transportIcon = (
            <View style={styles.transportContainer}>
                <Icon name={iconName === "rail" ? "train" : iconName} color={color} size={25} style={styles.iconStyle} />
                <Text style={{color: color}}>{props.line.code}</Text>
            </View>
        )
        distanceText = new Date(departureTime).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", hour12: false})
    }


    return (
        <View style={{ alignItems: "center"}}>
            {transportIcon}
            <Text style={{color: color}}>{distanceText}</Text>
        </View>
    )
}   

const styles = StyleSheet.create({
    legItem: {
        width: "100%",
    },
    transportContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    smallText: {
        fontSize: 12
    },
    iconStyle: {
        margin: 3
    }
})

export default legItem;