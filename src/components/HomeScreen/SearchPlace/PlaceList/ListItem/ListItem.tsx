import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

const listItem = (props:any) => (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text>{props.title}</Text>
        <Text>{props.subtitle}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },
})

export default listItem;