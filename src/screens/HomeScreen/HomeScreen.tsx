import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    PermissionsAndroid,
    Platform,
    Text,
    ActivityIndicator,
    DatePickerAndroid,
    TimePickerAndroid,
    Animated
} from 'react-native';
import HeaderText from '../../components/HomeScreen/Headers/Headers';
import Form from '../../components/HomeScreen/Form/Form';
import Options from '../../components/HomeScreen/Options/Options';
import CustomButton from '../../components/UI/CustomButton';
import SearchPlace from '../../components/HomeScreen/SearchPlace/SearchPlace';

const FETCH_HEADERS = {
    Accept: "application/json",
    "Accept-language": "en-US",
    "Content-type": "application/json",
    "set-cookie": "kyytiDemoSID=s%3ARsIacAvSYgv90r3qHJ8wcfN_C0udDJbY.Ns5Uh%2BrQ7a1gmM0elp96lAHOaUzGi8Men5XDzpyxyac"
}

interface Props {
    navigation: any
}

interface State {
    datePickerShowing: boolean,
    timePickerShowing: boolean,
    locationGranted: boolean,
    placesLoading: boolean,
    isLoading: boolean,
    userLocation: object,
    error: string,
    suggestedPlaces: {
        search: []
    },
    route: {
        start: object,
        end: object,
        timeType: string,
        time?: object,
        routeModes: string,
        passengers: {
            count: number
        },
        extraInfo: object
    },
    controls: {
        startLocation: {
            value: string
        },
        destination: {
            value: string
        }
    }
    anim: any
}

class HomeScreen extends Component <Props, State> {
    state = {
        isLoading: false,
        placesLoading: false,
        datePickerShowing: false,
        timePickerShowing: false,
        locationGranted: true,
        error: "",
        userLocation: {
            location: {
                lat: 60.189863,
                lon: 24.921628
            }
        },
        suggestedPlaces: {
            search: []
        },
        controls: {
            startLocation: {
                value: ""
            },
            destination: {
                value: "Fredrikinkatu 47, Helsinki"
            }
        },
        route: {
            start: {},
            end: {},
            timeType: "departure",
            routeModes: "publicTransport",
            passengers: {
                count: 1
            },
            extraInfo: {
                extraLuggageCount: 0
            },
            time: {
                date: new Date(),
                time: new Date()
            }
        },
        anim: new Animated.Value(0)
    }

