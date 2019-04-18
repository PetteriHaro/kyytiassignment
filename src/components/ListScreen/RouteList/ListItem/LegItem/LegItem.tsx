import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const legItem = (props: any) => {
    let transportNumber;
    let walkIcon = <Icon name={props.iconName} color={props.backgroundColor} size={20} />;
    let transportIcon = <Icon name={props.iconName} color="white" size={20} />
    if (props.displayName !== "Walk") {
        transportNumber = (
            <View style={{width: "110%"}}>
                <View style={styles.transportContainer}>
                    <Text style={{color: props.backgroundColor}}>{props.line.code}</Text>
                </View>
            </View>
        )
        walkIcon = transportNumber
        transportIcon = <Icon name={props.iconName === "rail" ? "train" : props.iconName} color={props.backgroundColor} size={20} />
    }


    return (
        <View style={{width: `${props.width}%`, minWidth: 15, alignItems: "center"}}>
            {transportIcon}
            <View style={{backgroundColor: props.backgroundColor, height: 5, width: "100%", marginVertical: 5}}/>
            {walkIcon}
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
        justifyContent: "center"
    },
    smallText: {
        fontSize: 12
    }
})

export default legItem;