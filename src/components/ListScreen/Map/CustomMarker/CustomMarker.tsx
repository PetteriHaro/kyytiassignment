import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const customMarker = (props:any) => (
    <View style={[styles.marker, {borderWidth: 2, borderColor: props.color, width: props.size, height: props.size}]}>
        <Icon name={props.iconName === "rail" ? "train" : props.iconName} color={props.color} size={16} style={styles.icon} />
    </View>
)

const styles = StyleSheet.create({
    marker: {
        borderRadius: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    icon: {
        padding: 3
    }
})

export default customMarker;