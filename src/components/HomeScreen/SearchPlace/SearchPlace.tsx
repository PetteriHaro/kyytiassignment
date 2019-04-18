import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Platform,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CustomH2 from '../../UI/CustomH2';
import PlaceList from './PlaceList/PlaceList';
import ListItem from './PlaceList/ListItem/ListItem';

const searchPlace = (props: any) => {
    let list = (
        <PlaceList 
            placeData={props.placeData}
            setStartPoint={props.setStartPoint} />  
    )
    if (props.placesLoading) {
        list = <ActivityIndicator size="large" color="#FF7505" />
    }
    return (
        <View style={styles.container}>
            <CustomH2>Choose start point</CustomH2>
            <TouchableOpacity onPress={props.closePlaceSearch} style={styles.close}>
                <Icon name="x" color="black" size={30} />
            </TouchableOpacity>
            <TextInput 
                value={props.value}
                style={styles.input}
                placeholder="Enter Start Point"
                onChangeText={props.changeStartText}
                onFocus={props.onFocus}/>
            <ListItem 
                title="Your Location"
                subtitle={props.userLocation.name}
                onPress={props.setUserLocation} />    
            {list}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: '100%',
        backgroundColor: "white",
        alignItems: "center",
        ...Platform.select({
            ios: {
                paddingTop: 45
            },
            android: {
                paddingTop: 10
            }
        })
    },
    close: {
        position: "absolute",
        left: 10,
        ...Platform.select({
            ios: {
                top: 40
            },
            android: {
                top: 5
            }
        })
    },
    input: {
        width: "95%",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        textAlign: "right",
        marginVertical: 10
    }
})

export default searchPlace;