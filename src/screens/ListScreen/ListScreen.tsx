import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Animated,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import BackButton from '../../components/ListScreen/BackButton/BackButton';
import RouteList from '../../components/ListScreen/RouteList/RouteList';
import RouteInfo from '../../components/ListScreen/RouteInfo/RouteInfo';
import Map from '../../components/ListScreen/Map/Map';
import RouteDetail from '../../components/ListScreen/RouteDetail/RouteDetail';

interface Props {
    navigation: any
}

class ListScreen extends Component <Props> {
    state = {
        routes: [],
        activeRoute: {},
        anim: new Animated.Value(0)
    }

    backHandler = () => {
        this.props.navigation.goBack()
    }

    componentWillMount() {
        const items = this.props.navigation.state.params.routes.routes.publicTransport;
        const itemsWithKeys = items.map((item: any) => {
            return {
                ...item,
                key: Math.random().toString()
            }
        })
        console.log(itemsWithKeys[0])
        this.setState({
            routes: itemsWithKeys,
            activeRoute: itemsWithKeys[0]
        })
    }

    showRouteDetail = () => {
        Animated.timing(this.state.anim, {
            toValue: 1
        }).start()
    }

    closeDetail = () => {
        Animated.timing(this.state.anim, {
            toValue: 0
        }).start()
    }

    changeActiveRoute = (key: string) => {
        console.log("MOI")
        const newActiveRoute = this.state.routes.find((route: any) => route.key === key);
        if (newActiveRoute.key === this.state.activeRoute.key) {
            return this.showRouteDetail()
        } else {
            return this.setState({
                activeRoute: newActiveRoute
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <BackButton onPress={this.backHandler}/>
                <RouteInfo 
                    start={this.props.navigation.state.params.route.start.name}
                    to={this.props.navigation.state.params.route.end.address}
                    date={this.props.navigation.state.params.route.time.toLocaleDateString("fi-FI")} />
                <Map activeRoute={this.state.activeRoute} />
                <RouteList
                    routes={this.state.routes}
                    changeActiveRoute={this.changeActiveRoute}
                    activeRouteKey={this.state.activeRoute.key}
                    state={this.state} />
               
                <Animated.View 
                    style={{
                        width: "95%",
                        position: "absolute",
                        maxHeight: Dimensions.get("window").height - 200,
                        bottom: 18,
                        zIndex: 12,
                        borderWidth: 1,
                        borderRadius: 10,
                        overflow: "hidden",
                        transform: [
                            {
                                translateY: this.state.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [Dimensions.get("window").height, 0]
                                })
                            },
                        ]
                    }}>
                    <RouteDetail 
                        closeDetail={this.closeDetail} 
                        legs={this.state.activeRoute.legs}
                        duration={this.state.activeRoute.duration.max} />
                </Animated.View>
                <Animated.View style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    top: 0,
                    left: 0,
                    zIndex: this.state.anim,
                    opacity: this.state.anim,
                }}>
                <TouchableOpacity onPress={this.closeDetail} style={{width: "100%", height: "100%"}}></TouchableOpacity>
                </Animated.View>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
})

export default ListScreen;