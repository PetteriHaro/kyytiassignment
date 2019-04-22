import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Platform
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
       left: 0,
       padding: 5,
       zIndex: 10,
       ...Platform.select({
           ios: {
               top: 30
           },
           android: {
               top: 0
           }
       })
    },
})

export default backButton;