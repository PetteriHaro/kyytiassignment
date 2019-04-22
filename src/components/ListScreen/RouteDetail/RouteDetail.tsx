import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
} from 'react-native';
import DetailItem from './DetailItem/DetailItem';

const routeDetail = (props: any) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.closeDetail} style={styles.closeButton}>
            <Text style={{color: "black", fontWeight: "bold"}}>CLOSE</Text>
        </TouchableOpacity>
        <View style={styles.durationContainer}>
            <Text style={{fontWeight: "bold", color: "black"}}>{Math.round(props.duration / 60)}min</Text>
        </View>
        <ScrollView style={styles.innerContainer} bounces={false}>
            {props.legs.map((leg:any, index: number) => (
                <DetailItem 
                    distance={leg.distance}
                    key={leg.distance}
                    color={leg.color}
                    iconName={leg.iconRef}
                    displayName={leg.displayName}
                    line={leg.line}
                    startPoint={leg.places[0].name}
                    last={props.legs.length - 1 === index ? true : false}
                    endPoint={leg.places[leg.places.length -1].name}
                    arrivalTime={leg.arrivalTime.time}
                    departureTime={leg.departureTime.time} />
        ))}
        </ScrollView>
        
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
        borderRadius: 10,
    },
    closeButton: {
        position: "absolute",
        right: 10,
        top: 10,
        backgroundColor: "orange",
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
    },
    durationContainer: {
        width: "15%", 
        alignItems: "center", 
        justifyContent: "flex-end", 
        marginTop: 30,
    },
    innerContainer: {
        marginTop: 5,
        width: "100%",
        borderTopWidth: 1,
        borderColor: "#ccc",
        paddingVertical: 10
    }
})

export default routeDetail;