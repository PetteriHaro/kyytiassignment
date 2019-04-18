import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import ListItem from './ListItem/ListItem'

const routeList = (props: any) => (
    <FlatList 
        data={props.routes}
        style={styles.list}
        keyExtractor={(item: any) => item.sortingIndex.toString()}
        renderItem={(info) => (
            <ListItem 
                price={info.item.totalPrice.formattedPrice}
                arrivalTime={info.item.arrivalTime.time}
                departureTime={info.item.departureTime.time}
                distance={info.item.distance}
                duration={info.item.duration}
                legs={info.item.legs} />
        )} />
)

const styles = StyleSheet.create({
    list: {
        width: "100%",
    },
})

export default routeList;