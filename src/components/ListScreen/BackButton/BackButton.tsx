import React from 'react';
import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const backButton = (props:any) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Icon name={"chevron-left"} color="black" size={40} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
       position: "absolute",
       top: 30,
       left: 0,
       padding: 8
    },
})

export default backButton;