import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import CustomInput from '../../../UI/CustomInput';

const inputItem = (props: any) => (
    <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{props.title}</Text>
        <CustomInput 
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText} />
    </View>
)

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    inputText: {
        fontWeight: "bold",
        fontSize: 14,
    }
})

export default inputItem;