import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';
import ListItem from './ListItem/ListItem'

const routeList = (props: any) => (
        <FlatList 
            data={props.routes}
            style={styles.list}
            extraData={props.state}
            renderItem={(info:any) => (
                <ListItem 
                    price={info.item.totalPrice.formattedPrice}
                    arrivalTime={info.item.arrivalTime.time}
                    departureTime={info.item.departureTime.time}
                    distance={info.item.distance}
                    duration={info.item.duration}
                    legs={info.item.legs}
                    active={props.activeRouteKey === info.item.key ? true : false}
                    onPress={() => props.changeActiveRoute(info.item.key)} />
            )} />
    
)

const styles = StyleSheet.create({
    list: {
        width: "95%",
        position: "absolute",
        bottom: 20,
        zIndex: 2,
        overflow: "hidden",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#919191",
        maxHeight: 220,
        borderRadius: 5
    },
})

export default routeList;