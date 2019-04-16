import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    PermissionsAndroid,
    Platform,
    Button,
    Text
} from 'react-native';
import CustomH1 from '../../components/UI/CustomH1';
import CustomH2 from '../../components/UI/CustomH2';

class HomeScreen extends Component {
    state = {
        locationGranted: false,
        userLocation: {
            coords: {
                latitude: 60.189863,
                longitude: 24.921628
            }
        }
    }

    async componentDidMount() {
        if (Platform.OS === "ios") {
            navigator.geolocation.getCurrentPosition(
                (result) => this.setUserLocation(result.coords),
            )
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location needed for planning",
                        message: "We need your location to plan your routes for you.",
                        buttonNeutral: "Ask me later",
                        buttonNegative: "Deny",
                        buttonPositive: "Give Access",
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    navigator.geolocation.getCurrentPosition(
                        (result) => this.setUserLocation(result.coords),
                    )
                } else {
                    this.setState({locationGranted: false})
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    setUserLocation = (coords: any) => {
        let latitude: number = coords.latitude;
        let longitude: number = coords.longitude;
        let userCoords = {
            latitude: latitude,
            longitude: longitude
        }
        this.setState({
            locationGranted: true,
            userLocation: {
                coords: userCoords
            }
        })
    }

    render() {
        let content: any = (
            <View>
                <Button title="LOG" onPress={() => console.log(this.state)} />
            </View>
        )
        if (!this.state.locationGranted) {
            content = (
                <Text>Location is Not Granted</Text>
            )
        }
        return (
            <View style={styles.container}>
                <CustomH1>ROUTE PLANNING</CustomH1> 
                <CustomH2>with KYYTI API</CustomH2>
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default HomeScreen;