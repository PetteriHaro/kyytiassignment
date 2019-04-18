import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const listItem = (props:any) => {
    let item = (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
            <Text>{props.subtitle}</Text>
        </TouchableOpacity>
    )
    if (props.title === "Your Location") {
        item = (
            <TouchableOpacity style={[styles.container, {flexDirection: "row", justifyContent: "space-between", alignItems: "center"}]} onPress={props.onPress}>
                <View>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text>{props.subtitle}</Text>
                </View>
                <Icon color="#FF7505" name="crosshair" size={25} />
            </TouchableOpacity>
        )
    }
    return item
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        backgroundColor: "white"
    },
    title: {
        fontWeight: "bold"
    }
})

export default listItem;