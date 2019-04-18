import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import {Slider} from 'react-native-elements';


const sliders = (props: any) => (
    <View style={styles.container}>
        <View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.itemText}>How many passengers?</Text>
                <Text style={styles.itemText}>{props.route.passengers.count}</Text> 
            </View> 
            <Slider 
                value={props.route.passengers.count}
                maximumValue={10}
                minimumValue={1}
                step={1}
                onSlidingComplete={props.onPassengerCountChange}
                thumbTintColor="#FF7505"  />  
        </View>
        <View>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.itemText}>Extra Luggage</Text>
                <Text style={styles.itemText}>{props.route.extraInfo.extraLuggageCount}</Text> 
            </View> 
            <Slider 
                value={props.route.extraInfo.extraLuggageCount}
                maximumValue={10}
                minimumValue={0}
                step={1}
                onSlidingComplete={props.onLuggageCountChange}
                thumbTintColor="#FF7505" />  
        </View>
       
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: "98%",
        marginVertical: 10
    },
    itemText: {
        fontWeight: "600",
        fontSize: 14
    }
})

export default sliders;