    async componentDidMount() {
        if (Platform.OS === "ios") {
            this.setUserLocation()
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
                    this.setUserLocation()
                } else {
                    this.setState({locationGranted: false})
                }
            } catch (err) {
                console.log(err)
            }
        }
    }

    openPlaceSearch = () => {
        Animated.timing(this.state.anim, {
            toValue: 1
        }).start()
    }

    closePlaceSearch = () => {
        Animated.timing(this.state.anim, {
            toValue: 0
        }).start()
    }

    clearControl = () => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    startLocation: {
                        ...prevState.controls.startLocation,
                        value: ""
                    }
                }
            }
        })
    }

    setUserLocation = () => {
        navigator.geolocation.getCurrentPosition((locationObj: any) => {
            const latitude = locationObj.coords.latitude;
            const longitude = locationObj.coords.longitude;
            this.setState({isLoading: true})
            fetch(`https://api.demo.kyyti.io/geocoder/v1/reverse?at=${latitude},${longitude}&radius=1000`, {
                headers: FETCH_HEADERS
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return this.setState({error: "Something Went Wrong"})
                }
            })
            .then(userLocation => {
                this.setState(prevState => {
                    return {
                        userLocation: {
                            location: {
                                lat: latitude,
                                lon: longitude
                            }
                        },
                        route: {
                            ...prevState.route,
                            start: userLocation
                        },
                        error: "",
                        controls: {
                            startLocation: {
                                value: `${userLocation.name}, ${userLocation.city}`
                            },
                            destination: {
                                value: this.state.controls.destination.value
                            }
                        },
                        locationGranted: true
                    }
                    
                })
                this.setState({isLoading: false})
            })
            .catch(err => {
                this.setState({isLoading: false})
                console.log(err)
            })
        }, 
        err => console.log(err)
        )
    }

    changeStartText = (val: any) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    startLocation: {
                        ...prevState.controls.startLocation,
                        value: val
                    }
                }
            }
        }, () => {
            this.getPlaces()
        })
        
    }

    getPlaces = () => {
        const latitude: number = this.state.userLocation.location.lat;
        const longitude: number = this.state.userLocation.location.lon;
        const startLocation: string = this.state.controls.startLocation.value;
        const url = `https://api.demo.kyyti.io/places/v2/search?at=${latitude},${longitude}&text=${startLocation}`;
        this.setState({placesLoading: true})
        fetch(url, {
            credentials: "include",
            headers: FETCH_HEADERS
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                this.setState({
                    error: "Something went wrong",
                    placesLoading: false
                })
            }
        })
        .then(parsedRes => {

            this.setState({placesLoading: false})
            console.log(parsedRes)
            return this.setState({suggestedPlaces: parsedRes})
        })
        .catch(err => {
            console.log(err)
            this.setState({placesLoading: false})
        })
    }

    setStartPoint = (place: object) => {
        this.setState(prevState => {
            return {
                route: {
                    ...prevState.route,
                    start: place
                }
            }
        }, () => this.closePlaceSearch())
    }

    setDate = (newDate: Date) => {
        this.setState(prevState => {
            return {
                route: {
                    ...prevState.route,
                    time: {
                        ...prevState.route.time,
                        date: newDate,
                    }
                }
            }
        })
    }

    setTime = (newTime: Date) => {
        this.setState(prevState => {
            return {
                route: {
                    ...prevState.route,
                    time: {
                        ...prevState.route.time,
                        time: newTime
                    }
                }
            }
        })
    }

    datePickerToggle = async () => {
        let currentState = this.state.datePickerShowing
        if (Platform.OS === "ios") {
            return this.setState({datePickerShowing: !currentState})
        } else {
            try {
                const {action, year, month, day}: any = await DatePickerAndroid.open({
                  date: this.state.route.time.date
                });
                if (action === "dismissedAction") {
                    return this.setDate(this.state.route.time.date)
                }
                return this.setDate(new Date(year, month, day))
              } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
              }
        }
       
    }

    timePickerToggle = async () => {
        let currentState = this.state.timePickerShowing
        let date = this.state.route.time.date;
        let time = this.state.route.time.time
        if (Platform.OS === "ios") {
            return this.setState({timePickerShowing: !currentState})
        } else {
            try {
                const {action, minute, hour}:any = await TimePickerAndroid.open({
                  hour: this.state.route.time.time.getHours(),
                  minute: this.state.route.time.time.getMinutes(),
                  is24Hour: true
                });
                if (action === "dismissedAction") {
                    return this.setTime(new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes()))
                }
                return this.setTime(new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, minute))
              } catch ({code, message}) {
                console.warn('Cannot open date picker', message);
              }
        }
    }

    findRoute = () => {
        const time = this.state.route.time
        const timeObject = new Date(time.date.getFullYear(), time.date.getMonth(), time.date.getDate(), time.time.getHours(), time.time.getMinutes())
        const routeBody: object = {
            start: this.state.route.start,
            end: {
                address: "Fredrikinkatu 47",
                city: "Helsinki",
                country: "Suomi",
                type: "address",
                location: {
                    lat: 60.166312,
                    lon: 24.934494
                }
            },
            timeType: this.state.route.timeType,
            routeModes: this.state.route.routeModes,
            passengers: this.state.route.passengers,
            extraInfo: this.state.route.extraInfo,
            time: timeObject
        }
        this.setState({isLoading: true})
        fetch("https://api.demo.kyyti.io/routing/v1/routes", {
            method: "POST",
            headers: FETCH_HEADERS,
            body: JSON.stringify(routeBody)
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return this.setState({error: "Finding Route Failed"})
            }
        })
        .then(parsedRes => {
            console.log(parsedRes)
            this.setState({isLoading: false})
            if (parsedRes.errors) {
                return this.setState({error: parsedRes.errors[0].message})
            }
            this.props.navigation.navigate("List", {routes: parsedRes, route: routeBody})
        })
        .catch(err => {
            this.setState({isLoading: false})
            throw new Error(err)
        })
    }

    changeTimeType = (val: string) => {
        if (this.state.route.timeType !== val) {
            return this.setState(prevState => {
                return {
                    route: {
                        ...prevState.route,
                        timeType: val
                    }
                }
            })
        }
    }

    passengerCountChange = (val: number) => {
        console.log()
        this.setState(prevState => {
            return {
                route: {
                    ...prevState.route,
                    passengers: {
                        ...prevState.route.passengers,
                        count: val
                    }
                }
            }
        })
    }

    luggageCountChange = (val: number) => {
        this.setState(prevState => {
            return {
                route: {
                    ...prevState.route,
                    extraInfo: {
                        ...prevState.route.extraInfo,
                        extraLuggageCount: val
                    }
                }
            }
        })
    }

    render() {
        let button = <CustomButton onPress={this.findRoute}>FIND ROUTE</CustomButton>
        if (this.state.isLoading) {
            button = <ActivityIndicator size="large" color="#FF7505" />
        }
        if (this.state.datePickerShowing || this.state.timePickerShowing) {
            button = (
                <Text></Text>
            )
        }
        let content: any = (
            <View style={{width: "90%", alignItems: "center"}}>
                 <Form
                    getPlace={this.getPlaces}
                    findRoute={this.findRoute}
                    controls={this.state.controls}
                    isLoading={this.state.isLoading}
                    datePickerShowing={this.state.datePickerShowing}
                    route={this.state.route}
                    showPlaceSearch={this.openPlaceSearch} />
                 <Options 
                    state={this.state}
                    setDate={this.setDate}
                    setTime={this.setTime}
                    toggleDatePicker={this.datePickerToggle}
                    toggleTimePicker={this.timePickerToggle}
                    changeTimeType={this.changeTimeType}
                    onPassengerCountChange={this.passengerCountChange}
                    onLuggageCountChange={this.luggageCountChange} />   
                {button}  

                <Text style={{color: "red", fontWeight: "bold", fontSize: 16}}>{this.state.error}</Text> 
            </View>
           
        )
        if (!this.state.locationGranted) {
            content = (
                <View style={{alignItems: "center"}}>
                    <Text>Location is Not Granted</Text>
                    <Text>Go to your phone's settings to change permissions</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <HeaderText />
                <Animated.View style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 5,
                    transform: [
                        {
                            translateY: this.state.anim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-1000, 0]
                            })
                        }
                    ]
                }}>
                    <SearchPlace 
                        closePlaceSearch={this.closePlaceSearch}
                        value={this.state.controls.startLocation.value}
                        changeStartText={this.changeStartText}
                        onFocus={this.clearControl}
                        placeData={this.state.suggestedPlaces.search}
                        placesLoading={this.state.placesLoading}
                        setStartPoint={this.setStartPoint} />
                </Animated.View>
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
})

export default HomeScreen;