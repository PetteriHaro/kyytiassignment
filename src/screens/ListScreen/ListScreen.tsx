import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import BackButton from '../../components/ListScreen/BackButton/BackButton';
import CustomH1 from '../../components/UI/CustomH1';
import CustomH2 from '../../components/UI/CustomH2';
import RouteList from '../../components/ListScreen/RouteList/RouteList';
import RouteInfo from '../../components/ListScreen/RouteInfo/RouteInfo';

interface Props {
    navigation: any
}

class ListScreen extends Component <Props> {
    state = {
        routes: this.props.navigation.state.params.routes.routes.publicTransport
    }

    backHandler = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <BackButton onPress={this.backHandler}/>
                <CustomH1>ROUTE OPTIONS</CustomH1>
                <CustomH2>Using Public Transportation</CustomH2>
                <RouteInfo 
                    start={this.props.navigation.state.params.route.start.name}
                    to={this.props.navigation.state.params.route.end.address}
                    date={this.props.navigation.state.params.route.time.toLocaleDateString("fi-FI")} />
                <RouteList
                    routes={this.state.routes} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 45
    }
})

export default ListScreen;