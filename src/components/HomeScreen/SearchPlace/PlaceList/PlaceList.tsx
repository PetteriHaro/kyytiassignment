import React from 'react';
import {
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';
import ListItem from './ListItem/ListItem';

interface Place {
    title: string,
    city: string,
    location: {
        lat: number,
        lon: number
    },
    name: string,
    subtitle: string,
    type: string,
}

const placeList = (props: any) => (
    // <FlatList 
    //     data={props.placeData}
    //     style={styles.container}
    //     renderItem={(info: any) => (
    //         <ListItem 
    //             title={info.item.title}
    //             subtitle={info.item.subtitle}
    //             key={Math.random().toString()}
    //             onPress={() => props.setStartPoint(info.item)} />
    //     )} />
    <ScrollView style={styles.container}>
        {props.placeData.map((place: Place) => (
            <ListItem 
                key={Math.random().toString()}
                title={place.title}
                subtitle={place.subtitle}
                onPress={() => props.setStartPoint(place)} />
        ))}
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 10,
    },
})

export default placeList;