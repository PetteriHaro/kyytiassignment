import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { CheckBox } from 'react-native-elements';

const checkBox = (props: any) => (
    <View style={{marginLeft: 15}}>
        <CheckBox 
            checked={props.checked}
            iconType={"feather"}
            checkedIcon={"check-circle"}
            uncheckedIcon={"circle"}
            size={20}
            onPress={props.onPress}
            checkedColor= "#FF7505"
            containerStyle={styles.checkBoxContainer} />
        <Text>{props.title}</Text>    
    </View>
)

const styles = StyleSheet.create({
    checkBoxContainer: {
        padding: 0,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
})

export default checkBox;